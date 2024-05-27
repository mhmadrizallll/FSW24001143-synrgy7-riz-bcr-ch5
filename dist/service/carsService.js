"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageCars = exports.deleteCars = exports.updateCars = exports.addCars = exports.getCarsById = exports.getCars = void 0;
const cars_model_1 = require("../models/cars.model");
const uploadImageCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file)
        return res.status(400).json({ message: "No file uploaded" });
    const url = `/public/uploads/${req.file.filename}`;
    res.status(200).json({ message: "uploaded", url });
});
exports.uploadImageCars = uploadImageCars;
const getCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cars = yield cars_model_1.CarsModel.query().withGraphFetched("rentals");
    res.send(cars);
});
exports.getCars = getCars;
const getCarsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const cars = yield cars_model_1.CarsModel.query().findById(id).withGraphFetched("rentals");
    if (!cars)
        res.status(404).send("Cars not found");
    res.send(cars);
});
exports.getCarsById = getCarsById;
const addCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { merk, model, year, status } = req.body;
        const imageUrl = req.file
            ? `/public/uploads/${req.file.filename}`
            : null;
        const cars = yield cars_model_1.CarsModel.query().insert({
            merk,
            model,
            year,
            status,
            image: imageUrl,
        });
        res.status(200).send(cars);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.addCars = addCars;
const updateCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const { merk, model, year, status, image } = req.body;
        const cars = yield cars_model_1.CarsModel.query().updateAndFetchById(id, {
            merk,
            model,
            year,
            status,
            image,
        });
        res.status(200).send(cars);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.updateCars = updateCars;
const deleteCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const cars = yield cars_model_1.CarsModel.query().findById(id);
        if (!cars)
            res.status(404).send("Cars not found");
        yield cars_model_1.CarsModel.query().deleteById(id);
        res.status(200).json({ message: "Cars deleted successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.deleteCars = deleteCars;
