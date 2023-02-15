#!/bin/bash

if [ -z "$1" ]
then
  echo "Please provide a commit message"
  exit 1
fi

mkdir build
cd build
git init && git remote add origin git@github.com:ritsec/ists-website.git
git pull origin main
mv .git ../build-git
cd ..
if command -v nvm &> /dev/null
then
  nvm use
fi
yarn build
mv build-git ./build/.git
cd build
git add .
git commit -m "$1"
git push origin main
cd ..
rm -rf build