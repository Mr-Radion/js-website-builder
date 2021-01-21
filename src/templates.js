function title(block) {
  let html = '';
  return (html = `<div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>`);
}

function text(block) {
  let html = '';
  return (html = `<div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>`);
}

function colums(block) {
  let html = block.value.map((value) => `<div class="col-sm"><p>${value}</p></div>`);
  return html.join('');
}

function image(block) {
  let html = '';
  return html = `<img src="${block.value}" alt="#">`;
}

export { title, text, colums, image };
