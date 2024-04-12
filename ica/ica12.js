// const btn = document.querySelector("#js-new-quote");
// btn.addEventListener('click', getQuote);

// const answerBtn = document.querySelector("#js-tweet");
// answerBtn.addEventListener('click', getAnswer);

// const answerText = document.querySelector("#js-answer-text");

// let answer = '';


// const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

// async function getQuote(){
//     // console.log("Test")
//     try{
//         const response = await fetch(endpoint);
//         if(!response.ok){
//             throw Error(response.statusText)
//         }

//         const json = await response.json();
//         console.log(json['question']);
//         displayQuote(json['question']);
//         console.log(json['answer']);
//         answer = json['answer'];
//         answerText.textContent =Z
//     } catch (err){
//         console.log(err);
//         alert('Failed to fetch new quote');
//     }
// }

// function displayQuote(quote){
//     const quoteText = document.querySelector("#js-quote-text");
//     quoteText.textContent = quote;
// }

// function getAnswer(){
//     console.log(212);
//     answerText.textContent = answer; 
// }

// getQuote();

const btn = document.querySelector("#js-new-quote");
btn.addEventListener('click', getFact);

// const answerBtn = document.querySelector("#js-tweet");
// answerBtn.addEventListener('click', getAnswer);

// const answerText = document.querySelector("#js-answer-text");

// let answer = '';


const endpoint = "https://cat-fact.herokuapp.com/facts/random";

async function getFact(){
    // console.log("Test")
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText)
        }

        const json = await response.json();
        // console.log(json['fact']);
        // displayFact(json['fact']);
        // console.log(json['answer']);
        // answer = json['answer'];
        // answerText.textContent = ''
    } catch (err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayFact(fact){
    const factText = document.querySelector("#js-quote-text");
    factText.textContent = fact;
}

getFact();