@ECHO OFF

SET CONTAINER_NAME=analyze

docker stop %CONTAINER_NAME%
docker container rm %CONTAINER_NAME%