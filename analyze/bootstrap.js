/**
 * Bootstrap an handler behind an ExpressJS web server.
 */
function ExpressJS(handler, method)
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
    
    return null;
}

function AzureFunctions(handler)
{
    return handler;
}

module.exports = function(parent_module, host, handler, method)
{
    if (host == "localhost")
    {
        parent_module.exports = ExpressJS(handler, method);
    }
    else if (host == "azure-functions")
    {
        parent_module.exports = AzureFunctions(handler);
    }
};