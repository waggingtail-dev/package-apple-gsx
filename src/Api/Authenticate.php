<?php

namespace Waggingtail\AppleGsx\Api;

use Waggingtail\AppleGsx\Contracts\AuthenticateInterface;

/**
 * Authenticate Api.
 *
 * @package Waggingtail\AppleGsx\Api
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
class Authenticate extends Api implements AuthenticateInterface
{
    /**
     * {@inheritdoc}
     */
    public function check()
    {
        $this->setDefaultHeaders([
            'Accept' => 'text/plain',
            'Content-Type' => null,
            'X-Apple-ShipTo' => null,
        ]);

        return $this->_get("authenticate/check");
    }

    /**
     * {@inheritdoc}
     */
    public function token($token)
    {
        $this->setDefaultHeaders([
            'X-Apple-Auth-Token' => null,
        ]);

        $authToken = $this->_post("authenticate/token",
            [
                'userAppleId' => $this->config->getAppleUserId(),
                'authToken' => $token ?? $this->config->getToken(),
            ]
        )['authToken'];

        $this->config->setToken($authToken);

        return $authToken;
    }

    /**
     * {@inheritdoc}
     */
    public function end()
    {
        return $this->_post("authenticate/end-session",
            [
                'userAppleId' => $this->config->getAppleUserId(),
                'authToken' => $this->config->getToken()
            ]);
    }
}
