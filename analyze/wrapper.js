/**
 * Includes.
 */
let i = require("./index.js");
let lw = require("local-webstrap");


/**
 * Bootstrap to ExpressJS.
 */
let port = 8888;
if (process.env.WITH_HTTPS == "true")
{
    let certpath = require("path").join(__dirname, "/deployment/cert");
    console.log("Certificate path set to " + certpath);
    lw(i, "POST", port, true, certpath);
}
else
{
    lw(i, "POST", port);
}