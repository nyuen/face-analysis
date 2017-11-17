/**
 * Bootstrap an handler behind an ExpressJS web server.
 */
function RunLocalhost(handler, method)
{
    // Setup callback.
    let wrapper = function(req, res)
    {
        let context = 
        {
            res : res,
            done : function() { res.end(res.body); console.log("done() invoked"); }
        };
        handler(context, req);
    }

    // Configure ExpressJS.
    const app = require("express")();
    const bp = require("body-parser");
    app.use(bp.urlencoded({ extended: true }));
    app.use(bp.json());
    if (method == "POST")
    {
        app.post("/", wrapper);
    }
    else if (method == "GET")
    {
        app.get("/", wrapper);
    }

    // Run.
    app.listen(8080);
}

module.exports = function(host, handler, method)
{
    if (host == "localhost")
        RunLocalhost(handler, method);
};