@ECHO OFF

SET IMAGE_NAME=face-analysis/spa

docker build -t %IMAGE_NAME% -f deployment/docker/Dockerfile --no-cache .