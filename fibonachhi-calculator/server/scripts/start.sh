docker build -t romantuom/server:latest -f Dockerfile.dev .
docker run -p 8080:8080 romantuom/server