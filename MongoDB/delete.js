const connectDB = require('./mongoDB');

const deleteOne = async ()=>{
    const data = await connectDB();
    let result = await data.deleteOne({name:'gt2'})
    console.warn(result);
}

deleteOne();