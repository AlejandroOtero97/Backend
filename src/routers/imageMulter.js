import multer from "../middlewares/multer.js";
import ImagesController from "../controllers/imagesController.js";

import { Router } from "express";


const router = new Router();

class imageMulter {
    #imageController;
    constructor () {
        this.#imageController = new ImagesController();
    }
    start(){
        router.post('/', multer.single('image'), this.#imageController.getFile);
        return router;
    }
}

export default imageMulter;