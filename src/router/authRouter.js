const express = require("express");
const authRouter = express.Router();
authRouter.post("/auth/register", async (req, res) => {});
authRouter.post("/auth/logout", async (req, res) => {});
authRouter.get("/auth/user/:id", async (req, res) => {});
authRouter.post("/auth/login", async (req, res) => {});
authRouter.put("/auth/user/:id", async (req, res) => {});

module.exports = authRouter;
