@ECHO OFF

SET IMAGE_NAME=face-analysis/analyze

docker build -t %IMAGE_NAME% -f deployment/docker/Dockerfile --no-cache .