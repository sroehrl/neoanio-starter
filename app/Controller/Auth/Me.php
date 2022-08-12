<?php

namespace App\Controller\Auth;

use Neoan\Routing\Routable;

class Me implements Routable
{
    public function __invoke(array $provided): array
    {
        return $provided;
    }
}