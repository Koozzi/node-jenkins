FROM node:14.5.0
 
WORKDIR /usr/src/app
 
COPY package.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 80
 
CMD [ "node", "index"]