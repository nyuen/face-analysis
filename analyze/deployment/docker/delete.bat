@ECHO OFF

SET IMAGE_NAME=face-analysis/analyze

docker image rm -f %IMAGE_NAME%