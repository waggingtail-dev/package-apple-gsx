Apple GSX PHP Library
=====================

<p align="center">
    <a href="https://github.com/waggingtail-dev/package-apple-gsx"><img alt="GitHub Actions status" src="https://github.com/waggingtail-dev/package-apple-gsx/workflows/ci-cd/badge.svg"></a>
</p>

## Authentication

TIP
```
Once exchanged, a token will remain valid until one of the following events:

Token is exchanged for another token (see danger below)
/authenticate/end-session is invoked for the token
Token expires due to inactivity after 30 minutes*
Token expires after 12 hours of continuous use*
* These expiration times may be changed without notice, so it is recommended for client systems to invoke /authenticate/token on behalf of a user whenever 401 is received in response to an API invocation, and not code or configure any timeout value in the partner client system
```

DANGER
```
Partner client systems should only invoke the /authenticate/token API once a token has become invalid for one of the above reasons. This will be evident by an HTTP response of 401 Unauthorized from any GSX API. Upon receiving 401 Unauthorized from GSX, invoking the /authenticate/token service with the user details and expired token will issue a new, valid token, as long as GSX access criteria is met (valid user and soldTo/shipTo access).

Invoking the /authenticate/token API too often – for example, invoking it before every API call, or invoking it every 5 minutes regardless of invalidity – could result in unexpected behavior from GSX, especially when a high rate of invocation is generated as a result.
```

## Usage

```php
$gsx = new \Waggingtail\AppleGsx\AppleGsx($soldTo, $shipTo, $caBundlePath, $passPhrase, $useUat);

// get the configuration instance
$config = $gsx->getConfig();

// this is required to authenticate
$config->setAppleUserId('appleid@sample.com');

// this will set X-Apple-Operator-User-ID, this should be a unique identifier from your app
// this is optional, but recommended as this allows Apple to store information about who the operator was
$config->setOperatorUserId('sjohnson');

try {
    // will return "OK" only if (IP whitelisted, valid certificate etc)
    $gsx->authenticate()->check();

    // otherwise `ForbiddenException` will be thrown
} catch (ForbiddenException $e) {
    // do something e.g. "notify an administrator" something wrong with Apple setup
}

// Apple's authentication flow is the definition of janky.
// first you need to get an activation token from `https://gsx2[-uat].apple.com/gsx/api/login
$activationToken = 'activation-token';

// when given an activation token, will return a new authentication token
// when given an expired/current token, will refresh the token
// CALL THIS ONCE and store the `authentication token` e.g. "against the user"
try {
    // will return an authentication token
    $authToken = $gsx->authenticate()->token($activationToken);
    
    // this is just an example, the implementation is irrelevant
    Auth::user()->saveAppleGsxToken($authToken);

    // or throw an `UnauthorizedException` if `token` is invalid
} catch (UnauthorizedException $e) {
    // some logic to handle the error
}

// remember to wrap all api calls with a try/catch and catch `UnauthorizedException`
// to detect if the token has expired, then call `authenticate->token($oldToken) to refresh
try {
    $gsx->repair()->details($repairId);
    // if UnauthorizedException thrown, authenticate with the current/expired token
} catch (UnauthorizedException $e) {
    // example retrieving the current token
    $currentToken = Auth::user()->getAppleGsxToken();

    // if this fails, you'll need a new activation-token
    $authToken = $gsx->authenticate()->token($currentToken);
}
```
