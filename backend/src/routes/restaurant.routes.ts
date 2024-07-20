import {Router} from 'express';
import {restaurantsSanityTest, registerRestaurant, getRestaurant, deleteRestaurant} from '../controllers/restaurant-controller';

export const restaurantsRouter = Router();

restaurantsRouter.get('/test', restaurantsSanityTest);
restaurantsRouter.post('/', registerRestaurant);
restaurantsRouter.get('/', getRestaurant);
restaurantsRouter.delete('/:id', deleteRestaurant);

export default restaurantsRouter;
