#!/bin/bash

version="$1"

publish_npm() {
  if [[ "$version" == *"-alpha"* ]]; then
    npm publish --tag alpha
  elif [[ "$version" == *"-beta"* ]]; then
    npm publish --tag beta
  elif [[ "$version" == *"-rc"* ]]; then
    npm publish --tag rc
  else
    npm publish
  fi
}

publish_npm
