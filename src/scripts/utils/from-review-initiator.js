import RestoDbSource from '../data/restodb';
import { createFormReviewTemplate } from '../views/templates/template-creator';

const FormReviewInitiator = {
  async init({ formReviewContainer, id }) {
    this._formReviewContainer = formReviewContainer;
    this._id = id;

    await this._renderForm();
  },

  async _renderForm() {
    this._formReviewContainer.innerHTML = createFormReviewTemplate();

    const btnSubmit = document.querySelector('.btnSubmit');

    btnSubmit.addEventListener('click', async () => {
      const inputName = document.querySelector('.inputName');
      const inputReview = document.querySelector('.inputReview');
      const form = document.querySelector('form');

      const reviewData = {
        id: this._id,
        name: inputName.value,
        review: inputReview.value,
      };

      if (inputName.value === '') {
        alert('Nama tidak boleh kosong!');
      } else if (inputReview.value === '') {
        alert('Review tidak boleh kosong!');
      } else {
        await RestoDbSource.reviewRestaurant(reviewData);
        form.reset();
      }
    });
  },

};

export default FormReviewInitiator;
