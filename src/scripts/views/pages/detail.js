import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/restodb';
import { createRestoDetailTemplate } from '../templates/template-creator';
import FormReviewInitiator from '../../utils/from-review-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
          <h2 class="detail-label" tabindex="0">Restaurant Detail</h2>
          <div id='detail-posts'></div>
          <div id="formReviewContainer"></div>
          <div id='likeButtonContainer'></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestoDbSource.detailRestaurant(url.id);
    const dataContainer = document.querySelector('#detail-posts');
    dataContainer.innerHTML += createRestoDetailTemplate(data);

    await FormReviewInitiator.init({
      formReviewContainer: document.querySelector('#formReviewContainer'),
      id: data.id,
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestaurantIdb,
      data: {
        id: data.id,
        name: data.name,
        city: data.city,
        rating: data.rating,
        pictureId: data.pictureId,
        description: data.description,
      },
    });
  },
};

export default Detail;
