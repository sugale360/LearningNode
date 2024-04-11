const connectDB = require('./mongoDB');

const updateData = async ()=>{
let data = await connectDB();
let result = await data.updateOne({name : 'm 40'}, {$set :{name : 'note 10'}})
console.warn(result);
}

updateData();