import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const breakdownRouter = express.Router();

breakdownRouter.get(
  "/year/:id",
  expressAsyncHandler(async (req, res) => {
    const product = data.products.filter(c => c["lotCode"] === req.params.id);
    console.log(`products : ${product}`)
    // const product = await Product.find({ lotCode: req.params.id });

    if (product) {
      let initial = [];
      const breakdown = product[0].components.reduce((a, c) => {
        let index = a?.findIndex((e) => e.key === c["year"]);
        index >= 0
          ? (a[index].percentage += c["percentage"])
          : a.push({ key: c["year"], percentage: c["percentage"] });
        return initial;
      }, initial);

      var result = {
        breakDownType: "year",
        breakdown
      };

      res.send(result);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

breakdownRouter.get(
  "/variety/:id",
  expressAsyncHandler(async (req, res) => {
    const product = data.products.filter(c => c["lotCode"] === req.params.id);
    // const product = await Product.find({ lotCode: req.params.id });

    if (product) {
        let initial = [];
        const breakdown = product[0].components.reduce((a, c) => {
          let index = a?.findIndex((e) => e.key === c["variety"]);
          index >= 0
            ? (a[index].percentage += c["percentage"])
            : a.push({ key: c["variety"], percentage: c["percentage"] });
          return initial;
        }, initial);
  
        var result = {
          breakDownType: "variety",
          breakdown
        };
  
        res.send(result);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

breakdownRouter.get(
  "/region/:id",
  expressAsyncHandler(async (req, res) => {
    const product = data.products.filter(c => c["lotCode"] === req.params.id);
    // const product = await Product.find({ lotCode: req.params.id });

    if (product) {
        let initial = [];
        const breakdown = product[0].components.reduce((a, c) => {
          let index = a?.findIndex((e) => e.key === c["region"]);
          index >= 0
            ? (a[index].percentage += c["percentage"])
            : a.push({ key: c["region"], percentage: c["percentage"] });
          return initial;
        }, initial);
  
        var result = {
          breakDownType: "region",
          breakdown
        };
  
        res.send(result);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

breakdownRouter.get(
  "/year-variety/:id",
  expressAsyncHandler(async (req, res) => {
    const product = data.products.filter(c => c["lotCode"] === req.params.id);
    // const product = await Product.find({ lotCode: req.params.id });

    if (product) {
        let initial = [];
        const breakdown = product[0].components.reduce((a, c) => {
            let index = a?.findIndex((e) => e["year"] === c["year"] && e["variety"] === c["variety"]);
            // console.log(index)
            index >= 0
              ? a[index].percentage += c["percentage"]
              : a.push({ key: `${c["year"]}-${c["variety"]}`, percentage: c["percentage"] });
            return initial;
          }, initial);
  
        var result = {
          breakDownType: "year-variety",
          breakdown
        };
  
        res.send(result);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default breakdownRouter;
