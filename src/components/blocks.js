export default class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml() {
    // делается для того, чтобы в каждом классе обязательно реализовали этот метод
    throw new Error('Метод toHtml должен быть реализован!');
  }
}
