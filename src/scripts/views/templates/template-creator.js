import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (data) => `
<div class="card-detail">
    <figure class="restaurant-image">
      <img tabindex="0" class="lazyload" src="${CONFIG.BASE_IMAGE_URL + data.pictureId}" alt="${data.name}" />
    </figure>
    <div class="restaurant-detail-content">
      <div class="restaurant-detail">
        <h3 class="restaurant-title" tabindex="0">${data.name}</h3>
        <div class="rating" tabindex="0">
        <i title="icon rating" class="fa fa-star" data-inline="false"></i> <span class="rating-text">${data.rating}</span>
        </div>
        <div class="restaurant-desc" tabindex="0">${data.description}</div>
        <div class="restaurant-location" tabindex="0"><span>Location</span> <p>${data.address}, ${data.city}</p></div>
  
        <p class="detail-title" tabindex="0">Category</p>
        ${data.categories.map((categori) => `<span class="category-name">Masakan ${categori.name}</span>`).join('')}
        <p class="detail-title" tabindex="0">Daftar Makanan</p>
        ${data.menus.foods.map((food) => `<span class="food-name">${food.name}</span> `)}
        <p class="detail-title" tabindex="0">Daftar Minuman</p>
        ${data.menus.drinks.map((drink) => `<span class="drink-name">${drink.name}</span> `)}
      </div>
    </div>
    <div class="review" tabindex="0">
      <h1 class="review-title" tabindex="0">Review Customer</h1>
      <div class="review-container" tabindex="0">
       ${data.customerReviews.map((review) => `
        <div class="review-item" tabindex="0">
          <p class="review-name" tabindex="0">${review.name}</p>
          <p class="review-comment" tabindex="0">${review.review}</p>
          <p class="review-date" tabindex="0">${review.date}</p>
        </div>`).join('')}
      </div>      
    </div>
  </div>  
`;

const createRestoItemTemplate = (data) => `
<article tabindex="0" class="card">
        <img tabindex="0" class="card-image" src="${data.pictureId ? CONFIG.BASE_IMAGE_URL + data.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${data.name}" alt="${data.name}" height="250">
        <div class="card-text-section">
        <span tabindex="0" class="card-rating">
            <i title="icon rating" class="fa fa-star"></i>                    
            <span>${data.rating}</span>
        </span>
        <h2 class="card-title"><a href="#/detail/${data.id}">${data.name}</a></h2>
        </a>
            <p tabindex="0" class="card-city">${data.city}</p>
            <p tabindex="0" class="card-description">${data.description}</p>
        </div>
    </article>
`;

const createFormReviewTemplate = () => `
  <form>
    <label for="inputName">Name</label>
    <input type="text" name="nama" class="inputName" id="inputName" placeholder="Enter your Name">
    <label for="inputReview">Review</label>
    <textarea name="review" class="inputReview" id="inputReview" placeholder="Enter your Reviews"></textarea>
    <button type="submit" class="btnSubmit">Submit</button>
  </form>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createFormReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
