import {Router} from 'express';
import * as PageController from '../controlllers/pageController';
import * as searchController from '../controlllers/searchController';

const router = Router();


router.get('/', PageController.home);
router.get ('/dogs',PageController.dogs);
router.get ('/cats',PageController.cats);
router.get ('/fishes',PageController.fishes);

router.get ('/search',searchController.search);


export default router;