#!/bin/bash

mkdir myfiles100
cd myfiles100
for i in {1..100}
do
       	echo "Hello world 0$i" > "hello_0$i.txt"
	cat hello_0$i.txt
done

