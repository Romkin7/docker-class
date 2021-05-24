# Docker user manual

## Run container

- docker run "container name" `docker run hello-world`
  or
- docker create "container name" `docker create hello-world`
- docker start "id of container" `docker start baa77357a21b4ad01f973b18bcacd742183064c9b56f4254b99396482f7bd57f`

## Run second process inside of the container

`docker run redis` `docker exec -it container id redis-cli`

## Execute shell inside of container

with sh to open permanent shell inside of the container: `docker exec -it container id sh`
To exit thsi shell press `option + D`

## Delete all containers

`docker system prune`

## Dockerfile

`touch Dockerfile`

then once it is configured run:
`docker build -t romantuom/redis:latest .`
followed by `docker run romantuom/redis:latest`

`docker build -t romantuom/first-node-app:latest . && docker run -p 8080:8080 romantuom/first-node-app:latest`

## Docker Compose

Docker compose file is used to run and connect multiple containers under same network and enabling to have access to each other.

First time or when changes are made to app files run: `docker compose up --build`.

All other times we can run:

`docker compose up -d` to run in the background or `docker compose up`.

To stop all running containers use `docker compose domn`

## React App Exits Immediately with Docker Run Command

3-22-2020

Due to a recent update in the Create React App library, we will need to change how we start our containers.

In the upcoming lecture, you'll need to add the -it flag to run the container in interactive mode:

`docker run -it -p 3000:3000 IMAGE_ID`
