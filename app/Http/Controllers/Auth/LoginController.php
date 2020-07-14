<?php

namespace App\Http\Controllers\Auth;

use App\Events\UserActivation;
use App\Http\Controllers\Controller;
use App\User;
use App\UserSettings;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Alert;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Handle a login request to the application.
     *
     * @param Request $request
     * @return RedirectResponse|Response|JsonResponse
     *
     * @throws ValidationException
     */

    public function login(Request $request)
    {
        $mobile = str_replace(' - ', '', $request->mobile);
        $v = Validator::make($request->all(), [
            $this->username() => 'required|regex:/^(09)[0-9]{2}( - )[0-9]{3}( - )[0-9]{4}$/',
        ]);
        if ($v->fails()) {
            return \response("Invalid Parameters");
        }


        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        $user = User::whereMobile($mobile)->first();

        if ($user && $user->password == '') {
            $response = event(new UserActivation($user));
            return \response('Has not Password');
            if ($response[0] == 200)
                return \response('Has not Password');
            else
                return \response("Error on Send SMS");
        } else if ($user && $user->password != '') {
            return \response("Has Password");
        } else {
            $user = User::create([
                'mobile' => $mobile,
            ]);
            $user->userSettings()->create();
            $response = event(new UserActivation($user));
            return response("User Created");
            if ($response[0] == 200)
                return \response('User Created');
            else
                return \response("Error on Send SMS");

        }
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username()
    {
        return 'mobile';
    }

    public function checkActivationCode(Request $request)
    {
        $v = Validator::make($request->all(), [
            'activationCode' => 'required|regex:/^[0-9]{4}$/',
            'mobile' => 'required|regex:/^(09)[0-9]{9}$/',
        ]);
        if ($v->fails())
            return \response("Invalid activationCode");

        $user = User::whereMobile($request->mobile)->first();

        if (!$user)
            return \response('Invalid Mobile');

        $activationCode = $user->activationCodes()->latest()->first();

        if ($request->activationCode != $activationCode->code)
            return \response('Incorrect activationCode');

        if ($activationCode->expire <= Carbon::now())
            return \response('Expired activationCode');

        auth()->loginUsingId($user->id);

        $response['message'] = 'True activationCode';
        $response['user'] = user()->with(['business' => function ($query) {
            $query->with(['categories' => function ($query) {
                $query->with(['wares']);
            }]);
        }])->find(user()->id);

        $passwordQuestion = null;

        if (!$user->userSettings)
            $user->userSettings()->create();
        else
            $passwordQuestion = $user->userSettings->password_question;

        $passwordQuestionDiff = 1;
        if ($passwordQuestion != null)
            $passwordQuestionDiff = Carbon::now()->diffInMonths($passwordQuestion);
        if ($user->password == '' && $passwordQuestionDiff > 0) {
            $user->userSettings()->update([
                'password_question' => Carbon::now(),
            ]);
            $response['message'] .= ' and Ask Password Set';
        }
        return $response;

    }

    public function checkPassword(Request $request)
    {
        $v = Validator::make($request->all(), [
            'password' => 'required|min:8',
            'mobile' => 'required|regex:/^(09)[0-9]{9}$/',
        ]);
        if ($v->fails())
            return \response("Invalid password");
        $user = User::whereMobile($request->mobile)->first();
        if (!$user)
            return \response('Invalid Mobile');

        if (Hash::check($request->password, $user->password)) {
            auth()->loginUsingId($user->id);
            $response['message'] = 'True password';
            $response['user'] = user()->with(['business' => function ($query) {
                $query->with(['categories' => function ($query) {
                    $query->orderby('pinned', 'desc')->orderby('priority')->latest()->with(['wares' => function ($query) {
                        $query->orderby('pinned', 'desc')->orderby('priority')->latest();
                    }]);
                }]);
            }])->find(user()->id);
            return $response;
        }
        return \response('Incorrect password');
    }

    public function sendActivationCode(Request $request)
    {
        $v = Validator::make($request->all(), [
            $this->username() => 'required|regex:/^(09)[0-9]{9}$/',
        ]);
        if ($v->fails()) {
            return \response("Invalid Parameters");
        }
        $user = User::whereMobile($request->mobile)->first();
        if (!$user)
            return \response('Invalid Mobile');
        $response = event(new UserActivation($user));
        return \response('activationCode Sent');
        if ($response[0] == 200)
            return \response('activationCode Sent');
        else
            return \response("Error on Send SMS");
    }
}
