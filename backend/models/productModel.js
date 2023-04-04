import mongoose, { trusted } from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        slug: {type: String, required: true, unique: true},
        img: {type: String, required: true},
        img2: {type: String, required: true},
        brand: {type: String, required: true},
        category: {type: Array, required: true},
        description: {type: String, required: true},
        oldPrice: {type: Number, required: true},
        price: {type: Number, required: true},
        type: {type: String, required:true}
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema);
export default Product;