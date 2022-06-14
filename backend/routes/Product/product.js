const { Router } = require("express");

<<<<<<< HEAD
const productRouter = Router();
const { Product } = require("../../index");
=======
const productRouter = Router()
const { Product } = require('../../index')
>>>>>>> 1716f30f3e63cb9aa87fea952bd95c7a18488835

console.log("came");

productRouter.get("/new", (req, res) => {
  res.send("working");
});

productRouter.post("/new", async (req, res) => {
  console.log("it is coming");
  // const body = req.body
  // console.log(body)
  // console.log(Product, 'model')
  const product = await Product.insertMany(req.body);

  product.save((err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

module.exports = productRouter;
