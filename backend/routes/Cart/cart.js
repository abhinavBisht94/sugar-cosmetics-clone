const { Router } = require("express");

const Cart = require("../../models/cart.model");

const cartRouter = Router();

cartRouter.post("/", async (req, res) => {
    try {
        // const e_id = req.body.product_id;
        // // const cart = await Cart.create(req.body);
        // const existing = await Cart.find({ product_id: e_id });
        // console.log("existing: ", existing[0].product_id);
        // if (
        //     existing[0].product_id ===
        //     `new ObjectId("62a98413ab2a4a8f5eafe638")`
        // ) {
        //     // let a = existing.nos + 1;
        //     const upadted = Cart.findOneAndUpdate(
        //         { product_id: e_id },
        //         { $inc: { nos: 1 } }
        //     );
        //     return res.status(201).send("updated");
        // } else {
        //   return res.status(201).send(cart);
        // }
        const cart = await Cart.create(req.body);
        return res.status(201).send(cart);
        // console.log("req.body: ", req.body);
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
