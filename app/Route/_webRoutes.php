<?php

use App\Controller\Setup;

/*
 * path => [...controllerClasses, view]
 * */

return [
    '/' => ['/home.html'],
    '/setup' => [Setup::class, '/setup.html'],
    '/work' => ['/work.html'],
    '/login' => ['/login.html'],
    '/restricted' => [\App\Middleware\NeedsSession::class, '/home.html']
];