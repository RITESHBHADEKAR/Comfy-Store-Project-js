import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  // setup filter
  let maxprice = store.map((item) => item.price);
  maxprice = Math.max(...maxprice);
  maxprice = Math.ceil(maxprice / 100);

  priceInput.value = maxprice;
  priceInput.max = maxprice;
  priceInput.min = 0;
  priceValue.textContent = `$${maxprice}`;

  priceInput.addEventListener('input', () => {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `$${value}`;
    let newStorePrice =  store.filter((item)=>item.price/100 <= value)
    display(newStorePrice, getElement('.products-container'),true)
    if(newStorePrice.length < 1 ){
        const products = getElement('.products-container')
        products.innerHTML = ` <h3 class="filter-error"> sorry , no products matched your search</h3>`
    }

  });
};

export default setupPrice;
