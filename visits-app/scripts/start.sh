docker build -t romantuom/visits-app:latest .
docker build -t romantuom/redis:latest .
docker run -p 8080:8080 romantuom/visits-app & docker run -p