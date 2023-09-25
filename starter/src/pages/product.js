// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async function () {
  const urlID = window.location.search;
  const resp = await fetch(`${singleProductUrl}${urlID}`);
  if (resp.status >= 200 && resp.status <= 299) {
    const product = await resp.json();
    // grab data
    const { id, fields } = product;
    productID = id;
    const { name, company, price, colors, description } = fields;
    const image = fields.image[0].thumbnails.large.url;
    document.title = `${name.toUpperCase()} comfy`;
    pageTitleDOM.textContent = `home / ${name}`;
    imgDOM.src = image;
    titleDOM.textContent = ` ${name}`;
    companyDOM.textContent = ` by ${company}`;
    priceDOM.textContent = formatPrice(price);
    descDOM.textContent = `${description}`;
    colors.forEach((color) => {
      const span = document.createElement('span');
      span.classList.add('product-color');
      span.style.backgroundColor = `${color}`;
      colorsDOM.appendChild(span);
    });
  } else {
    console.log(resp.status, resp.statusText);
    centerDOM.innerHTML = ` <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class = "btn">back home</a>
    </div>`;
  }
  loading.style.display = 'none';
  // console.log(productID);
});
cartBtn.addEventListener('click', () => {
  addToCart(productID);
});
