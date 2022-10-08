import { storage } from "../args/args.js";

let products, users, carts;

// MONGO SWITCH
switch(storage){
    case "mongo":
        const { productsCollection } = await import("../connections/mongoose.js");
        const { default : daoProducts } = await import('../daos/daoProducts.js');
        products = new daoProducts(productsCollection);
       
        const { usersCollection } = await import("../connections/mongoose.js");
        const { default : daoUsers } = await import('../daos/daoUsers.js');
        users = new daoUsers(usersCollection);
        
        const { cartsCollection } = await import("../connections/mongoose.js");
        const { default : daoCarts } = await import('../daos/daoCarts.js');
        carts = new daoCarts(cartsCollection);
        
        break;
    default:
        throw new Error("No se ha encontrado el tipo de almacenamiento");
}

export { products, users, carts };

