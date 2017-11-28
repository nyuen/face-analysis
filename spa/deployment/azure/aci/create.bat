@ECHO OFF

SET IMAGE_NAME=face-analysis/spa
SET RG_NAME=poc-aci
SET ACI_NAME=face-analysis-spa
SET REGISTRY_NAME=TODO
SET REGISTRY_URL=%REGISTRY_NAME%.azurecr.io
SET REGISTRY_PASSWD=TODO
SET WITH_HTTPS=true
SET ANALYZEAPI_URL=TODO
SET SENDFEEDBACKAPI_URL=TODO

az container create ^
  --resource-group %RG_NAME% --name "%ACI_NAME%" ^
  --image %REGISTRY_URL%/%IMAGE_NAME% --registry-login-server %REGISTRY_URL% --registry-username %REGISTRY_NAME% --registry-password %REGISTRY_PASSWD% ^
  --location "west europe" --cpu 1 --memory 1 ^
  --ports 8888 --ip-address "public" ^
  --environment-variables WITH_HTTPS=%WITH_HTTPS% ANALYZEAPI_URL=%ANALYZEAPI_URL% SENDFEEDBACKAPI_URL=%SENDFEEDBACKAPI_URL%