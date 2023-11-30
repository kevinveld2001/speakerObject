#!/bin/bash

apt update
apt upgrade -y
apt install -y espeak
apt install -y nodejs
apt install -y npm

amixer sset Master 100%

npm install
node ./index.js
