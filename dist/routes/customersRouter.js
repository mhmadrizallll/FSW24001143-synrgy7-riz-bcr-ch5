"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customerService_1 = require("../service/customerService");
const router = express_1.default.Router();
router.get("/", customerService_1.getCustomers);
router.get("/:id", customerService_1.getCustomersById);
router.post("/", customerService_1.addCustomers);
router.put("/:id", customerService_1.updateCustomers);
router.delete("/:id", customerService_1.deleteCustomers);
exports.default = router;
