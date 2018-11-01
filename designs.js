// Select color & size input
let color = document.querySelector('#colorPicker');
let table = document.querySelector('#pixelCanvas');
let sizePicker = document.querySelector('#sizePicker');

let N = document.querySelector('#inputHeight').value;
let M = document.querySelector('#inputWidth').value;

sizePicker.addEventListener('submit', (event) => {

  event.preventDefault();

  let N = document.querySelector('#inputHeight').value;
  let M = document.querySelector('#inputWidth').value;
  if (table.firstElementChild) {
    table.firstElementChild.remove();
  }

  makeGrid(N, M);

});

// When size is submitted by the user, call makeGrid()
function makeGrid(N, M) {

  for (let row = 0; row < N; row++) {
    let newRow = table.insertRow();
    for (let cell = 0; cell < M; cell++) {
      let newCell = newRow.insertCell();
      newCell.addEventListener('click', (e) => {
        newCell.style.backgroundColor = color.value;
      });
    }
  }
}
