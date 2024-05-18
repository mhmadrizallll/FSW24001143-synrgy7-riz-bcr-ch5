import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("customers").del();

  // Inserts seed entries
  await knex("customers").insert([
    { id: 1, name: "rizal", address: "pemalang", phone: "0877889977" },
  ]);
}
