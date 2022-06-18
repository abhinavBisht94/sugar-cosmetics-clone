const { Router } = require("express");
const Product = require("../../models/Product.model");

const productRouter = Router();

console.log("came");

productRouter.get("/", async (req, res) => {
  // res.send("working");
  const product = await Product.find();
  res.send(product);
});

productRouter.get("/:main/:category/:id", async (req, res) => {
  // console.log('it is coming')
  // const body = req.body
  // console.log(body)
  // console.log(Product, 'model')
  console.log(req.params.id, "this is id c");
  const product = await Product.find({ _id: req.params.id });

  return res.send(product);
});

productRouter.get("/:main", async (req, res) => {
  // res.send("working");
  let { perPage, pageNo } = req.query;
  perPage = +perPage;
  pageNo = +pageNo;
  const product = await Product.find({
    MainCategory: "brushes",
  })
    .skip((pageNo - 1) * perPage)
    .limit(perPage);
  console.log(req.params);

  res.send(product);
});

productRouter.get("/:main/:category", async (req, res) => {
  // res.send("working");
  let { perPage, pageNo } = req.query;
  perPage = +perPage;
  pageNo = +pageNo;
  const product = await Product.find({
    $and: [{ MainCategory: "brushes" }, { category: req.params.category }],
  })
    .skip((pageNo - 1) * perPage)
    .limit(perPage);
  console.log(req.params);

  res.send(product);
});

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
