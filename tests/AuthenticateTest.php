<?php

namespace Waggingtail\AppleGsx\Tests;

class AuthenticateTest extends TestCase
{
    /** @test */
    public function it_can_check()
    {
        $this->assertEquals('OK', static::$gsx->authenticate()->check());
    }

    /** @test */
    public function it_can_end()
    {
        $this->assertEquals('OK', static::$gsx->authenticate()->end());
    }

    /** @test */
    public function it_returns_an_authentication_token()
    {
        $this->assertEquals('authentication-token', static::$gsx->authenticate()->token('activation-token'));
    }
}
