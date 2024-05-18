"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carsRouter_1 = __importDefault(require("./carsRouter"));
const rentalsRouter_1 = __importDefault(require("./rentalsRouter"));
const customersRouter_1 = __importDefault(require("./customersRouter"));
const router = express_1.default.Router();
router.use("/cars", carsRouter_1.default);
router.use("/rentals", rentalsRouter_1.default);
router.use("/customers", customersRouter_1.default);
exports.default = router;
