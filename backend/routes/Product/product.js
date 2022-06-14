const { Router } = require("express");

const productRouter = Router();
const { Product } = require("../../index");

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
