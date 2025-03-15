const express = require("express");
const reservationRouter = express.Router();
reservationRouter.get("/reservations", async (req, res) => {}); //Only admin can see
reservationRouter.get("/reservations/:id", async (req, res) => {}); // Authenticated user/admin see
reservationRouter.post("/reservations", async (req, res) => {}); // Authenticated user
reservationRouter.put("/reservations/:id", async (req, res) => {}); // Authenticated user / Admin
reservationRouter.delete("/reservations/:id", async (req, res) => {}); // Authenticated user / Admin
module.exports = reservationRouter;
