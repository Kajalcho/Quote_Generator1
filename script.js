const quotes = [
    ["Life is an outward projection of one's perceived self value.","― Kierra C.T. Banks"],
    ["If you don't have haters in your way of success, It means you are on wrong way!","― Hassanwainx"],
    ["Life is a matter of choosing what is good for you.","― Napz Cherub Pellazo"],
    ["The biggest illusion of life is comfort","― Dax Bamania"],
    ["The success of your life is in direct proportion to the dedication you put into it.","― Shiva Negi"]
    ["Old goodbyes can lead to new hellos.","― Kierra C.T. Banks"]
];

function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomNumber][0];
    let authorname=document.getElementById("author");
    authorname.textContent=quotes[randomNumber][1];
}

