# Use existing docker image as a base
FROM node:alpine

# Specify Work directory for node app
WORKDIR /usr/server

#Copy node apps files into container
COPY ./package.json ./

# Download and install dependency
RUN npm install -g npm@7.14.0
RUN npm install
COPY ./ ./

# Tell the image what to do, when it starts as a container
CMD ["npm", "start"]
