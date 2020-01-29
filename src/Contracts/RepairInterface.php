<?php

namespace Waggingtail\AppleGsx\Contracts;

/**
 * Methods to handle repairs.
 *
 * @package Waggingtail\AppleGsx\Api
 * @license BSD License (3-Clause)
 * @author Waggingtail
 * @copyright (c) 2019-2020, Waggingtail
 */
interface RepairInterface
{
    /**
     * Returns repair eligibility.
     *
     * @param array $json
     * @return array
     */
    public function eligibility(array $json);

    /**
     * Returns the details for the given repair.
     *
     * @param string $repairId
     * @return array
     */
    public function details($repairId);

    /**
     * Returns a subset of repair information for up to 50 repairs
     * matching the search criteria.
     *
     * @param array $json
     * @param bool $fetchAllRepairs
     * @return array
     */
    public function summary(array $json, bool $fetchAllRepairs);

    /**
     * Returns device warranty and agreement details, activation details, replacement history,
     * and product model information for a given serial number.
     *
     * @param array $json
     * @param bool $activationDetails
     * @return array|mixed
     */
    public function productDetails(array $json, bool $activationDetails);
}
