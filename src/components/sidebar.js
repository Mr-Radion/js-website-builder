import { block } from '../utils';
import { TextBlock, TitleBlock, ColumsBlock, ImageBlock } from '.';

export class SideBar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el, addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [block('text'), block('title'), block('colums'), block('image')].join('');
  }

  add(e) {
    e.preventDefault();

    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;

    let newBlock;

    switch (type) {
      case 'text':
        newBlock = new TextBlock(value, { styles });
        break;
      case 'title':
        newBlock = new TitleBlock(value, { styles });
        break;
      case 'colums':
        newBlock = new ColumsBlock(value, { styles });
        break;
      case 'image':
        newBlock = new ImageBlock(value, { styles });
        break;

      default:
        break;
    }

    // debugger;
    this.update(newBlock);

    // чистим форму после нажатия
    e.target.value.value = '';
    e.target.styles.value = '';
  }
}
