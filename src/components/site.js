export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  render(model) {
    // чистим шаблон, чтобы не дублировался уже созданный в модели объект со стилями
    this.$el.innerHTML = '';
    model.forEach((block) => {
      this.$el.insertAdjacentHTML('beforeend', block.toHtml());
    });
  }
}
