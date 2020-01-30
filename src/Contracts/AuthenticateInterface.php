<?php

namespace Waggingtail\AppleGsx\Contracts;

use Waggingtail\AppleGsx\Exception\ForbiddenException;
use Waggingtail\AppleGsx\Exception\UnauthorizedException;

/**
 * Methods to handle authentication.
 *
 * @package Waggingtail\AppleGsx\Api
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
interface AuthenticateInterface
{
    /**
     * Returns "OK" when apple has configured access for the application.
     *
     * @throws UnauthorizedException
     *
     * @return string
     */
    public function check();

    /**
     * Returns the authentication token.
     *
     * This method should initially be called when initialising the library,
     * with an activation token, effectively swapping the activation token
     * for an authentication token.
     *
     * When UnauthorizedException is thrown by any api call, this method should
     * be called again, but this time with the previous authentication expired token,
     * effectively renewing the token.
     *
     * @param string $token An activation token or an expired auth token.
     * @throws UnauthorizedException
     * @throws ForbiddenException
     *
     * @return string
     */
    public function token($token);

    /**
     * Closes the API session, invaliding the API token and return "OK".
     *
     * @throws UnauthorizedException
     *
     * @return string
     */
    public function end();
}
