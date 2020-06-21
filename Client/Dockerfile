FROM node:alpine

WORKDIR /usr/src/client

COPY package*.json /usr/src/client/
COPY yarn.lock .
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]