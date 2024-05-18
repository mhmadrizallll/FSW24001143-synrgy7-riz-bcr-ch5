"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersModel = void 0;
const objection_1 = require("objection");
const rentals_model_1 = require("./rentals.model");
class CustomersModel extends objection_1.Model {
    static get tableName() {
        return "customers";
    }
    static get relationMappings() {
        return {
            rentals: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: rentals_model_1.RentalsModel,
                join: {
                    from: "customers.id",
                    to: "rentals.customer_id",
                },
            },
        };
    }
}
exports.CustomersModel = CustomersModel;
