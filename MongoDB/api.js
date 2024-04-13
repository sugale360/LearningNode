const connectDB = require("./mongoDB");
const express = require("express");
const app = express();
const main = require("./index");
const mongoDB = require('mongodb');
app.use(express.json());
app.get("/", async (req, res) => {
  // let data = await connectDB();
  //  data = await data.find().toArray();
  // res.send(data);
  // const data = await main();
  res.send(await main());
});

app.post("/", async (req, res) => {
  const data = await connectDB();
  let result = await data.insertOne(req.body);
  console.log(result);
  res.send(result);
});

app.put("/:name", async (req, res) => {
  const data = await connectDB();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(result);
  console.log(result);
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  const data = await connectDB();
  let result = await data.deleteOne({ _id: new mongoDB.ObjectId(req.params.id) });
  res.send(result);
});
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
