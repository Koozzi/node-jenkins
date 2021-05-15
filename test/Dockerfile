# FROM ubuntu:18.04
FROM node:15.5.1
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
CMD npm test