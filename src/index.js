import './styles/main.css';
import { model } from './model';
import { templates } from './templates';

const $site = document.querySelector('.content');

model.forEach((block) => {
  const html = templates[block.type];
  $site.insertAdjacentHTML('beforeend', html(block));
});
