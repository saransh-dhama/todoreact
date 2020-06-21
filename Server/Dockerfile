FROM node:alpine

WORKDIR /usr/src/server

COPY package*.json /usr/src/server/
RUN npm install --only=prod

COPY . .

EXPOSE 3200

CMD ["npm" , "start"]