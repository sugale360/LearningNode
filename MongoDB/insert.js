const connectDB = require('./mongoDB');

const insert = async ()=>{
    const db = await connectDB();
    const data = await db.insertOne({name:'gt2',brand:'Realme',price:25000,category:'mobile'});
    console.log(data);
}
insert();