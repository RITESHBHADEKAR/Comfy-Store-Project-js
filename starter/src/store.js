import { getStorageItem, setStorageItem } from './utils.js';
// let store = [];
let store = getStorageItem('store')



// setupstore
const setupStore = (products) => {
  store = products.map((item) => {
    const {id,fields: { featured, name, price, image: img, colors, company },
    } = item;
    const image = img[0].thumbnails.large.url;
    return { id, featured, colors, company, price, name, image };
  });
  setStorageItem('store', store)
  
};
// console.log(store);
const findProduct = (id) => {
  let product = store.find((product)=>product.id === id)
  return product
};
export { store, setupStore, findProduct };
