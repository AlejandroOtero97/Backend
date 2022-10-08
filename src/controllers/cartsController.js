import service from "../service/indexService.js";

export default class cartsController {
    constructor () { }
    async postProduct (req, res) {
        try {
            const { productId } = req.body;
            const { id } = req.user;
            const product = await service.getProductById(productId);
            if (!product) {
                return res.status(404).json({ error: "Producto no encontrado!" });
            }
            const cart = await service.insertProductToCart(id, productId);

            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getCart (req, res) {
        try {
            const { id } = req.user;
            const cart = await service.getCart(id);
            if (!cart) {
                return res.status(404).json({ error: "Carrito no encontrado!" });
            }
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async deleteProduct(req, res){
        try {
            const { productId } = req.params;
            const { id } = req.user;
            const product = await service.getProductById(productId);
            if (!product) {
                return res.status(404).json({ error: "Producto no encontrado!" });
            }
            const cart = await service.deleteProductFromCart(id, productId);
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
