#!/usr/bin/env bash

set -e

if (( "$#" != 1 ))
then
    echo "No tag provided"

    exit 1
fi

VERSION=$1

# Always prepend with "v"
if [[ $VERSION != v*  ]]
then
    VERSION="v$VERSION"
fi

echo ""
echo ""
echo "Releasing $VERSION";

(
    git tag $VERSION
    git push origin --tags
)
