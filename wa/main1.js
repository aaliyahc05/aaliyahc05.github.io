const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pics1.jpeg', `pics2.jpeg`, `pics3.jpeg`, `pics4.jpeg`, `pics6.jpeg`];
const alts = {
  'pics1.jpeg' : 'nelly',
  'pics2.jpeg' : 'sky',
  'pics3.jpeg' : 'farrand',
  'pics6.jpeg' : 'friends',
  'pics4.jpeg' : 'mountain'
}

/* Looping through images */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `img/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
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