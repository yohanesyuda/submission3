import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    return favoriteResto.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurants() {
    return favoriteResto;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(restaurant.id)) {
      return;
    }
    favoriteResto.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteResto = favoriteResto.filter((restaurant) => restaurant.id !== id);
  },
};

describe('favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});