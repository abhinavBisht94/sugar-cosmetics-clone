const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const authRouter = require("./routes/auth/auth");
const cartRouter = require("./routes/Cart/cart");
const paymentRouter = require("./routes/Payment/payment");
const productRouter = require("./routes/Product/product");
const PORT = process.env.PORT || 8080;

const connection = mongoose.connect(process.env.database, {
  useNewUrlParser: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/product", productRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);
app.use("/payment", paymentRouter);

app.listen(PORT, async () => {
  try {
    await connection;
  } catch (error) {
    console.log("error: ", error);
  }
  console.log("Server  Starts at http://localhost:8080/");
});
