#!/bin/bash

version="$1"

create_github_release() {
  if [[ "$version" == *"-alpha"* || "$version" == *"-beta"* || "$version" == *"-rc"* ]]; then
    gh release create "$version" \
      --title "$version" \
      --notes "For stable releases, please refer to [CHANGELOG.md](https://github.com/VfanLee/vue-qrcode/blob/main/CHANGELOG.md) for details." \
      --prerelease
  else
    gh release create "$version" \
      --title "$version" \
      --notes "For stable releases, please refer to [CHANGELOG.md](https://github.com/VfanLee/vue-qrcode/blob/main/CHANGELOG.md) for details."
  fi
}

create_github_release
