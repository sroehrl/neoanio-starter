<?php

namespace App\Controller\Auth;

use App\Model\User;
use Josantonius\Session\Facades\Session;
use Neoan\Errors\Unauthorized;
use Neoan\Request\Request;
use Neoan\Routing\Interfaces\Routable;
use Neoan3\Apps\Stateless;

class Login implements Routable
{
    public function __invoke(): array
    {
        if(Request::getInput('password')){

            [
                'userName' => $userName,
                'password' => $password
            ] = Request::getInputs();
            try{
                $user = User::login($userName, $password);
            } catch (\Exception $e) {
                new Unauthorized();
            }

            $jwt = Stateless::assign(time() .$user->id, ['user.write','user.read'], [
                'id' => $user->id
            ]);
            if(Session::isStarted() && Request::getInput('web')){
                Session::set('userId', $user->id);
            }
            return [
                'token' => $jwt,
                'userId' => $user->id,
            ];
        } else {
            return [
                'token' => null,
                'user' => null
            ];
        }

    }
}