import CartsController from "../controllers/cartsController.js";

import { Router } from "express";
import { auth } from "../jsonwebtoken/jsonwebtoken.js";

const router = new Router();

class Shoppingcartproducts {
    #cartsController
    constructor () {
        this.#cartsController = new CartsController();
    }
    start(){
        router.get("/", auth, this.#cartsController.getCart);
        router.post("/", auth, this.#cartsController.postProduct);
        router.delete("/:productId", auth, this.#cartsController.deleteProduct);
        return router;
    }
}

export default Shoppingcartproducts;