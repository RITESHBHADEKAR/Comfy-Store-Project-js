import { getElement } from './utils.js';

const toggleBtn = getElement('.toggle-nav');
const sidebaroverlay = getElement('.sidebar-overlay');
const closebtn = getElement('.sidebar-close');

toggleBtn.addEventListener('click', () => {
  sidebaroverlay.classList.add('show');
});
closebtn.addEventListener('click', () => {
  sidebaroverlay.classList.remove('show');
});
