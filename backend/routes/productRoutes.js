import express from "express";
import { modelNames } from "mongoose";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    const type = req.query.type;
    let name = req.query.name;
    let products;
    
    if (type) {
      products = await Product.find({ type: type });
    } 
    else if (name) {
        products = await Product.find({ name: { $regex: name, $options: 'i' } });
    }
    else {
      products = await Product.find();
    }
    res.send(products);
});


  productRouter.get('/categories', async (req,res) => {
    const catId = req.query.id;
    const maxPrice = req.query.maxPrice || 30;
    const sort = req.query.sort || '';
    const subCat = req.query.subCat || [];

    const query = {
      category: catId,
      price: { $lte: maxPrice },
    };

    // Add filter for selected sub-categories
    if (subCat.length) {
      query.subCat = { $in: subCat };
    }
    let sortOption = {};
    if (sort) {
        sortOption = sort === 'desc' ? { price: -1 } : { price: 1 };
    }

    const products = await Product.find(query).sort(sortOption);

    res.send(products);
})

  

productRouter.get('/subcategories', async (req,res) => {
    const products = await Product.find({category: req.query.id});
    const subcategories = [...new Set(products.flatMap((product) => product.subCat))];
    res.send(subcategories);
})
  

productRouter.get('/slug/:slug', async (req,res) => {
    const product = await Product.findOne({slug:req.params.slug})
    if (product) {
        res.send(product)
    }
    else {
        res.status(404).send({message: 'Product not Found'})
    }
});

productRouter.get('/:id', async (req,res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.send(product)
    }
    else {
        res.status(404).send({message: 'Product not Found'})
    }
});

export default productRouter;