import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    {
      id: 1,
      merk: "pajero",
      model: "honda",
      year: 2020,
      status: "available",
      image: "image1",
    },
  ]);
}
