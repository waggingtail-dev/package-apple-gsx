<?php

namespace Waggingtail\AppleGsx\Tests\Stubs;

use Waggingtail\AppleGsx\Contracts\AuthenticateInterface;

class Authenticate extends Api implements AuthenticateInterface
{
    /**
     * Returns "OK" when apple has configured access for the application.
     *
     * @return string
     */
    public function check()
    {
        return "OK";
    }

    /**
     * Returns the authentication token.
     *
     * This method should initially be called when initialising the library,
     * with an activation token, effectively swapping the activation token
     * for an authentication token.
     *
     * Whenever a 401 is returned by any api call, this method should
     * be called again, but this time with the previous authentication token,
     * effectively renewing the token.
     *
     * @param null|string $token An activation token or authentication token.
     * @return string
     *
     */
    public function token($token = null)
    {
        return 'authentication-token';
    }

    /**
     * Closes the API session, invaliding the API token and return "OK".
     *
     * @return string
     *
     */
    public function end()
    {
        return 'OK';
    }
}
