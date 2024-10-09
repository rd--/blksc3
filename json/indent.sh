#!/bin/sh
cp $1 $1~ && jq --tab . $1~ > $1
