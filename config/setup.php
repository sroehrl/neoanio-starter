<?php

use Neoan\Enums\ResponseOutput;
use Neoan\Helper\Env;
use Neoan\Store\Store;

return [
    'rendering' => [
        'defaultOutput' => ResponseOutput::HTML,
        'templatePath' => Env::get('HTML_TEMPLATE_PATH',  'app/View'),
        'notFoundTemplate' => Env::get('HTML_404_TEMPLATE', 'app/View/system/404.html'),
        'skeleton' => [
            'location' => Env::get('HTML_SKELETON_LOCATION',  'app/View/system/_skeleton.html'),
            'placement' => Env::get('HTML_SKELETON_PLACEMENT','main'),
            'inject' => [
                'title' => Store::dynamic('appTitle'),
                'webPath' => Env::get('WEB_PATH', 'http://127.0.0.1:8080')
            ]
        ]
    ],
    'database' => [
        'driver' => [
            'adapter' => Neoan\Database\SqLiteAdapter::class,
            'credentials' => 'sqlite'
        ],
        'credentials' => [
            'sqlite' => [
                'location' => Env::get('SQLITE_DATABASE', __DIR__ . '/database.db')
            ],
            'mysql' => [
                'host' => Env::get('DB_HOST', 'localhost'),
                'name' => Env::get('DB_NAME', 'neoan_io'),
                'port' => Env::get('DB_PORT', 3306),
                'user' => Env::get('DB_USER', 'root'),
                'password' => Env::get('DB_PASSWORD', ''),
                'charset' => Env::get('DB_CHARSET', 'utf8mb4'),
                'casing' => Env::get('DB_CASING', 'camel'),
                'assumes_uuid' => Env::get('DB_UUID', false),
                'dev_errors' => true
            ]
        ]

    ],
    'auth' => [
        'secret' => Env::get('AUTH_SECRET', 'my-app-secret')
    ]

];
