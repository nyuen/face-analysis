@ECHO OFF

SET IMAGE_NAME=face-analysis/spa
SET CONTAINER_NAME=spa

docker run -d -i -p 8443:8443 --name %CONTAINER_NAME% --env-file deployment\docker\env.list %IMAGE_NAME%