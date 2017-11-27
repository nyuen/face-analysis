@ECHO OFF

SET RG_NAME=poc-aci
SET ACI_NAME=face-analysis-spa

az container delete --resource-group %RG_NAME% --name "%ACI_NAME%"