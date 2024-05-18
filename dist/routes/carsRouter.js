"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carsService_1 = require("../service/carsService");
const uploadHandlers_1 = __importDefault(require("../middlewares/uploadHandlers"));
const router = express_1.default.Router();
router.get("/", carsService_1.getCars);
router.get("/:id", carsService_1.getCarsById);
router.post("/", carsService_1.addCars);
router.put("/:id", carsService_1.updateCars);
router.delete("/:id", carsService_1.deleteCars);
router.post("/uploads", uploadHandlers_1.default.single("image"), carsService_1.uploadImageCars);
exports.default = router;
