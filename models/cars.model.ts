import { Model, ModelObject } from "objection";
import { RentalsModel } from "./rentals.model";

export class CarsModel extends Model {
  id!: number;
  merk!: string;
  model!: string;
  year!: number;
  status!: string;
  image!: string;

  static get tableName() {
    return "cars";
  }

  static get relationMappings() {
    return {
      rentals: {
        relation: Model.HasManyRelation,
        modelClass: RentalsModel,
        join: {
          from: "cars.id",
          to: "rentals.car_id",
        },
      },
    };
  }
}

export type Cars = ModelObject<CarsModel>;
