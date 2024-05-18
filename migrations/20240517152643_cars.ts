import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table) => {
    table.increments("id").primary();
    table.string("merk", 255).notNullable();
    table.string("model", 255).notNullable();
    table.integer("year").notNullable();
    table.enum("status", ["available", "rented"]).defaultTo("available");
    table.string("image", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {}
