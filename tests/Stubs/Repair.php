<?php

namespace Waggingtail\AppleGsx\Tests\Stubs;

use Waggingtail\AppleGsx\Contracts\RepairInterface;

class Repair extends Api implements RepairInterface
{
    /**
     * Returns repair eligibility.
     *
     * @param array $json
     * @return array
     */
    public function eligibility(array $json = [])
    {
        return json_decode(file_get_contents(__DIR__ . '/../fixtures/eligibility.json'), true);
    }

    /**
     * Returns the details for the given repair.
     *
     * @param string $repairId
     * @return array
     */
    public function details($repairId)
    {
        // TODO: Implement details() method.
    }

    /**
     * Returns a subset of repair information for up to 50 repairs
     * matching the search criteria.
     *
     * @param array $parameters
     * @param array $json
     * @return array
     */
    public function summary(array $json, array $parameters = [
        'fetchAllRepairs' => false,
    ])
    {
        return json_decode(file_get_contents(__DIR__ . '/../fixtures/summary.json'), true);
    }

    /**
     * Returns device warranty and agreement details, activation details, replacement history,
     * and product model information for a given serial number.
     *
     * @param array $parameters
     * @param array $json
     * @return array|mixed
     */
    public function productDetails(array $json, array $parameters = [
        'activationDetails' => false,
    ])
    {
        return json_decode(file_get_contents(__DIR__ . '/../fixtures/product-details.json'), true);
    }
}
