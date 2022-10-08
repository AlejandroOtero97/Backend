import UserController from "../controllers/usersController.js";

import { Router } from "express";


const router = new Router();

class Users {
    #userController;
    constructor () {
        this.#userController = new UserController();
    }
    start(){
        router.post("/", this.#userController.register);
        return router;
    }
}

export default Users;