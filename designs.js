// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const inputHeightBtn = document.getElementById('inputHeight');
const inputWidthBtn  = document.getElementById('inputWidth');
//select submit btn
const sizePicker = document.getElementById('sizePicker');
// select pixelCanvas
const pixelCanvas = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit' , (event)=>{
  makeGrid(event);
});

function makeGrid(event) {
  event.preventDefault();
  pixelCanvas.innerHTML = "";
  // geting values form user input
  let width = inputWidthBtn.value;
  let height = inputHeightBtn.value;
  // for testing
  console.log(`
  testing meta :
  -------------------
  width is ${width}
  -------------------
  height is ${height}
  -------------------
  `);
  // grid making loop
  let child = "";
  for (let row = 0; row < width; row++){
     child += '<td></td>';
  }
  for (let col = 0;col < height; col++){
       pixelCanvas.innerHTML += '<tr>'+child+'</tr>';
  }

}
// add addEventListener to the tabel
pixelCanvas.addEventListener('click', (event)=>{
    let selectedColor = colorPicker.value;
    let target = event.target;
    console.log(`
         ${target}
      `);
    if (target.tagName === 'TABLE'){
      console.log('na this is a tabel!!');
    }else if(target.tagName === 'TR'){
          console.log('na this is a tr!!');
    }else{
      {
        console.log('selectedColor is '+selectedColor)
        target.style.backgroundColor = selectedColor;
      }
    }
});
