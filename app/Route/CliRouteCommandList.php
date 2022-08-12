<?php

namespace App\Route;

use Neoan\NeoanApp;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(name: 'list:routes', description: 'Lists registered Routes')]
class CliRouteCommandList extends Command
{
    protected static $defaultName = 'list:routes';
    protected static $defaultDescription = 'Shows available routes';
    private string $appPath;

    public function __construct(NeoanApp $neoanApp, string $name = null)
    {
        $this->appPath = $neoanApp->appPath;
        parent::__construct($name);
    }
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln("\t\t\t*** API ***");
        $apiRoutes = require $this->appPath . '/Route/_apiRoutes.php';
        foreach ($apiRoutes as $route => $apiRoute){
            $method = str_pad(strtoupper(array_pop($apiRoute)),5);
            $endpoint = str_pad($route, 25);
            $classes = implode(', ',$apiRoute);
            $output->writeln($method. $endpoint . $classes);
        }
        $output->writeln("\t\t\t*** WEB ***");
        $webRoutes = require $this->appPath . '/Route/_webRoutes.php';
        foreach ($webRoutes as $route => $declaration){
            $view = str_pad(array_pop($declaration),25);
            $endpoint = str_pad($route, 30);
            $classes = implode(', ',$declaration);
            $output->writeln($endpoint . $view . $classes);
        }
        return Command::SUCCESS;
    }

}