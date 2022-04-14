const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("go to route for data");
});
app.post("/route", (req, res) => {
  const array = req.body.array;
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
      even: even,
      odd: odd,
    })
    .json()
    .status(200);
});

app.listen(port, () => {
  console.log("server is up and running");
});
