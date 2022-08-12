<?php

namespace App\Route;

use Josantonius\Session\Facades\Session;
use Neoan\NeoanApp;
use Neoan\Response\Response;
use Neoan\Routing\Route;
use Neoan\Store\Store;



class Routes
{
    private array $webRoutes;
    private array $apiRoutes;
    function __construct(NeoanApp $app)
    {
        $this->webRoutes = require __DIR__ . '/_webRoutes.php';
        $this->apiRoutes = require __DIR__ . '/_apiRoutes.php';
        $this->parseWebRoutes($app);
        $this->parseApiRoutes($app);
    }
    function parseWebRoutes($app): void
    {
        Store::write('appTitle', 'My App');
        Session::start();
        foreach ($this->webRoutes as $path => $options) {

            $view = array_pop($options);
            Route::get($path, ...$options)->view($view)->inject([
                'appPath'=>$app->appPath,
                'publicPath'=>$app->publicPath,
                'webPath'=>$app->webPath,
                'userId'=>Session::get('userId')
            ]);
        }
    }
    function parseApiRoutes($app): void
    {
        foreach ($this->apiRoutes as $path => $options)
        {
            $method = array_pop($options);
            Route::$method('/api' . $path, ...$options)->response([Response::class, 'json']);
        }
    }
}