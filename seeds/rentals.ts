import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("rentals").del();

  const rentDate = new Date();
  const returnDate = new Date(rentDate);
  returnDate.setDate(returnDate.getDate() + 7);
  // Inserts seed entries
  await knex("rentals").insert([
    {
      id: 1,
      car_id: 1,
      customer_id: 1,
      // rent date tipe date
      rent_date: rentDate,
      // return date tipe date
      return_date: returnDate,
      total_amount: 1,
    },
  ]);
}
