import { createRestoItemTemplate } from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/restaurant-idb';

const Favorite = {
  async render() {
    return `
        <section class="container">
            <div class="content">
                <h3 tabindex="0" class="katalog-label">Favorite Restaurant</h3>
                <div class="restoran-section" id="restaurant-list">
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const data = await FavoriteRestaurantIdb.getAllRestaurants();
    const dataContainer = document.querySelector('#restaurant-list');
    if (data.legth === 0) {
      dataContainer.innerHTML = '<favorite-message></favorite-message>';
    }

    data.forEach((restaurant) => {
      dataContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
