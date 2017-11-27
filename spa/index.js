/**
 * Includes.
 */
const fs = require("fs");
const os = require("os");
const path = require("path");


/**
 * Entry point.
 */
module.exports =  function (context, req)
{
    // Read the SPA file.
    let page = fs.readFileSync(path.join(__dirname, "/form.html"));

    // Replace the hostname.
    page = String(page).replace("HOSTNAME", os.hostname());

    // Replace the API url.
    page = String(page).replace("ANALYZEAPI_URL", process.env.ANALYZEAPI_URL);
    page = page.replace("SENDFEEDBACKAPI_URL", process.env.SENDFEEDBACKAPI_URL);

    // Serve the page.
    context.res.headers =
    {
        "content-type" : "text/html",
        "Access-Control-Allow-Origin" : "*"
    };
    context.res.status = 200;
    context.res.body = page;
    context.done();
};


/**
 * Bootstrap to express if not Azure Functions.
 */
let certpath = require("path").join(__dirname, "/deployment/cert");
console.log("Certificate path set to " + certpath);
require("local-webstrap")(process.env.NODE_HOST, module.exports, "GET", 8443, true, certpath);