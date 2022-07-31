FROM node:16.3.0-alpine
WORKDIR /app-test
ADD package*.json ./
RUN npm install 
ADD . . 
RUN apk add -U subversion
