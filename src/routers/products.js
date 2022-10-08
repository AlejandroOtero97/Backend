import productsController from "../controllers/productsController.js";

import { Router } from "express";
import { auth, isAdmin } from "../jsonwebtoken/jsonwebtoken.js";

const router = new Router();

class Products {
    #productsController;
    constructor(){
        this.#productsController = new productsController();
    }
    start(){
        router.get("/", this.#productsController.getAllProducts);
        router.get("/:id", this.#productsController.getProductById);
        router.post("/", auth, isAdmin, this.#productsController.createProduct);
        router.put("/:id", auth, isAdmin, this.#productsController.updateProduct);
        router.delete("/:id", auth, isAdmin, this.#productsController.deleteProduct);
        router.delete("/", auth, isAdmin, this.#productsController.deleteAllProducts);
        return router;
    }
}

export default Products;
