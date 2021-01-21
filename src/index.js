import './classes/main.css';
import { model } from './model';
import { title, text, colums, image } from './templates';

const $site = document.querySelector('.content');

model.forEach((block) => {
  let html = '';
  if (block.type === 'title') {
    html = title(block);
  } else if (block.type === 'text') {
    html = text(block);
  } else if (block.type === 'colums') {
    html = colums(block);
  } else if (block.type === 'images') {
    html = image(block);
  }

  $site.insertAdjacentHTML('beforeend', html);
});
