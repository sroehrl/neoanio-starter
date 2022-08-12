<?php
/*
 * path => [...controllerClasses, method]
 * */

use App\Controller\Auth\Login;
use App\Controller\Auth\Me;
use App\Controller\Auth\Register;
use App\Middleware\NeedsAuth;

return [
    '/auth/register' => [Register::class, 'post'],
    '/auth/login' => [Login::class, 'post'],
    '/auth/me' => [NeedsAuth::class, Me::class, 'get'],
    '/auth/logout' => [\App\Controller\Auth\Logout::class, 'delete']
];