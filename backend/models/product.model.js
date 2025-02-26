import mongoose from 'mongoose';
const productionSchema =  new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
}, {timestamps: true});
const Product=mongoose.model('Product', productionSchema);

export default Product;