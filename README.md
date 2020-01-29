Apple GSX PHP Library
=====================

<p align="center">
    <a href="https://github.com/waggingtail-dev/package-apple-gsx"><img alt="GitHub Actions status" src="https://github.com/waggingtail-dev/package-apple-gsx/workflows/apple-gsx-unit-tests/badge.svg"></a>
</p>

```php
// from https://gsx2-uat.apple.com/gsx/api/login or https://gsx2.apple.com/gsx/api/login when in prod.
$token = 'activation-token';

$gsx = new \Waggingtail\AppleGsx\AppleGsx($appleId, $token, $shipTo, $soldTo, $caBundlePath, $passPhrase, $operatorUserId, $isUat);

$gsx->authenticate()->check(); // will return OK if request successful

$gsx->authenticate()->token($token); // will return an authentication token

$gsx->repair()->details($repairId);
```

## Authentication

Apple notice on authentication:

```
TIP:

Once exchanged, a token will remain valid until one of the following events:

Token is exchanged for another token (see danger below)
/authenticate/end-session is invoked for the token
Token expires due to inactivity after 30 minutes*
Token expires after 12 hours of continuous use*
* These expiration times may be changed without notice, so it is recommended for client systems to invoke /authenticate/token on behalf of a user whenever 401 is received in response to an API invocation, and not code or configure any timeout value in the partner client system
```

```
DANGER:
Partner client systems should only invoke the /authenticate/token API once a token has become invalid for one of the above reasons. This will be evident by an HTTP response of 401 Unauthorized from any GSX API. Upon receiving 401 Unauthorized from GSX, invoking the /authenticate/token service with the user details and expired token will issue a new, valid token, as long as GSX access criteria is met (valid user and soldTo/shipTo access).

Invoking the /authenticate/token API too often – for example, invoking it before every API call, or invoking it every 5 minutes regardless of invalidity – could result in unexpected behavior from GSX, especially when a high rate of invocation is generated as a result.
```

In other words, if you have already authenticated and calling an API method throws an `UnauthorizedException` instead,
call `$gsx->authenticate()->token()` with no parameters or passing the `expired` token,
this will refresh the token. If you still get an `UnauthorizedException`, you need to get a new activation token and
pass it to `$gsx->authenticate()->token('activation-token')`.
