docker build -t romantuom/worker:latest -f Dockerfile.dev .
docker run -p 8000:8000 romantuom/worker