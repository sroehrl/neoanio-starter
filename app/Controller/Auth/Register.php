<?php

namespace App\Controller\Auth;

use App\Model\User;
use Neoan\Errors\Unauthorized;
use Neoan\Request\Request;
use Neoan\Response\Response;
use Neoan\Routing\Routable;

class Register implements Routable
{
    public function __invoke(array $provided): array
    {
        try{
            $newUser = new User(Request::getInputs());
            $newUser->store();
            return $newUser->toArray();
        } catch (\Exception $e) {
            new Unauthorized();
        }
    }
}