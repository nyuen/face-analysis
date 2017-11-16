/**
 * Bootstrap an handler behind a web server.
 */
module.exports = function(parentModule, handler, method)
{
    if (process.env.NODE_HOST != "azure-function")
    {
        let wrapper = function(req, res)
        {
            let context = 
            {
                res : res,
                done : function() { res.end(res.body); console.log("done() called"); }
            };
            handler(context, req);
        }
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
        app.listen(8080);
    }
    else
    {
        parentModule.exports(handler);
    }
}