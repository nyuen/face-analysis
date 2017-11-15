const app = require("express")();
const fs = require("fs");
const os = require("os");
const path = require("path");

app.get("/api/spa", function(req, res)
{
    // Read the SPA file.
    let page = fs.readFileSync(path.join(__dirname, "/form.html"));

    // Replace the hostname.
    page = String(page).replace("HOSTNAME", os.hostname());

    // Replace the API url.
    page = String(page).replace("ANALYZEAPI_URL", process.env.ANALYZEAPI_URL);
    page = page.replace("SENDFEEDBACKAPI_URL", process.env.SENDFEEDBACKAPI_URL);

    // Serve it !
    res.set("Content-type", "text/html");
    res.status(200).send(page);
});

module.exports = require("azure-function-express").createAzureFunctionHandler(app);