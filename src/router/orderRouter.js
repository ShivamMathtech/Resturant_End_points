const express = require("express");
const orderRouter = express.Router();
orderRouter.get("/orders", async (req, res) => {}); // Only admin get All orders
orderRouter.get("/orders/:id", async (req, res) => {}); //Admin and users both
orderRouter.post("/orders/", async (req, res) => {});
orderRouter.put("/orders/:id", async (req, res) => {}); // change order status only admin
orderRouter.delete("/orders/:id", async (req, res) => {}); // Cancel Order either User , Admin
module.exports = orderRouter;
