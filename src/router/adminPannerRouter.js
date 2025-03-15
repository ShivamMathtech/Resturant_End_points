const express = require("express");
const adminRouter = express.Router();
adminRouter.get("/users", async (req, res) => {});
adminRouter.get("/users/:id", async (req, res) => {});
adminRouter.put("/users/:id", async (req, res) => {});
adminRouter.delete("/users/:id", async (req, res) => {});
module.exports = adminRouter;
