
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const api_URL = "https://api.quotable.io/random";

async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(api_URL);
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---- by " + author.innerHTML, "Tweet window", "width=600,height=300")
}
