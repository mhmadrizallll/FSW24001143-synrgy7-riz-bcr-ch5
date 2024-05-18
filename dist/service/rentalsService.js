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
exports.deleteRentals = exports.updateRentals = exports.addRentals = exports.getRentals = void 0;
const rentals_model_1 = require("../models/rentals.model");
const getRentals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rentals = yield rentals_model_1.RentalsModel.query();
    res.send(rentals);
});
exports.getRentals = getRentals;
const addRentals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rentDate = new Date();
    const returnDate = new Date(rentDate);
    returnDate.setDate(returnDate.getDate() + 7);
    try {
        const rentals = yield rentals_model_1.RentalsModel.query().insert({
            car_id: 2,
            customer_id: 2,
            rent_date: new Date(),
            return_date: new Date(),
            total_amount: 10,
        });
        res.status(200).send(rentals);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.addRentals = addRentals;
const updateRentals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const rentals = yield rentals_model_1.RentalsModel.query().updateAndFetchById(id, {
            car_id: 2,
            customer_id: 2,
            rent_date: new Date(),
            return_date: new Date(),
            total_amount: 1000,
        });
        res.status(200).send(rentals);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.updateRentals = updateRentals;
const deleteRentals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const rentals = yield rentals_model_1.RentalsModel.query().findById(id);
        if (!rentals)
            res.status(404).send("Rentals not found");
        yield rentals_model_1.RentalsModel.query().deleteById(id);
        res.status(200).json({ message: "Rentals deleted successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.deleteRentals = deleteRentals;
