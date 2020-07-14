<?php

namespace App\Listeners;

use App\Events\UserActivation;
use App\User;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class SendSMSActivation
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param UserActivation $event
     * @return string
     * @throws GuzzleException
     */
    public function handle(UserActivation $event)
    {
//        $client = new Client([
//            'verify' => false
//        ]);
//
//        $response = $client->request('POST', 'https://api.kavenegar.com/v1/484C676E41636B442B433858656F382F6447732F7A4F656C51385645302F7372/sms/send.json', [
//            'form_params' => [
//                'receptor' => $event->user->mobile,
//                'message' => $event->activationCode . "\n کد تایید جهت ورود به سایت کودیره",
//            ]
//        ]);
//        return $response->getStatusCode();
    }
}
