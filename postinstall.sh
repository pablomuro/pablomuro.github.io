#!/bin/bash

echo "$PWD"
echo $(ls "$PWD"/node_modules/flag-icon-css/sass)
npx sass-migrator division "$PWD"/node_modules/flag-icon-css/sass/*.scss
