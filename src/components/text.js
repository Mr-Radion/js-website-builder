import Block from './blocks'
import { row, col, css } from '../utils';

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHtml() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles));
  }
}
