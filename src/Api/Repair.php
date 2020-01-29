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
    public function eligibility(array $json = [])
    {
        return $this->_post("repair/eligibility", $json);
    }

    /**
     * {@inheritdoc}
     */
    public function details($repairId)
    {
        return $this->_get("repair/details?repairId={$repairId}");
    }

    /**
     * {@inheritdoc}
     */
    public function summary(
        array $json,
        array $parameters = [
            'fetchAllRepairs' => false,
        ]
    )
    {
        return $this->_post("repair/summary", $json, $parameters);
    }

    /**
     * {@inheritdoc}
     */
    public function productDetails(
        array $json,
        array $parameters = [
            'activationDetails' => false,
        ]
    )
    {
        return $this->_post("repair/product/details", $json, $parameters);
    }
}
