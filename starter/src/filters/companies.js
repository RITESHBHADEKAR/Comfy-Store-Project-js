import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
  const company = getElement('.companies');
  const companies = ['all', ...new Set(store.map((item) => item.company))]
    .map((item) => {
      return `<button class="company-btn">${item}</button>
`;
    })
    .join(' ');
  company.innerHTML = companies;
  company.addEventListener('click', (e) => {
    const element = e.target;
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store];
      } else {
        newStore = store.filter((item)=>item.company === element.textContent)
      }
      display(newStore, getElement('.products-container'),true);
    }
    // console.log(element);
  });
};

export default setupCompanies;
