const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth/auth");
const cartRouter = require("./routes/Cart/cart");
const paymentRouter = require("./routes/Payment/payment");
const productRouter = require("./routes/Product/product");
const userRouter = require("./routes/User/user");
const { connection } = require("./db");
const { verifyAccessToken } = require("./helpers/jwt");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
dotenv.config();

// app.post('/product/new', async (req, res) => {
//   console.log('it is coming')
//   const body = req.body
//   console.log(body)
//   const product = await Product(body)
//   product.save((error, data) => {
//     if (error) console.log(error)
//     res.send(data)
//   })
// })

app.get("/", async (req, res) => {
  res.send("Hello!");
});

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/payment", paymentRouter);

app.use(async (req, res, next) => {
  next(createError.NotFound("Page Not Found"));
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.get("/", (req, res) => {
  res.send("working")
})

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("data base connected");
  } catch (error) {
    console.log("error: ", error);
  }
  console.log("Server  Starts at http://localhost:8080/", PORT);
});
