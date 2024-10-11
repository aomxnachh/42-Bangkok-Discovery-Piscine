#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi

for arg in "$@"; do
  dir="ex$arg"
  if [ ! -d "$dir" ]; then
    mkdir "$dir"
    echo "Directory $dir created"
  else
    echo "Directory $dir already exists"
  fi
done

