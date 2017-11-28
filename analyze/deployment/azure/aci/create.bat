@ECHO OFF

SET IMAGE_NAME=face-analysis/analyze
SET RG_NAME=poc-aci
SET ACI_NAME=face-analysis-analyze
SET REGISTRY_NAME=TODO
SET REGISTRY_URL=%REGISTRY_NAME%.azurecr.io
SET REGISTRY_PASSWD=TODO
SET WITH_HTTPS=true
SET FACEAPI_KEY=TODO
SET EMOTIONAPI_KEY=TODO

az container create ^
  --resource-group %RG_NAME% --name "%ACI_NAME%" ^
  --image %REGISTRY_URL%/%IMAGE_NAME% --registry-login-server %REGISTRY_URL% --registry-username %REGISTRY_NAME% --registry-password %REGISTRY_PASSWD% ^
  --location "west europe" --cpu 1 --memory 1 ^
  --ports 8888 --ip-address "public" ^
  --environment-variables WITH_HTTPS=%WITH_HTTPS% FACEAPI_KEY=%FACEAPI_KEY% EMOTIONAPI_KEY=%EMOTIONAPI_KEY%