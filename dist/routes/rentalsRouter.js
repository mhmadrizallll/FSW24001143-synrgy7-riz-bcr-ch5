"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rentalsService_1 = require("../service/rentalsService");
const router = express_1.default.Router();
router.get("/", rentalsService_1.getRentals);
router.post("/", rentalsService_1.addRentals);
router.put("/:id", rentalsService_1.updateRentals);
router.delete("/:id", rentalsService_1.deleteRentals);
exports.default = router;
