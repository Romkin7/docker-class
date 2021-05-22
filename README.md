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
