const { default: mongoose } = require("mongoose");

const saveInDB = async () => {
  await mongoose.connect("mongodb://0.0.0.0/e-comm");
  const ProductSchema = new mongoose.Schema({ 
    name: String,
    price: Number,
    brand: String,
    Category: String
 });

const ProductsModel = mongoose.model('products', ProductSchema);
let data = new  ProductsModel({name:'note pro',price:25000, brand:'mi',Category:'mobile'});
let result = await data.save();
console.log(result);
};
