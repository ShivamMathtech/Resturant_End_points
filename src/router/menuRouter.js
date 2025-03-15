const express = require("express");
const menuRouter = express.Router();
menuRouter.get("/menu", async (req, res) => {});
menuRouter.get("/menu/:id", async (req, res) => {});
menuRouter.post("/menu/", async (req, res) => {}); // Only Admin
menuRouter.put("/menu/:id", async (req, res) => {}); //Only Admin
menuRouter.delete("/menu/:id", async (req, res) => {}); // Only Admin
module.exports = menuRouter;
