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

// function colums(block) {
//   let html = '';
//   return (html = `
//       <div class="row">
//       <div class="col-sm">
//         <p>Magna incididunt mollit voluptate sunt culpa.</p>
//       </div>
//       <div class="col-sm">
//         <p>Magna incididunt mollit voluptate sunt culpa.</p>
//       </div>
//       <div class="col-sm">
//         <p>Magna incididunt mollit voluptate sunt culpa.</p>
//       </div>
//     </div>
//   `);
// }

export { title, text };
