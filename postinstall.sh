#!/bin/bash

echo "$PWD"
if [[ "$VERCEL" == 1 ]] ; then
  npx sass-migrator division "$PWD"/node_modules/flag-icon-css/sass/flag-icon.scss
  npx sass-migrator division "$PWD"/node_modules/flag-icon-css/sass/_variables.scss
  npx sass-migrator division "$PWD"/node_modules/flag-icon-css/sass/_flag-icon-list.scss
  npx sass-migrator division "$PWD"/node_modules/flag-icon-css/sass/_flag-icon-base.scss
else
  npx --yes sass-migrator division node_modules/flag-icon-css/sass/*.scss
fi
