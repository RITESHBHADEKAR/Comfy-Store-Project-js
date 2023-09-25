import { getElement } from '../utils.js';

const cartoverlay = getElement('.cart-overlay');
const closebtn = getElement('.cart-close');
const cartTogggle = getElement('.toggle-cart');

cartTogggle.addEventListener('click', () => {
  cartoverlay.classList.add('show');
});
closebtn.addEventListener('click', () => {
  cartoverlay.classList.remove('show');
});




export const openCart = (id) => {
      cartoverlay.classList.add('show');
};
