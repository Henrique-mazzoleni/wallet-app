FROM node:16.3.0-alpine3.13
WORKDIR /app/src/usr

COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]