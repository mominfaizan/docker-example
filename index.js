const express = require("express");
const app = express();

app.get("/", (req, res) => {
  //   res.json([
  //     {
  //       id: 1,
  //       name: "Faizan",
  //       age: 20,
  //     },
  //     {
  //       id: 2,
  //       name: "faiyaz",
  //       age: 24,
  //     },
  //     {
  //       id: 3,
  //       name: "abdul",
  //       age: 22,
  //     },
  //   ]);
  res.sendFile(__dirname + "/index.html");
});
app.listen(5000, () => {
  console.log("Server listen at port 5000");
});
