import Block from './blocks';
import { row, col, css } from '../utils';

export class TitleBlock extends Block {
  constructor(value, options) {
    // в super() вызов инициализации конструктора Block
    super(value, options);
  }

  toHtml() {
    const { tag = 'h1', styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
