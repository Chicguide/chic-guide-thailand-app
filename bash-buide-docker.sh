
#!/bin/sh

git pull

docker-compose  build --no-cache
docker-compose  down 
docker-compose up -d

docker images
docker image prune -af