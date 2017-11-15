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
    context.res.headers = { "content-type" : "text/html" };
    context.res.status = 200;
    context.res.body = page;
    context.done();
};


// Dev mode.
if (process.env.NODE_ENV == "dev")
{
    require("http").createServer(function(req, res)
    {
        let context = 
        {
            done : function() { console.log("done() called"); },
            res : res
        };
        module.exports(context, req);
        res.end(res.body);
    }).listen(8080);
}