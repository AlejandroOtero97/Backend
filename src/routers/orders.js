import OrdersController from "../controllers/ordersController.js";

import { Router } from "express";
import { auth } from "../jsonwebtoken/jsonwebtoken.js";

const router = new Router();

class Orders {
    #ordersController
    constructor () {
        this.#ordersController = new OrdersController();
    }
    start(){
        router.post("/", auth, this.#ordersController.createOrder);
        return router;
    }
}

export default Orders;