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
exports.deleteCustomers = exports.updateCustomers = exports.addCustomers = exports.getCustomersById = exports.getCustomers = void 0;
const customers_model_1 = require("../models/customers.model");
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield customers_model_1.CustomersModel.query().withGraphFetched("rentals");
    res.send(customers);
});
exports.getCustomers = getCustomers;
const getCustomersById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const customers = yield customers_model_1.CustomersModel.query()
        .findById(id)
        .withGraphFetched("rentals");
    if (!customers)
        res.status(404).send("Customers not found");
    res.send(customers);
});
exports.getCustomersById = getCustomersById;
const addCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, address, phone } = req.body;
        const customers = yield customers_model_1.CustomersModel.query().insert({
            name,
            address,
            phone,
        });
        res.status(200).send(customers);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.addCustomers = addCustomers;
const updateCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const { name, address, phone } = req.body;
        const customers = yield customers_model_1.CustomersModel.query().updateAndFetchById(id, {
            name,
            address,
            phone,
        });
        res.status(200).send(customers);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.updateCustomers = updateCustomers;
const deleteCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const customers = yield customers_model_1.CustomersModel.query().findById(id);
        if (!customers)
            res.status(404).send("Customers not found");
        yield customers_model_1.CustomersModel.query().deleteById(id);
        res.status(200).json({ message: "Customers deleted successfully" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});
exports.deleteCustomers = deleteCustomers;
