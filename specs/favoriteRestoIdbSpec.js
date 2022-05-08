import FavoriteRestaurantIdb from '../src/scripts/data/restaurant-idb';
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (data) => {
      await FavoriteRestaurantIdb.deleteRestaurant(data.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});