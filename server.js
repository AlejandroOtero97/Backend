import express from 'express';
import imageMulter from './src/routers/imageMulter.js';
import Products from './src/routers/products.js';
import Users from './src/routers/Users.js';
import Login from './src/routers/login.js';
import shoppingcartproducts from './src/routers/shoppingcartproducts.js';
import Orders from './src/routers/orders.js';
import initializeServer from './src/server/initializeServer.js';

import { logInfo } from "./src/middlewares/logsMiddlewares.js";
import { errorHandling } from './src/middlewares/errorHandling.js';

const app = express();
const imagesRouter = new imageMulter();
const productsRouter = new Products();
const usersRouter = new Users();
const loginRouter = new Login();
const cartsRouter = new shoppingcartproducts();
const ordersRouter = new Orders();


app.use(express.static('./public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logInfo);

app.use('/api/images', imagesRouter.start());
app.use('/api/products', productsRouter.start());
app.use('/api/users', usersRouter.start());
app.use('/api/shoppingcartproducts', cartsRouter.start());
app.use('/api/orders', ordersRouter.start());
app.use('/login', loginRouter.start());


app.use(errorHandling);

initializeServer(app);