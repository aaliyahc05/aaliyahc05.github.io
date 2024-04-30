const button = document.querySelector("#wrong-button");
const button2 = document.querySelector("#wrong-button1")
const button3 = document.querySelector("#wrong-button2");
const rbutton = document.querySelector("#right-button");


rbutton.addEventListener('click', changeVolume);
function changeVolume() {
   
  }

button.addEventListener('click', myFunc);

function changeColor(color) {
    document.body.style.background = color;
}

function myFunc() {
    changeColor('pink');
}