import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("rentals", (table) => {
    table.increments("id").primary();
    table.integer("car_id").notNullable();
    table.integer("customer_id").notNullable();
    table.date("rent_date").notNullable();
    table.date("return_date").notNullable();
    table.integer("total_amount").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {}
