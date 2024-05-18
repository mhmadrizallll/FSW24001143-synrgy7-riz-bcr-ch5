import { Model, ModelObject } from "objection";
import { RentalsModel } from "./rentals.model";

export class CustomersModel extends Model {
  id!: number;
  name!: string;
  address!: string;
  phone!: string;

  static get tableName() {
    return "customers";
  }

  static get relationMappings() {
    return {
      rentals: {
        relation: Model.HasManyRelation,
        modelClass: RentalsModel,
        join: {
          from: "customers.id",
          to: "rentals.customer_id",
        },
      },
    };
  }
}
