<?php

namespace Config;



use App\Route\Routes;
use Neoan\Database\Database;
use Neoan\Errors\NotFound;
use Neoan\NeoanApp;
use Neoan\Render\Renderer;
use Neoan\Response\Response;
use Neoan\Routing\Route;
use Neoan3\Apps\Stateless;
use Neoan3\Apps\Template;
use Neoan3\Apps\TemplateFunctions;

class Bootstrap
{
    private array $setup;
    function __construct(NeoanApp $app)
    {
        $this->setup = require_once __DIR__ . '/setup.php';
        $this->applySetup($app);
        new Routes($app);
    }
    private function applySetup($app):void
    {
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

        TemplateFunctions::registerClosure('isChecked', function($value){
            return $value ? 'checked' : '';
        });

        // Database
        $adapter = $this->setup['database']['driver']['adapter'];
        $credentials = $this->setup['database']['credentials'][$this->setup['database']['driver']['credentials']];
        Database::connect(new $adapter($credentials));

        // Security
        Stateless::setSecret($this->setup['auth']['secret']);
    }
}