#!/bin/bash

LAST_COMMIT_MESSAGE=$(git log -1 --pretty=%B | cat)

echo "$LAST_COMMIT_MESSAGE"

if [[ "$LAST_COMMIT_MESSAGE" != "[pablomuro-blog-manager] - Blog new Post" ]] ; then
  echo "✅ - Build can proceed"
  exit 1;

else
  echo "🛑 - Build cancelled"
  exit 0;
fi
