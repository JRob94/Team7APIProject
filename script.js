// AXIOS ASYNC/AWAIT function for Ron Swanson API


// This function displays a random quote from the Ron Swanson API at the end of the bio section

const bio = document.querySelector(`#aboutMe`);
const myWords = document.querySelector(`#myWords`);
const cardOne = document.querySelector(`#card-one`);
const cardTwo = document.querySelector(`#card-two`);
const cardThree = document.querySelector(`#card-three`);


// Function that provided a random quote in the About Me section

getRonQuote = async () => {
    try {
        // Making the request to the server using Axios
        const ronQuote = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`);
        console.log(`Acquiring Ron Swanson quote successful!`);
        console.log(ronQuote.data);
        const bioQuote = document.createElement(`q`);
        bioQuote.classList.add(`aboutMeQuote`);
        bioQuote.innerText = ronQuote.data;
        bio.append(bioQuote);
        // Catching error incase of a failed request
    } catch (err) {
        console.log(`Error acquiring Ron Swanson quote. Try again later!`);
        console.log(err);
    }
}
getRonQuote();


// Function to display multiple quotes in To Know Me section

myWordsQuotes = async () => {
    try {
        const words = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/2`);
        console.log(`Acquiring quote successful`);
        console.log(words.data);
        const numOfQuotes = words.data;
        // Creating a variable that will be used to display a number next to each quote on the webpage 
        let number = 1;
        // Using a for of loop to loop through the array of objects. Also, the value for q each time the code in the loop runs will be an object in the numOfQuotes array
        for (q of numOfQuotes) {
            console.log(q);
            const knowMyWords = document.createElement(`blockquote`)
            knowMyWords.innerText = `${number}. ${q}`;
            knowMyWords.classList.add(`aboutMeQuote`);
            myWords.append(knowMyWords);
            number++;
        }
    } catch (err) {
        console.log(`Failure to acquire quote`);
        console.log(err);
    }
}
myWordsQuotes();


// Functions to display quotes on the three cards. Also, quotes should be related to subject of card.
// Using the "search" + "keyword" endpoint to find a quote that is related to the keyword

getCardQuoteOne = async () => {
    try {
        const cardOneQ = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/eggs`);
        console.log(`Acquiring quote successful`);
        console.log(cardOneQ.data);
        const recipe = document.createElement(`q`);
        recipe.classList.add(`quotes`);
        recipe.innerText = cardOneQ.data;
        cardOne.append(recipe);

    } catch (err) {
        console.log(`Error acquiring quote`);
        console.log(err);
    }
}
getCardQuoteOne();


getCardQuoteTwo = async () => {
    try {
        const cardTwoQ = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/wood`);
        console.log(`Acquiring quote successful`);
        console.log(cardTwoQ.data);
        const wood = document.createElement(`q`);
        wood.classList.add(`quotes`);
        wood.innerText = cardTwoQ.data;
        cardTwo.append(wood);
    } catch (err) {
        console.log(`Error acquiring quote`);
        console.log(err);
    }
}
getCardQuoteTwo();


getCardQuoteThree = async () => {
    try {
        const cardThreeQ = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/whiskey`);
        console.log(`Acquiring quote was successful`);
        console.log(cardThreeQ.data);
        const whiskey = document.createElement(`q`);
        whiskey.classList.add(`quotes`);
        whiskey.innerText = cardThreeQ.data;
        cardThree.append(whiskey);
    } catch (err) {
        console.log(`Error acquiring quote`);
        console.log(err);
    }
}
getCardQuoteThree();

// RECIPE CARD SECTION FUNCTION
const card = document.querySelector('.card__inner');

card.addEventListener ('click', function (){
    card.classList.toggle('is-flipped');
});