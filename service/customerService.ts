import { Request, Response } from "express";
import { CustomersModel } from "../models/customers.model";

const getCustomers = async (req: Request, res: Response) => {
  const customers = await CustomersModel.query().withGraphFetched("rentals");
  res.send(customers);
};

const getCustomersById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const customers = await CustomersModel.query()
    .findById(id)
    .withGraphFetched("rentals");
  if (!customers) res.status(404).send("Customers not found");
  res.send(customers);
};

const addCustomers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, address, phone } = req.body;
    const customers = await CustomersModel.query().insert({
      name,
      address,
      phone,
    });
    res.status(200).send(customers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const updateCustomers = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  try {
    const { name, address, phone } = req.body;
    const customers = await CustomersModel.query().updateAndFetchById(id, {
      name,
      address,
      phone,
    });
    res.status(200).send(customers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const deleteCustomers = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const customers = await CustomersModel.query().findById(id);
    if (!customers) res.status(404).send("Customers not found");
    await CustomersModel.query().deleteById(id);
    res.status(200).json({ message: "Customers deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

export {
  getCustomers,
  getCustomersById,
  addCustomers,
  updateCustomers,
  deleteCustomers,
};
