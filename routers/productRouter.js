import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = data.products;
    // const products = await Product.find({});

    res.send(products);
  })
);

productRouter.put(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    console.log(req.body);

    const product = await Product.findById(productId);
    // console.log(productId)
    if (product) {
      product.lotCode = req.body.lotCode;
      product.volume = req.body.volume;
      product.description = req.body.description;
      product.tankCode = req.body.tankCode;
      product.productState = req.body.productState;
      product.ownerName = req.body.ownerName;
      for (var i = 0; i < product.components.length; i++) {
        product.components[i].percentage = req.body.components[i].percentage;
        console.log(req.body.components[i]);
        product.components[i].year = req.body.components[i].year;
        product.components[i].variety = req.body.components[i].variety;
        product.components[i].region = req.body.components[i].region;
      }

      const updatedProduct = await product.save();
      res.send({ message: "Product Updated", product: updatedProduct });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const product = req.body;
    console.log(req.body);

    const newProduct = new Product({
      lotCode: product.lotCode,
      volume: product.volume,
      description: product.description,
      tankCode: product.tankCode,
      productState: product.productState,
      ownerName: product.ownerName,
    });

    const component = {
      percentage: product.percentage,
      year: product.year,
      variety: product.variety,
      region: product.region,
    };
    newProduct.components.push(component);
    const createdProduct = await newProduct.save();
    res.send({ message: "Product Created", product: createdProduct });
  })
);

productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

export default productRouter;
