docker build -t romantuom/client:latest -f Dockerfile.dev .
docker run -p 3000:3000 romantuom/client