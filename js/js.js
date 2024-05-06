const button1 = document.querySelector(".button1");
button1.addEventListener('click', changeText);


const button2 = document.getElementById("button2");
button2.addEventListener('click', changeText);

const p = document.querySelector("p");

function changeText(){
    // alert('test successful!');
    const head = prompt('change the volume (numbers only)');
    p.textContent = head; 
}