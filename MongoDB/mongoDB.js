const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0";
const client = new MongoClient(url);
const database = "e-comm";

async function connectDB() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection('products');
}
module.exports = connectDB;