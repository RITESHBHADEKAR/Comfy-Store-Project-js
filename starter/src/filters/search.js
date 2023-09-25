import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupSearch = (store) => {
  const form = getElement('.input-form ');
  const input = getElement('.search-input ');

  form.addEventListener('keyup', () => {
    const value = input.value;
    if (value) {
      const filtered = store.filter((item) => {
        let { name } = item;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return item;
        }
      });
      display(filtered, getElement('.products-container'),true);
      if (filtered.length < 1) {
        const container = getElement('.products-container');
        container.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
      }
    } else {
      display(store, getElement('.products-container'),true);
    }
  });
};

export default setupSearch;
