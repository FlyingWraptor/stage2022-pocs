#!/bin/sh

git checkout messages.json
json-server -p 4000 messages.json