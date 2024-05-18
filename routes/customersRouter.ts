import express from "express";
import {
  addCustomers,
  deleteCustomers,
  getCustomers,
  getCustomersById,
  updateCustomers,
} from "../service/customerService";
const router = express.Router();

router.get("/", getCustomers);
router.get("/:id", getCustomersById);
router.post("/", addCustomers);
router.put("/:id", updateCustomers);
router.delete("/:id", deleteCustomers);

export default router;
