@ECHO OFF

SET REGISTRY_NAME=TODO
SET REGISTRY_URL=%REGISTRY_NAME%.azurecr.io
SET IMAGE_NAME=face-analysis/spa

az acr repository delete --name %REGISTRY_NAME% --repository %IMAGE_NAME%
docker image rm -f %REGISTRY_URL%/%IMAGE_NAME%