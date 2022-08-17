<?php

namespace Config;



use App\Route\Routes;
use Josantonius\Session\Facades\Session;
use Neoan\Database\Database;
use Neoan\Errors\NotFound;
use Neoan\NeoanApp;
use Neoan\Render\Renderer;
use Neoan\Response\Response;
use Neoan\Store\Store;
use Neoan3\Apps\Stateless;
use Neoan3\Apps\Template;

class Bootstrap
{
    private array $setup;
    private bool $runAsCli = false;
    function __construct(NeoanApp $app, $asCli = false)
    {
        $this->runAsCli = $asCli;
        $this->setup = require_once __DIR__ . '/setup.php';
        $this->applySetup($app);
        new Routes($app);
    }
    private function applySetup($app):void
    {
        // Start session
        Session::start();

        // RENDERING
        $rendering = $this->setup['rendering'];

        Renderer::setTemplatePath($rendering['templatePath']);
        Renderer::setHtmlSkeleton(
            $rendering['skeleton']['location'],
            $rendering['skeleton']['placement'],
            $rendering['skeleton']['inject'],

        );
        NotFound::setTemplate($rendering['notFoundTemplate']);
        Response::setDefaultOutput($rendering['defaultOutput']);

        new Templating();

        // Database
        $adapter = $this->setup['database']['driver']['adapter'];
        $credentials = $this->setup['database']['credentials'][$this->setup['database']['driver']['credentials']];
        Database::connect(new $adapter($credentials));

        // Security
        Stateless::setSecret($this->setup['auth']['secret']);

        if(!$this->runAsCli){
            // things that should only happen when in cli context
            Store::write('isLoggedIn', Session::has('userId'));
        }

    }
}