/**
 * Bootstrap an handler behind an ExpressJS web server.
 */
function Localhost(handler, method)
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

function AzureFunctions(context, req)
{
    return module.exports._handler(context, req);
}

module.exports = {};
module.exports.Localhost = Localhost;
module.exports.AzureFunctions = AzureFunctions;

module.exports.bootstrap = function(parent_module, host, handler, method)
{
    if (host == "localhost")
    {
        module.exports.Localhost(handler, method);
    }
    else if (host == "azure-functions")
    {
        module.exports._handler = handler;
        parent_module.exports = module.exports.AzureFunctions;
    }
};