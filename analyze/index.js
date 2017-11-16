/**
 * Includes.
 */
const r = require("request");


/**
 * Entry point.
 */
module.exports = function (context, req)
{
    AnalyzeEmotion({ context : context, data : req.body }, {}, AnalyzeFace);
};


/**
 * Call the CS Emotion API.
 */
function AnalyzeEmotion(dataIn, dataOut, next)
{
    CallCSApi("https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize",
              process.env.EMOTIONAPI_KEY,
              dataIn.data,
              function (err, res, body)
              {
                  let emotion = "";
                  if (res.statusCode == 200)
                  {
                      let scores = JSON.parse(body)[0].scores
                      for (let p in scores)
                      {
                          if (scores[p] >= 0.25)
                          {
                              emotion += p + " ";
                          }
                      }
                  }
                  dataOut.emotion = emotion;
                  next(dataIn, dataOut, ReturnResponse);
              });
}


/**
 * Call the CS Face API.
 */
function AnalyzeFace(dataIn, dataOut, next)
{
    CallCSApi("https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=age,gender,smile,facialHair,glasses",
              process.env.FACEAPI_KEY,
              dataIn.data,
              function (err, res, body)
              {
                let attributes = {};
                if (res.statusCode == 200)
                {
                    attributes = JSON.parse(body)[0].faceAttributes
                    if (attributes.smile <= 0.30)
                    {
                        attributes.smile = "No";
                    }
                    else if (attributes.smile > 0.30 && attributes.smile <= 0.75)
                    {
                        attributes.smile = "Maybe";
                    }
                    else
                    {
                        attributes.smile = "Yes !!";
                    }
                }
                dataOut.attributes = attributes;
                next(dataIn, dataOut, null);
              });
}


/**
 * Return the answer to the client.
 */
function ReturnResponse(dataIn, dataOut)
{
    if (!dataIn.context.res)
    {
        dataIn.context.res = {};
    }
    dataIn.context.res.status = 200;
    dataIn.context.res.headers = { "content-type" : "application/json" };
    dataIn.context.res.body = JSON.stringify(dataOut);
    dataIn.context.done();
}


/**
 * Wrapper function to call Azure Cognitive Services easily.
 */
function CallCSApi(url, key, data, callback)
{
    r({
        url : url,
        headers :
        {
            "Content-Type" : data.url ? "application/json": "application/octet-stream",
            "Ocp-Apim-Subscription-Key" : key
        },
        method : "POST",
        body : data.url ? JSON.stringify(data): data
      },
      callback);
}