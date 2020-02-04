<?php

namespace Waggingtail\AppleGsx;

use BadMethodCallException;
use ReflectionClass;
use ReflectionException;
use Waggingtail\AppleGsx\Contracts\ApiInterface;
use Waggingtail\AppleGsx\Contracts\AppleGsxInterface;
use Waggingtail\AppleGsx\Contracts\ConfigInterface;

class AppleGsx implements AppleGsxInterface
{
    /**
     * The Config instance.
     *
     * @var ConfigInterface
     */
    protected $config;

    /**
     * {@inheritdoc}
     */
    public function __construct(
        $appleUserId,
        $soldTo,
        $shipTo,
        $caBundlePath,
        $passPhrase = null,
        $useUat = false
    )
    {
        $this->config = new Config($appleUserId, $soldTo, $shipTo, $caBundlePath, $passPhrase, $useUat);
    }

    /**
     * {@inheritdoc}
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * {@inheritdoc}
     */
    public function setConfig(ConfigInterface $config)
    {
        $this->config = $config;

        return $this;
    }

    /**
     * Set the operator ID.
     *
     * @param mixed $operatorUserId For X-Apple-Operator-User-ID header.
     * @return AppleGsxInterface
     */
    public function setOperatorUserId(string $operatorUserId)
    {
        $this->config->setOperatorUserId($operatorUserId);

        return $this;
    }

    /**
     * Dynamically handles API calls.
     *
     * @param string $name The method name.
     * @param array $arguments [optional] Method arguments.
     * @return ApiInterface
     * @throws ReflectionException
     *
     */
    public function __call($name, array $arguments = [])
    {
        return $this->getApiInstance($name);
    }

    /**
     * Returns the API class instance for the given method.
     *
     * @param string $name The method name.
     * @return ApiInterface
     * @throws ReflectionException
     *
     * @throws BadMethodCallException
     */
    protected function getApiInstance($name)
    {
        $class = "\\Waggingtail\\AppleGsx\\Api\\" . ucwords($name);

        if (class_exists($class) && !(new ReflectionClass($class))->isAbstract()) {
            return new $class($this->config);
        }

        throw new BadMethodCallException("Undefined method [{$name}] called.");
    }
}
