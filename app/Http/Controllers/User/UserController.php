<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use App\Http\Requests\UserStoreRequest;
use Alert;

class UserController extends Controller
{
    /**
     * Show the form for editing the specified resource.
     *
     * @return Response
     */
    public function edit()
    {
        return view('Home.profile');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UserStoreRequest $request
     * @return void
     */
    public function update(UserStoreRequest $request)
    {
        if ($request->validated()) {
            user()->update([
                'name' => $request->name,
                'email' => $request->email
            ]);
            return "Profile updated";
        }
    }
}
