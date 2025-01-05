import dotenv from 'dotenv';
dotenv.config();

const Port = process.env.PORT;
const BaseRoute = process.env.BASE_ROUTE;

export { Port, BaseRoute };
