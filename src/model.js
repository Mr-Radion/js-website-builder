import image from './assets/unnamed.jpg';

const text = 'Ex culpa occaecat dolore minim commodo eiusmod.';

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на чистом js',
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0009, #493240)',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem',
      },
    },
  },
  { type: 'colums', value: ['11111111', '22222222', '33333333'] },
  { type: 'image', value: image },
  { type: 'text', value: text },
];
