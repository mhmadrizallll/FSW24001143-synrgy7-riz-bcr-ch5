import express from "express";
import {
  addCars,
  deleteCars,
  getCars,
  getCarsById,
  updateCars,
  uploadImageCars,
} from "../service/carsService";
import upload from "../middlewares/uploadHandlers";
const router = express.Router();

router.get("/", getCars);
router.get("/:id", getCarsById);
router.post("/", addCars);
router.put("/:id", updateCars);
router.delete("/:id", deleteCars);
router.post("/uploads", upload.single("image"), uploadImageCars);

export default router;
