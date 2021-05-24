# Use existing docker image as a base
FROM node:alpine as build-phase

# Specify Work directory for node app
WORKDIR /react-app

#Copy node apps files into container
COPY ./package.json ./

# Download and install dependency
RUN npm install -g npm@7.14.0
RUN npm install
COPY ./ ./

# Tell the image what to do, when it starts as a container
RUN npm run build

# Installs Nginx from image
FROM nginx

# Exposes Nginx port 80 from inside of the container
EXPOSE 80

COPY --from=build-phase /react-app/build /usr/share/nginx/html
