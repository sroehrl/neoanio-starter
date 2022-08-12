<?php

namespace App\Model;

use Exception;
use Neoan\Database\Database;
use Neoan\Model\Attributes\IsPrimaryKey;
use Neoan\Model\Attributes\IsUnique;
use Neoan\Model\Attributes\Transform;
use Neoan\Model\Model;
use Neoan\Model\Traits\TimeStamps;
use Neoan\Model\Transformers\Hash;

class User extends Model
{
    #[IsPrimaryKey]
    public int $id;

    #[IsUnique]
    public string $userName;

    #[Transform(Hash::class)]
    public string $password;

    use TimeStamps;

    /**
     * @throws Exception
     */
    public static function login($userName, $password): ?User
    {
        $res = Database::easy('user.id user.password',['userName'=>$userName]);
        if(empty($res) || !password_verify($password, $res[0]['password'])){
            throw new Exception('Could not log in with these credentials', 402);
        }
        return self::get($res[0]['id']);
    }
}