@ECHO OFF

SET RG_NAME=poc-aci
SET ACI_NAME=face-analysis-analyze

az container logs --resource-group %RG_NAME% --name "%ACI_NAME%"