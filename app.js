import express from 'express';
import bp from 'body-parser';
import models from './models/index.js';
import cors from 'cors';
import { default as handleCRUD } from './utils/handleCRUD.js';
import { Port, BaseRoute } from './utils/env.js';
import { authenticateUser } from './utils/generateToken.js';

const { sequelize, BusinessOwner } = models;
const { json } = bp;

const app = express();
app.use(json());
app.use(cors());

app.use(`${BaseRoute}/businessOwner/CRUD/:id?`, handleCRUD(BusinessOwner));

app.post(`${BaseRoute}/businessOwner/login`, async (req, res, next) => {
  try {
    const result = authenticateUser(BusinessOwner, req.body.email);
    if (result.error) {
      return res.status(result.status).json({ error: result.error });
    }
    return res.status(result.status).json({ token: result.token });
  } catch (err) {
    next(err);
  }
});

sequelize.sync().then(() => {
  app
    .listen(Port, () => {
      console.log(`App listening on port ${Port}!`);
    })
    .on('error', (err) => {
      console.error('Server failed to start:', err);
    });
});
