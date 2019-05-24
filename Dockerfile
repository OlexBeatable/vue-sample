FROM node:8.9-slim

LABEL maintainer="Vitaliy Kravchyshyn <vital.kravchyshyn@gmail.com>"

WORKDIR /application

COPY package*.json /application

RUN npm install

COPY . /application

CMD [ "npm", "run", "start" ]