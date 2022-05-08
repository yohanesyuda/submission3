const assert = require('assert');

Feature('liking Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const messageText = 'Restaurant not found';

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('.card-list');
  I.see(messageText, 'favorite-message');
});

Scenario('like and unlike a restaurant', async (I) => {

  // like resto
  I.see(messageText, 'favorite-message');

  I.amOnPage('/');

  I.seeElement('.card-restaurant-item');

  const firstResto = locate('.card-restaurant-link').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card.restaurant-item');

  const likeRestoTitle = await I.grabTextFrom('h1.card-title');
  assert.strictEqual(firstRestoTitle, likeRestoTitle);

  // unlike resto
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('favorite-message');

  const FavoriteMessage = await I.grabTextFrom('p.fav-page-msg');
  assert.strictEqual(FavoriteMessage, messageText);
});