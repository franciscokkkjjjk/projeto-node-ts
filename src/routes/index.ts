import { Router } from "express";
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController'; 

const router = Router();
router.get('/', pageController.home);   
router.get('/cachorros', pageController.cachorros);   
router.get('/gatos', pageController.gatos);   
router.get('/peixes', pageController.peixes);   
router.get('/buscar', searchController.search);  
router.use(pageController.notFound);

export default router;