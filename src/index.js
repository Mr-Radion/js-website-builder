import './classes/main.css';
import { model } from './model';
import { title, text } from './templates';

const $site = document.querySelector('.content');

model.forEach((block) => {
  let html = '';
  if (block.type === 'title') {
    title(block);
  } else if (block.type === 'text') {
    text(block);
  } else if (block.type === 'colums') {
  }

  $site.insertAdjacentHTML('beforeend', html);
});
