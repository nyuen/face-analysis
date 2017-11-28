@ECHO OFF

SET IMAGE_NAME=face-analysis/spa
SET CONTAINER_NAME=spa

docker run -d -i -p 8888:8888 --name %CONTAINER_NAME% --env-file deployment\docker\env.list %IMAGE_NAME%