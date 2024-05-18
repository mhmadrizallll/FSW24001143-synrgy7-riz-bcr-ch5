"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalsModel = void 0;
const objection_1 = require("objection");
const customers_model_1 = require("./customers.model");
const cars_model_1 = require("./cars.model");
class RentalsModel extends objection_1.Model {
    static get tableName() {
        return "rentals";
    }
    static get relationMappings() {
        return {
            car: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: cars_model_1.CarsModel,
                join: {
                    from: "rentals.car_id",
                    to: "cars.id",
                },
            },
            customer: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: customers_model_1.CustomersModel,
                join: {
                    from: "rentals.customer_id",
                    to: "customers.id",
                },
            },
        };
    }
}
exports.RentalsModel = RentalsModel;
