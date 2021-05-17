#!/bin/bash

echo MONGODB_CONNECTION_KEY=${MONGODB_CONNECTION_KEY} > .env
echo JWT_SECRET=${JWT_SECRET} >> .env

docker pull koozzi666/myserver

docker rm -f `docker ps -aq`
docker run -d -p 5000:5000 --env-file .env koozzi666/myserver