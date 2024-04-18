document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#js-new-quote");
  const button2 = document.querySelector("#js-new-author")
  const quote = document.querySelector("#js-quote-text");
  const cite = document.querySelector("#js-quote-author");

  async function getQuote() {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
          quote.textContent = data.content;
      }else{
          quote.textContent = "failed to fetch quote :(";
          console.log(data);
      }
  }
  button.addEventListener("click", getQuote);
  getQuote();


async function getAuthor() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
      cite.textContent = data.author;
  }else{
      cite.textContent = "failed to fetch author :(";
      console.log(data);
  }
}
button2.addEventListener("click", getAuthor);
getAuthor();

});


function extractQuote(){
  console.log(document.querySelector('#js-quote-text').textContent);
  return document.querySelector('#js-quote-text').textContent;
  
}

function extractAuthor(){
  console.log(document.querySelector('#js-quote-author').textContent);
  return document.querySelector('#js-quote-author').textContent;
}

// function printAuthor() {
//   const author = extractAuthor();
//   const twitterButton = document.querySelector('#js-quote-author');
//   twitterButton.addEventListener('click', () => openTwitterWindow());
// }

// function shareQuote() {
//   const twitterButton = document.querySelector('#js-quote-author');
//   twitterButton.addEventListener('click', () => openTwitterWindow());
// }

// shareQuote();


