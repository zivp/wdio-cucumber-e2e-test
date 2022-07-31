#FROM node:16.3.0-alpine
#WORKDIR /app-test
#ADD package*.json ./
#RUN npm install 
#ADD . . 




FROM node:16.13.1-alpine

RUN apk add -U subversion

