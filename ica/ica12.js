const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getQuote);

const answerBtn = document.querySelector("#js-tweet");
answerBtn.addEventListener('click', shareQuote);

const answerText = document.querySelector("#js-answer-text");

let answer = '';


// const endpoint = "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf";

async function getQuote(){
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
      headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

const twitterURL = "https://twitter.com/intent/tweet/";
const linkTarget = '_top';
const windowOptions = 'menubar=no,status=no,height=750,width=500';

function extractQuote(){
console.log(document.querySelector('#js-quote-text').textContent);
return document.querySelector('#js-quote-text').textContent;

}

function extractAuthor(){
console.log(document.querySelector('#js-quote-author').textContent);
return document.querySelector('#js-quote-author').textContent;
}

function openTwitterWindow() {
const quote = extractQuote();
const author = extractAuthor();
const twitterQuery = `text=${encodeURIComponent(`"${quote}" - ${author}`)}&url=`;
return window.open(`${twitterURL}?${twitterQuery}&`, linkTarget, windowOptions);
}

function shareQuote() {
const twitterButton = document.querySelector('#js-tweet-button');
twitterButton.addEventListener('click', () => openTwitterWindow());
}

shareQuote();

getQuote();


