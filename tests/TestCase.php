<?php

namespace Waggingtail\AppleGsx\Tests;

use PHPUnit\Framework\TestCase as BaseTestCase;
use Waggingtail\AppleGsx\Contracts\AppleGsxInterface;
use Waggingtail\AppleGsx\Tests\Stubs\AppleGsx;

class TestCase extends BaseTestCase
{
    /**
     * @var AppleGsxInterface
     */
    protected static $gsx;

    public static function setUpBeforeClass(): void
    {
        static::$gsx = new AppleGsx(
            getenv('APPLE_GSX_SHIP_TO'),
            getenv('APPLE_GSX_SOLD_TO'),
            __DIR__ . '/data/ca-bundle.pem',
            '012345',
            true
        );

        $config = static::$gsx->getConfig();

        $config->setAppleUserId('appleid@sample.com')
            ->setToken('authentication-token');
    }
}
