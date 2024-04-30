const button = document.querySelector("#wrong-button");
const button2 = document.querySelector("#wrong-button1")
const button3 = document.querySelector("#wrong-button2");
const rbutton = document.querySelector("#right-button");


rbutton.addEventListener('click', volumeUp);
function volumeUp() {
    if (currentVolume < 90) {
        currentVolume = currentVolume + 10;
        currentVolume = (parseFloat(currentVolume) + 0.1).toFixed(1); 
      sound.volume = currentVolume / 100;
      var $toastContent = $('<span>Volume '+ currentVolume+  ' %' + '</span>' );
      Materialize.toast($toastContent, 2000);
    }
  }

button.addEventListener('click', myFunc);
let result = document.getElementById('wrong');

function changeColor(color) {
    document.body.style.background = color;
}

function myFunc() {
    changeColor('pink');
}