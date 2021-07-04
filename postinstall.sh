#!/bin/bash

echo "$PWD"
echo "$(cat $PWD/node_modules/flag-icon-css/sass/flag-icon.scss)"

if [[ "$VERCEL" == 1 ]] ; then
  npm install -g sass-migrator
  sass-migrator division "$PWD"/node_modules/flag-icon-css/sass/flag-icon.scss
else
  npx --yes sass-migrator division node_modules/flag-icon-css/sass/*.scss
fi
