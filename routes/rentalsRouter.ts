import express from "express";
import {
  addRentals,
  deleteRentals,
  getRentals,
  updateRentals,
} from "../service/rentalsService";
const router = express.Router();

router.get("/", getRentals);
router.post("/", addRentals);
router.put("/:id", updateRentals);
router.delete("/:id", deleteRentals);

export default router;
