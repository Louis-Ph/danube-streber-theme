#!/usr/bin/env bash

set -euo pipefail

project_root="${1:-$HOME/dev/sample}"
targets=(api worker web)

for target in "${targets[@]}"; do
  log_file="${project_root}/${target}.log"
  printf 'building %s -> %s\n' "$target" "$log_file"
done

if [[ -d "$project_root" ]]; then
  echo "ready"
else
  echo "missing: $project_root" >&2
fi
