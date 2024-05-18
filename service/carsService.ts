import { Request, Response } from "express";
import { CarsModel } from "../models/cars.model";

const uploadImageCars = async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).send("No file uploaded");

  const url = `/uploads/${req.file.filename}`;
  res.status(200).json({ message: "uploaded", url });
};

const getCars = async (req: Request, res: Response) => {
  const cars = await CarsModel.query().withGraphFetched("rentals");
  res.send(cars);
};

const getCarsById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const cars = await CarsModel.query().findById(id).withGraphFetched("rentals");
  if (!cars) res.status(404).send("Cars not found");
  res.send(cars);
};

const addCars = async (req: Request, res: Response): Promise<void> => {
  try {
    const { merk, model, year, status, image } = req.body;
    const cars = await CarsModel.query().insert({
      merk,
      model,
      year,
      status,
      image,
    });
    res.status(200).send(cars);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const updateCars = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const { merk, model, year, status, image } = req.body;
    const cars = await CarsModel.query().updateAndFetchById(id, {
      merk,
      model,
      year,
      status,
      image,
    });
    res.status(200).send(cars);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const deleteCars = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const cars = await CarsModel.query().findById(id);
    if (!cars) res.status(404).send("Cars not found");
    await CarsModel.query().deleteById(id);
    res.status(200).json({ message: "Cars deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export {
  getCars,
  getCarsById,
  addCars,
  updateCars,
  deleteCars,
  uploadImageCars,
};
