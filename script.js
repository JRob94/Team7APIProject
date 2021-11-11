// AXIOS ASYNC/AWAIT function for Ron Swanson API


// This function displays a random quote from the Ron Swanson API at the end of the bio section

const bio = document.querySelector(`#bio`);
const cardOne = document.querySelector(`#card-one`);
const cardTwo = document.querySelector(`#card-two`);
const cardThree = document.querySelector(`#card-three`);




// getRonQuote = async () => {
//     try {
//         // Making the request to the server using Axios
//         const ronQuote = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`);
//         console.log(`Acquiring Ron Swanson quote successful!`);
//         console.log(ronQuote.data);
//         const bioQuote = document.createElement(`q`);
//         bioQuote.innerText = ronQuote.data;
//         bio.append(bioQuote);
//         // Catching error incase of a failed request
//     } catch (err) {
//         console.log(`Error acquiring Ron Swanson quote. Try again later!`);
//         console.log(err);
//     }
// }
// getRonQuote();


// Functions to display quotes on the three cards. Also, quotes should be related to subject of card.
// Using the "search" + "keyword" endpoint to find a quote that is related to the keyword

// getCardQuoteOne = async () => {
//     try {
//         const cardOneQ = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`);
//         console.log(`Acquiring quote successful`);
//         console.log(cardOneQ.data);
//         const recipe = document.createElement(`q`);
//         recipe.innerText = cardOneQ.data;
//         cardOne.append(recipe);

//     } catch (err) {

//     }
// }
// getCardQuoteOne();


// getCardQuoteTwo = async () => {
//     try {
//         const cardTwoQ = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/wood`);
//         console.log(`Acquiring quote successful`);
//         console.log(cardTwoQ.data);
//         const wood = document.createElement(`q`);
//         wood.innerText = cardTwoQ.data;
//         cardTwo.append(wood);
//     } catch (err) {
//         console.log(`Error acquiring quote`);
//         console.log(err);
//     }
// }
// getCardQuoteTwo();


// getCardQuoteThree = async () => {
//     try {
//         const cardThreeQ = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/whiskey`);
//         console.log(`Acquiring quote was successful`);
//         console.log(cardThreeQ.data);
//         const whiskey = document.createElement(`q`);
//         whiskey.innerText = cardThreeQ.data;
//         cardThree.append(whiskey);
//     } catch (err) {
//         console.log(`Error acquiring quote`);
//         console.log(err);
//     }
// }
// getCardQuoteThree();