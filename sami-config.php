<?php

use Sami\Sami;
use Sami\RemoteRepository\GitHubRemoteRepository;

return new Sami('src', [
    'title' => 'Apple GSX API',
    'build_dir' => __DIR__.'/docs',
    'remote_repository' => new GitHubRemoteRepository('waggingtail-dev/package-apple-gsx', dirname(__DIR__))
]);
