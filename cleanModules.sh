#!/bin/bash

DIR=$PWD
cd node_modules/dracula-prism
rm -rf  node_modules

cd $DIR

npm audit fix --force

exit 0
