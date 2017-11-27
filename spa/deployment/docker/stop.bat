@ECHO OFF

SET CONTAINER_NAME=spa

docker stop %CONTAINER_NAME%
docker container rm %CONTAINER_NAME%