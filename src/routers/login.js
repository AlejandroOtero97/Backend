import LoginController from "../controllers/loginController.js";

import { Router } from "express";


const router = new Router();

class Login {
    #loginController;
    constructor () {
        this.#loginController = new LoginController();
    }
    start(){
        router.post("/", this.#loginController.login);
        return router;
    }
}

export default Login;