<?php

namespace App\Middleware;

use Neoan\Errors\Unauthorized;
use Neoan\Provider\Injections;
use Neoan\Routing\Interfaces\Routable;
use Neoan3\Apps\Stateless;

class NeedsAuth implements Routable
{
    private array $auth;
    public function __invoke(Injections $provided): self
    {
        try{
            $provided(['auth' => Stateless::validate()]);
            $this->auth = $provided->get('auth', null);
        } catch (\Exception $e) {
            new Unauthorized();
        }
    }
    public function getAuth(): array
    {
        return $this->auth;
    }
}