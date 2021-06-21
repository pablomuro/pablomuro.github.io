#!/bin/bash

LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%B | cat)

echo "Last commit message:|$LAST_COMMIT_MESSAGE|"
echo "vercel comit:|$VERCEL_GIT_COMMIT_MESSAGE|"
echo "Branch: $VERCEL_GIT_COMMIT_REF"

if [[ "$LAST_COMMIT_MESSAGE" == *"[pablomuro-blog-manager]"* && ("$VERCEL_GIT_COMMIT_REF" == "development" || "$VERCEL_GIT_COMMIT_REF" == "main") ]] ; then
  echo "🛑 - Build cancelled"
  exit 0;
else
  echo "✅ - Build can proceed"
  exit 1;
fi

