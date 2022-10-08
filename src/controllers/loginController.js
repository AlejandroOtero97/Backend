import service from "../service/indexService.js";
import bCrypt from "bcrypt";

import { generateToken } from "../jsonwebtoken/jsonwebtoken.js";

export default class userController {
    constructor() { }
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await service.findUserByEmail(email);
            if (!user) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            } else {
                if(bCrypt.compareSync(password, user.password)){
                    const token = generateToken(user);
                    return res.status(200).json({ token: token });
                } else {
                    return res.status(401).json({ error: "Contraseña invalida" });
                }
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}