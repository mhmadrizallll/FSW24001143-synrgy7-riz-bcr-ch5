import express, { Express, Request, Response } from "express";
import knex from "knex";
import { Model } from "objection";
import router from "./routes";

const app: Express = express();
const port = 8000;

const knexInstance = knex({
  client: "pg",
  connection: {
    user: "postgres",
    password: "1",
    port: 5432,
    host: "127.0.0.1",
    database: "db_cars",
  },
});

Model.knex(knexInstance);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
