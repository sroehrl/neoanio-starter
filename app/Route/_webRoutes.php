<?php

use App\Controller\Setup;
use App\Middleware\NeedsSession;

/*
 * path => [...controllerClasses, view]
 * */

return [
    '/' => ['/home.html'],
    '/setup' => [Setup::class, '/setup.html'],
    '/work' => ['/work.html'],
    '/login' => ['/login.html'],
    '/restricted' => [NeedsSession::class, '/home.html']
];