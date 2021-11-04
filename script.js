// AXIOS ASYNC/AWAIT function for Ron Swanson API
// Just drawing them up for later use when we decide what we are doing with out webpage
// Just shows in the Terminal/console for now. Waiting for our plan for the page to add/make changes to function
getRonQuote = async () => {
    try {
        // Making the request to the server using Axios
        const ronQuote = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes`);
        console.log(`Acquiring Ron Swanson quote successful!`);
        console.log(ronQuote);
        console.log(ronQuote.data);
        // Catching error incase of a failed request
    } catch (err) {
        console.log(`Error acquiring Ron Swanson quote. Try again later!`);
        console.log(err);
    }
}
getRonQuote();