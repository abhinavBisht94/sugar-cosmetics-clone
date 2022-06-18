<<<<<<< Updated upstream
const { Router } = require('express')
const { MongoClient } = require('mongodb')
=======
const { Router } = require("express");
const Product = require("../../models/Product.model");
>>>>>>> Stashed changes

const productRouter = Router();

<<<<<<< Updated upstream
productRouter.get('/', async (req, res) => {
  const data =  await Product.find()
  // console.log(data)
  res.send(data)

  // res.send('working')
})
=======
console.log("came");

productRouter.get("/", async (req, res) => {
  // res.send("working");
  const product = await Product.find();
  res.send(product);
});
>>>>>>> Stashed changes

productRouter.post("/new", async (req, res) => {
  // console.log('it is coming')
  // const body = req.body
  // console.log(body)
  // console.log(Product, 'model')
  const product = await Product(req.body);

  product
    .save()
    .then((data) => res.send(data))
    .catch((e) => res.send(e));
});

productRouter.get("/:id", async (req, res) => {
  // console.log('it is coming')
  // const body = req.body
  // console.log(body)
  // console.log(Product, 'model')
  const product = await Product.findById(req.params.id);

  return res.send(product);
});

// productRouter.get("/search", async (req, res) => {
//   // console.log('it is coming')
//   // const body = req.body
//   // console.log(body)
//   // console.log(Product, 'model')
//   console.log(req.query, "query");
//   // const product = await Product.find(req.query);

//   return res.send("product");
// });

module.exports = productRouter;
