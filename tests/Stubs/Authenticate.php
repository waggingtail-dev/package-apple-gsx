<?php

namespace Waggingtail\AppleGsx\Tests\Stubs;

use Waggingtail\AppleGsx\Contracts\AuthenticateInterface;

class Authenticate extends Api implements AuthenticateInterface
{
    /**
     * {@inheritdoc}
     */
    public function check()
    {
        return "OK";
    }

    /**
     * {@inheritdoc}
     */
    public function token($token = null)
    {
        return 'authentication-token';
    }

    /**
     * {@inheritdoc}
     */
    public function end()
    {
        return 'OK';
    }
}
