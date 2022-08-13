import RestaurantDbSource from '../../data/restaurantdb-source';
import { restaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <div class="hero">
      <div class="hero-text">
        <h1>Find your favorite restaurant</h1>
        <p>Food is for eating, and good food is to be enjoyed. Nothing brings people together like a good food...</p>
      </div>
    </div>

    <div class="explore">
        <h1 class="explore-label">Explore Restaurant</h1>
    </div>

    <div class="content">
        <div id="restaurants" class="restaurants">

        </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.homePage();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },
};

export default HomePage;
