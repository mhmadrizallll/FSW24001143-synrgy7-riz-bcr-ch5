"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsModel = void 0;
const objection_1 = require("objection");
const rentals_model_1 = require("./rentals.model");
class CarsModel extends objection_1.Model {
    static get tableName() {
        return "cars";
    }
    static get relationMappings() {
        return {
            rentals: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: rentals_model_1.RentalsModel,
                join: {
                    from: "cars.id",
                    to: "rentals.car_id",
                },
            },
        };
    }
}
exports.CarsModel = CarsModel;
