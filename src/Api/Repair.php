<?php

namespace Waggingtail\AppleGsx\Api;

use Waggingtail\AppleGsx\Contracts\RepairInterface;

/**
 * Repair Api.
 *
 * @package Waggingtail\AppleGsx\Api
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
class Repair extends Api implements RepairInterface
{
    /**
     * {@inheritdoc}
     */
    public function eligibility(array $json)
    {
        return $this->_post("/gsx/api/repair/eligibility", $json);
    }

    /**
     * {@inheritdoc}
     */
    public function details($repairId)
    {
        return $this->_get("/gsx/api/repair/details?repairId={$repairId}");
    }

    /**
     * {@inheritdoc}
     */
    public function summary(array $json, bool $fetchAllRepairs = false)
    {
        $parameters['fetchAllRepairs'] = $fetchAllRepairs;

        return $this->_post("/gsx/api/repair/summary", $json, $parameters);
    }

    /**
     * {@inheritdoc}
     */
    public function productDetails(array $json, bool $activationDetails = false)
    {
        $parameters['activationDetails'] = $activationDetails;

        return $this->_post("/gsx/api/repair/product/details", $json, $parameters);
    }
}
