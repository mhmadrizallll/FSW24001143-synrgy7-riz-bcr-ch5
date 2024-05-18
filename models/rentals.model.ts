import { Model, ModelObject } from "objection";
import { CustomersModel } from "./customers.model";
import { CarsModel } from "./cars.model";

export class RentalsModel extends Model {
  id!: number;
  car_id!: number;
  customer_id!: number;
  rent_date!: Date;
  return_date!: Date;
  total_amount!: number;

  static get tableName() {
    return "rentals";
  }

  static get relationMappings() {
    return {
      car: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarsModel,
        join: {
          from: "rentals.car_id",
          to: "cars.id",
        },
      },
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: CustomersModel,
        join: {
          from: "rentals.customer_id",
          to: "customers.id",
        },
      },
    };
  }
}

export type Rental = ModelObject<RentalsModel>;
