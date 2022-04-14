const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("go to route for data");
});
router.post("/route", (req, res) => {
  const array = req.body;
  const even = [];
  const odd = [];
  let i;
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] == "number") {
      if (array[i] % 2 == 1) {
        odd.push(array[i]);
      } else {
        even.push(array[i]);
      }
    }
  }
  res
    .send({
      body:req.body
    })
    .json()
    .status(200);
});

app.use(`/.netlify/functions/server`, router);

module.exports = app;
module.exports.handler = serverless(app);
