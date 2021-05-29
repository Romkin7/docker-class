FROM node:alpine
WORKDIR /worker
COPY ./package.json ./
RUN npm install -g npm
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"]
