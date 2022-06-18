const { Router } = require("express");

const Cart = require("../../models/cart.model");

const cartRouter = Router();

cartRouter.post("/", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    return res.status(201).send(cart);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

cartRouter.get("/", async (req, res) => {
  try {
    const cart = await Cart.find().populate("product_id").lean().exec();
    return res.status(201).send({ cart: cart });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

cartRouter.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.find(req.params.id).populate().lean().exec();
    return res.status(201).send({ cart: cart });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

cartRouter.delete("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id, req.body)
      .lean()
      .exec();
    return res.status(201).send({ cart: cart });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = cartRouter;
