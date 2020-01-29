<?php

namespace Waggingtail\AppleGsx\Tests\Stubs;

use Waggingtail\AppleGsx\Contracts\RepairInterface;

class Repair extends Api implements RepairInterface
{
    /**
     * {@inheritdoc}
     */
    public function eligibility(array $json)
    {
        return json_decode(file_get_contents(__DIR__ . '/../fixtures/eligibility.json'), true);
    }

    /**
     * {@inheritdoc}
     */
    public function details($repairId)
    {
        return json_decode(file_get_contents(__DIR__ . '/../fixtures/details.json'), true);
    }

    /**
     * {@inheritdoc}
     */
    public function summary(array $json, bool $fetchAllRepairs = false)
    {
        return json_decode(file_get_contents(__DIR__ . '/../fixtures/summary.json'), true);
    }

    /**
     * {@inheritdoc}
     */
    public function productDetails(array $json, bool $activationDetails = false)
    {
        return json_decode(file_get_contents(__DIR__ . '/../fixtures/product-details.json'), true);
    }
}
