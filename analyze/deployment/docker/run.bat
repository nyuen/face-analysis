@ECHO OFF

SET IMAGE_NAME=face-analysis/analyze
SET CONTAINER_NAME=analyze

docker run -d -i -p 8080:8080 --name %CONTAINER_NAME% --env-file deployment\docker\env.list %IMAGE_NAME%