<?php

namespace App\Controller\Auth;


use App\Middleware\NeedsAuth;
use Neoan\Routing\Interfaces\Routable;

class Me implements Routable
{
    public function __invoke(NeedsAuth $authObj): array
    {
        return $authObj->getAuth();
    }
}