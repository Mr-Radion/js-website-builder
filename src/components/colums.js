import Block from './blocks';
import { row, col, css } from '../utils';

export class ColumsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    // .map(col) - идентично .map(item => col(item))
    let html = this.value.map(col).join('');
    return row(html, css(this.options.styles));
  }
}
