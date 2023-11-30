#!/bin/bash

apt update
apt upgrade -y
apt install -y espeak
apt install -y nodejs
apt install -y npm

npm install
node ./index.js
