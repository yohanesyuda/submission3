import RestoDbSource from '../../data/restodb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="container">
            <div class="content">
                <h3 tabindex="0" class="katalog-label">Explore Restaurant</h3>
                <div class="restoran-section" id="restaurant-list">
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestoDbSource.homePages();
    const restaurantList = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
