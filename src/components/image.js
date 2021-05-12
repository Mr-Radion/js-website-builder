import Block from './blocks';
import { row, col, css } from '../utils';

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    // сократили переменую imgStyles сохранив его данные в im
    const { imgStyles: im, alt = '', styles } = this.options;
    return row(`<img src="${this.value}" style="${css(im)}" alt="${alt}" />`, css(styles));
  }
}
