const connectDB = require('./mongoDB')

// with promise
// connectDB().then((res)=>{
// res.find({name:'m 40'}).toArray().then((data)=> console.warn(data))
// });
// console.warn(connectDB());

// with async await
const main = async () => {
  let data = await connectDB();
  data = await data.find().toArray();
console.warn(data);
return data;
}

module.exports = main;