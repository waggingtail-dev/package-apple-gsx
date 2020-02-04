<?php

namespace Waggingtail\AppleGsx\Tests;

use Waggingtail\AppleGsx\AppleGsx;

class AppleGsxTest extends TestCase
{
    /** @test */
    public function it_can_be_instantiated()
    {
        $class = new AppleGsx('appleid@sample.com', 'sold-to', 'ship-to', __DIR__ . '/data/ca-bundle.pem', 'test', true);

        $this->assertInstanceOf('Waggingtail\AppleGsx\AppleGsx', $class);
    }
}
