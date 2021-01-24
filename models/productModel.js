import mongoose from 'mongoose';

const componentSchema = new mongoose.Schema(
  {
    percentage: { type: Number, required: true },
    year: { type: Number, required: true },
    variety: { type: String, required: true },
    region: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = new mongoose.Schema(
  {
    lotCode: { type: String, required: true, unique: true },
    volume: { type: Number, required: true },
    description: { type: String },
    tankCode: { type: String, required: true },
    productState: { type: String },
    ownerName: { type: String, required: true },
    components: [componentSchema],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
