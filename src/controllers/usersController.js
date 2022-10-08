import service from "../service/indexService.js";
import bCrypt from "bcrypt";

import { generateToken } from "../jsonwebtoken/jsonwebtoken.js";

function createHash(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

export default class userController {
    constructor() { }
    async register(req, res) {
        try {
            if(!req.body.email || !req.body.password) {
                res.status(400).json({ error: "Usuario no creado" });
            } else {
                const newUser = req.body;
                newUser.password = createHash(newUser.password);
                const user = await service.registerUser(newUser);
                if(user) {
                    const token = generateToken(user);
                    res.status(201).json({ token: token });
                } else {
                    res.status(400).json({ error: "Usuario ya existente" });
                }
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}


