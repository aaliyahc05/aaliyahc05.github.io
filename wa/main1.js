const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const alts =["nelly","jelly","sky","serena","hailey","bella"];

/* Looping through images */
    function pictureLoop(){
        var i; 
        for(i = 0; i < 6; i++){
            var newImage = document.createElement('img');
            newImage.setAttribute('src',"img" + [i+1] + ".JPG/jpeg");
            newImage.setAttribute('alt', alts[i]);
            thumbBar.appendChild(newImage);
        }
    }

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});