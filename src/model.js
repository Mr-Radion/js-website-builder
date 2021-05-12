import image from './assets/unnamed.jpg';
import { TitleBlock, ColumsBlock, TextBlock, ImageBlock } from './components';

const text = 'Ex culpa occaecat dolore minim commodo eiusmod.';
const imgAlt = 'Тут надпись для картинки';

export const model = [
  new TitleBlock('Конструктор сайтов на чистом js', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0009, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),
  new ColumsBlock(['11111111', '22222222', '33333333'], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold',
    },
  }),
  new TextBlock(text, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imgStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: imgAlt,
  }),
  new ImageBlock(image, {
    background: 'linear-gradient(to left, #f2994a, #f2c94c)',
    padding: '1rem',
    'font-weight': 'bold',
  }),
];
