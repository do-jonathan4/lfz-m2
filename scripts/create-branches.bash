#!/bin/bash

branch_list=$1

if [ -z $branch_list ]; then
  branch_list="branches.txt"
fi

path_to_branch_list="$(pwd)/$branch_list"

if [ ! -f "$path_to_branch_list" ]; then
  echo "Could not find file \"$branch_list\". Aborting." 1>&2
  exit 1
fi

git checkout master
git pull origin master

checkout_and_push='git checkout -b "{}" && \
                   git push origin "{}" && \
                   git checkout master'

cat $path_to_branch_list | xargs -I {} sh -c "$checkout_and_push"
