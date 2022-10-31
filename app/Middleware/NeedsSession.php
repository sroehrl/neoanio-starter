<?php

namespace App\Middleware;

use App\Errors\Reauthenticate;
use Josantonius\Session\Facades\Session;
use Neoan\Provider\Injections;
use Neoan\Routing\Interfaces\Routable;

class NeedsSession implements Routable
{
    public function __invoke(Injections $provided): void
    {

        if(!Session::has('userId')){
            new Reauthenticate();
        }
        $provided(['auth' => ['userId' => Session::get('userId')]]);
    }
}