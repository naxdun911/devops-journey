#! /bin/sh

echo "What's your name?"
read name
echo "Hello $name.. We are creating your profile"
touch ${name}_profile
