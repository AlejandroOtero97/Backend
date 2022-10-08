import Service from "./service.js";
import productsRepository from '../repository/productsRepository.js';
import usersRepository from '../repository/usersRepository.js';
import cartsRepository from '../repository/cartsRepository.js';

const repoProducts = new productsRepository();

const repoUsers = new usersRepository();
const repoCarts = new cartsRepository();

const service = new Service(repoProducts, repoUsers, repoCarts);

export default service;