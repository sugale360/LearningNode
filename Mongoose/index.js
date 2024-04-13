const { default: mongoose } = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://0.0.0.0/e-comm");
  const ProductSchema = new mongoose.Schema({ 
    name: String,
    price: Number
 });

const ProductsModel = mongoose.model('products', ProductSchema);
let data = new  ProductsModel({name:'gt2',price:1000});
let result = await data.save();
console.log(result);
};
main();