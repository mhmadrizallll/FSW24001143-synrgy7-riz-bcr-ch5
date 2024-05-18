import { Request, Response } from "express";
import { RentalsModel } from "../models/rentals.model";

const getRentals = async (req: Request, res: Response) => {
  const rentals = await RentalsModel.query();
  res.send(rentals);
};

const addRentals = async (req: Request, res: Response) => {
  const rentDate = new Date();
  const returnDate = new Date(rentDate);
  returnDate.setDate(returnDate.getDate() + 7);
  try {
    const rentals = await RentalsModel.query().insert({
      car_id: 2,
      customer_id: 2,
      rent_date: new Date(),
      return_date: new Date(),
      total_amount: 10,
    });
    res.status(200).send(rentals);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const updateRentals = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const rentals = await RentalsModel.query().updateAndFetchById(id, {
      car_id: 2,
      customer_id: 2,
      rent_date: new Date(),
      return_date: new Date(),
      total_amount: 1000,
    });
    res.status(200).send(rentals);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const deleteRentals = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const rentals = await RentalsModel.query().findById(id);
    if (!rentals) res.status(404).send("Rentals not found");
    await RentalsModel.query().deleteById(id);
    res.status(200).json({ message: "Rentals deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export { getRentals, addRentals, updateRentals, deleteRentals };
