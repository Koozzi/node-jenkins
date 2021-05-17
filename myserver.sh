#!/bin/bash


docker pull koozzi666/myserver
docker rm -f `docker ps -aq`
docker run -d -p 5000:5000 --env-file .env koozzi666/myserver