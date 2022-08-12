<?php


use Config\Bootstrap;
use Neoan\NeoanApp;


require_once dirname(__DIR__) . '/vendor/autoload.php';

$app = new NeoanApp(dirname(__DIR__) .'/app', __DIR__);

new Bootstrap($app);

$app->run();
