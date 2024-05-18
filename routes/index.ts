import express from "express";
import carsRouter from "./carsRouter";
import rentalsRouter from "./rentalsRouter";
import customersRouter from "./customersRouter";
const router = express.Router();

router.use("/cars", carsRouter);
router.use("/rentals", rentalsRouter);
router.use("/customers", customersRouter);

export default router;
