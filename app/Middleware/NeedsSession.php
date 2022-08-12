<?php

namespace App\Middleware;

use App\Errors\Reauthenticate;
use Josantonius\Session\Facades\Session;
use Neoan\Routing\Routable;

class NeedsSession implements Routable
{
    public function __invoke(array $provided): array
    {

        if(!Session::has('userId')){
            new Reauthenticate();
        }
        return ['auth' => ['userId' => Session::get('userId')]];
    }
}