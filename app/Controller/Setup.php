<?php

namespace App\Controller;

use App\Model\User;
use Neoan\Database\Database;
use Neoan\NeoanApp;
use Neoan\Routing\Routable;
use Neoan\Routing\Route;

class Setup implements Routable
{
    public function __invoke(array $provided): array
    {
        [
            'appPath' => $path
        ] = $provided;
        $setup = require dirname($path) . '/config/setup.php';
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
            'hasEnv' => file_exists(dirname(__DIR__) . '/.env'),
            'dbAdapter' => $setup['database']['driver']['adapter'],
            'dialect' => $setup['database']['driver']['credentials'],
            'databaseConnected' => $time,
            'migrated' => is_array($users)
        ];
    }
}