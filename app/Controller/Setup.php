<?php

namespace App\Controller;

use App\Model\User;
use Neoan\Database\Database;
use Neoan\NeoanApp;
use Neoan\Provider\Injections;
use Neoan\Routing\Interfaces\Routable;
use Neoan\Routing\Route;

class Setup implements Routable
{
    public function __invoke(NeoanApp $app): array
    {

        $setup = require dirname($app->appPath) . '/config/setup.php';
        try{
            $time = Database::raw("SELECT date('now') as time")[0]['time'];
        } catch (\Exception $e) {
            $time = false;
        }
        try{
            $users = Database::raw("SELECT * FROM User");
        } catch (\Exception $e){
            $users = false;
        }
        return [
            'hasEnv' => file_exists($app->cliPath . '/.env'),
            'dbAdapter' => $setup['database']['driver']['adapter'],
            'dialect' => $setup['database']['driver']['credentials'],
            'databaseConnected' => $time,
            'migrated' => is_array($users)
        ];
    }
}