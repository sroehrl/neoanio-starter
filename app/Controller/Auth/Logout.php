<?php

namespace App\Controller\Auth;

use Josantonius\Session\Facades\Session;
use Neoan\Routing\Routable;

class Logout implements Routable
{
    public function __invoke(array $provided): array
    {
        Session::clear();
        return [];
    }
}