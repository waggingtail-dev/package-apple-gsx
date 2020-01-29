<?php

namespace Waggingtail\AppleGsx\Tests;

class RepairTest extends TestCase
{
    /** @test */
    public function it_can_eligibility()
    {
        $response = static::$gsx->repair()->eligibility(['device' => ['id' => 'DEVICE1']]);

        $this->assertEquals($response, json_decode(file_get_contents(__DIR__ . '/fixtures/eligibility.json'), true));
    }

    /** @test */
    public function it_can_productDetails()
    {
        $response = static::$gsx->repair()->productDetails(['device' => ['id' => 'DEVICE1']]);

        $this->assertEquals($response, json_decode(file_get_contents(__DIR__ . '/fixtures/product-details.json'), true));
    }

    /** @test */
    public function it_can_details()
    {
        $response = static::$gsx->repair()->details('DEVICE1');

        $this->assertEquals($response, json_decode(file_get_contents(__DIR__ . '/fixtures/details.json'), true));
    }

    /** @test */
    public function it_can_summary()
    {
        $response = static::$gsx->repair()->summary(['device' => ['id' => 'DEVICE_1']]);

        $this->assertEquals($response, json_decode(file_get_contents(__DIR__ . '/fixtures/summary.json'), true));
    }
}
