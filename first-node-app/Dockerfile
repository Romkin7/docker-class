# Use existing docker image as a base
FROM node:alpine

#Copy node apps files into container
WORKDIR /usr/server
COPY ./ ./

# Download and install dependency
RUN npm install -g npm@7.14.0
RUN npm install

# Tell the image what to do, when it starts as a container
CMD ["npm", "start"]
