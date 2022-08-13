import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const restaurantItemTemplate = (restaurant) => `
                <article class="restaurant post-item">
                    <div class="post-img-container">
                    <img class="post-item-img lazyload"
                        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
                        alt="${restaurant.name || '-'}">
                        <p class="post-item-location">${restaurant.city}</p>
                    </div>
                    <div class="post-item-content">
                        <p class="post-item-rating">⭐️ ${restaurant.rating || '-'}</p>
                        <h1 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}" class="post-item-link">${restaurant.name || '-'}</a></h1>
                        <p class="post-item-description">${restaurant.description || '-'}</p>
                    </div>
                </article>
`;

const restaurantDetailTemplate = (restaurant) => `
    <h2 class="detail-title">${restaurant.name}</h2>
    <img class="detail-img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="detail-info">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Rating</h4>
        <p>⭐️ ${restaurant.rating}</p>
        <h4>Alamat</h4>
        <p>${restaurant.address}</p>
        <h4>Categories</h4>
        <p>${restaurant.categories.map((name) => `
        ${name.name}`)}</p>
        <h4>Menu Makanan</h4>
        <p>${restaurant.menus.foods.map((name) => `
        ${name.name}`)}</p>
        <h4>Menu Minuman</h4>
        <p>${restaurant.menus.drinks.map((name) => `
        ${name.name}`)}</p>
    </div>
    <div class="detail-overview">
        <h3>Overview</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="detail-review">
      <h3>Reviews</h3>
      ${restaurant.customerReviews.map((review) => `
      <div class="detail-review-list">
          <p class="detail-review-name"> <i class="fa-solid fa-user"></i>  ${review.name}</p>
          <p class="detail-review-comment">${review.review}</p>
          <p class="detail-review-date">${review.date}</p>
      </div>
      `).join(' ')}
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restaurantItemTemplate,
  restaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
