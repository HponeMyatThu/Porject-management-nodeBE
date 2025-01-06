import express from 'express';
import bp from 'body-parser';
import models from './models/index.js';
import cors from 'cors';
import { default as handleCRUD } from './utils/handleCRUD.js';
import { Port, BaseRoute } from './utils/env.js';

const { sequelize, BusinessOwner } = models;
const { json } = bp;

const app = express();
app.use(json());

app.use(cors());

app.use(`${BaseRoute}/businessOwner/:id?`, handleCRUD(BusinessOwner));

sequelize.sync().then(() => {
  app.listen(Port, () => {
    console.log(`App listening on port ${Port}!`);
  });
});
