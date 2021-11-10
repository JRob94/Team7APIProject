// AXIOS ASYNC/AWAIT function for Ron Swanson API


// This function displays a random quote from the Ron Swanson API at the end of the bio section

// const bio = document.querySelector(`#bio`);
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