const express = require("express");
const reviewRouter = express.Router();
reviewRouter.get("/reviews", async (req, res) => {});
reviewRouter.get("/reviews/:id", async (req, res) => {});
reviewRouter.post("/reviews", async (req, res) => {}); // Authenticated user
reviewRouter.put("/reviews/:id", async (req, res) => {}); // only owner
reviewRouter.delete("/reviews/:id", async (req, res) => {}); //  owner /admin
module.exports = reviewRouter;
