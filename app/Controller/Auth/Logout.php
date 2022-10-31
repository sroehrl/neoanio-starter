<?php

namespace App\Controller\Auth;

use Josantonius\Session\Facades\Session;
use Neoan\Routing\Interfaces\Routable;

class Logout implements Routable
{
    public function __invoke(): array
    {
        Session::clear();
        return [];
    }
}