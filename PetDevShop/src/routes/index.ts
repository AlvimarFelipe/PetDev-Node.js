import { Router } from "express";
import * as PageContreoller from '../controllers/pageController';
import * as SearchController from '../controllers/searchControllers';

const router = Router();

router.get('/', PageContreoller.home);
router.get('/dogs', PageContreoller.dogs);
router.get('/cats', PageContreoller.cats);
router.get('/fishes', PageContreoller.fishes);

router.get('/search',SearchController.search)

export default router;