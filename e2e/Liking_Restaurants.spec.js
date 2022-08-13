const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');

  const firstResto = locate('.restaurant__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedRestoName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant__name a');

  const firstResto = locate('.restaurant__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');

  const unlikedRestaurantsName = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(firstRestoName, unlikedRestaurantsName);

  I.seeElement('.restaurant__name a');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');

  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});
