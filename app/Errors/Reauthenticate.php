<?php

namespace App\Errors;


use Neoan\Helper\Terminate;

class Reauthenticate
{
    function __construct()
    {
        header('location: /login');
        Terminate::exit();
    }
}