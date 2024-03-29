FROM node:15.5.1
 
WORKDIR /usr/src/app
 
COPY package.json ./
 
RUN npm install
 
COPY . .
 
EXPOSE 5000
 
CMD [ "node", "index"]