#!/bin/bash

if [[ "$VERCEL" == 1 ]] ; then
  npx sass-migrator division "$PWD"/node_modules_dev/flag-icon-css/sass/*.scss
else
  npx --yes sass-migrator division node_modules/flag-icon-css/sass/*.scss
fi
