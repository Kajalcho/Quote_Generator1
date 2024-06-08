Random Quote Generator
@Created By: 
Name: kajal kumari
Email: kajal143698@gmail.com
🚀 Overview
This project is a Random Quote Generator web application. It displays a random quote each time the user clicks the "Generate Quote" button. The application is built using HTML, CSS, and JavaScript.

📁 Project Structure
index.html: The main HTML file that structures the webpage.
style.css: The CSS file that styles the webpage.
script.js: The JavaScript file that adds functionality to the webpage.
📄 HTML Structure
The index.html file provides the basic structure of the web application. It includes a container for the quotes and a button to generate new quotes.

Key Sections
Container: Holds the quote, author, and button elements.

<div class="container">
    <div id="quote-container">
        <p id="quote">Click the button to get a random quote!</p>
        <p id="author"></p>
        <button onclick="generateQuote()">Generate Quote</button>
    </div>
</div>
🎨 CSS Styling
The style.css file contains styles to make the application visually appealing.

Basic Styles: Set up the basic styles for the entire document.

body {
    font-family: 'Arial', sans-serif;
    background-image: url("image.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-right: 40%;
}

.container {
    text-align: center;
}
Quote Container: Styles for the quote display area.

#quote-container {
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 2rem;
    text-align: center;    
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 2px solid rgb(255, 161, 161);
    border-radius: 8px;
    box-shadow: 2px 4px 5px 1px rgb(218, 218, 218);
    margin-left: 300px;
    background-color: rgba(63, 74, 75, 0.678);
}

#author {
    color: #ffd1d1;
    text-align: right;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-right: 40px;
    text-shadow: 2px 2px 2px rgb(0, 0, 0);
}
Button: Styles for the button.

button {
    padding: 10px 20px;
    font-size: 21px;
    font-weight: bolder;
    cursor: pointer;
    background-color: #0227a1;
    color: #c8d4da;
    border: none;
    border-radius: 9px;
    margin-top: 10px;
}

button:hover {
    background-color: rgb(129, 1, 189);
}
🚀 JavaScript Functionality
The script.js file provides the functionality for generating new quotes.

Quote Data: An array of quotes and their respective authors.

const quotes = [
    ["Life is an outward projection of one's perceived self value.", "― Kierra C.T. Banks"],
    ["If you don't have haters in your way of success, It means you are on wrong way!", "― Hassanwainx"],
    ["Life is a matter of choosing what is good for you.", "― Napz Cherub Pellazo"],
    ["The biggest illusion of life is comfort", "― Dax Bamania"],
    ["The success of your life is in direct proportion to the dedication you put into it.", "― Shiva Negi"],
    ["Old goodbyes can lead to new hellos.", "― Kierra C.T. Banks"]
];
Generate Quote Function: Function to display a random quote from the array.

function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = quotes[randomNumber][0];
    let authorname = document.getElementById("author");
    authorname.textContent = quotes[randomNumber][1];
}
🎨 Additional Styles
The CSS file also contains additional styles for a navigation header and a form container, though these elements are not utilized in the basic quote generator functionality.

.header {
  position: fixed;
  height: 80px;
  width: 100%;
  background: rgb(2, 164, 170);
  z-index: 100;
  padding: 0 20px;
}

.nav {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.nav_logo {
  font-size: 25px;
}

.nav_link:hover {
  color: beige;
}

.button {
  padding: 6px 24px;
  border: 2px solid #fff;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
}

.button:active {
  transform: scale(0.98);
}

.home {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url("image.png");
  background-size: cover;
  background-position: center;
}

.home::before {
  content: '';
  height: 100%;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 255, 255, 0.363);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease-out;
}

.home.show:before {
  opacity: 1;
  pointer-events: auto;
}

.form_container {
  position: absolute;
  max-width: 320px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.2);
  z-index: 101;
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  transition: all 0.4s ease-out;
}

.home.show .form_container {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}

.input_box input:focus {
  border-color: blue;
}

.checkbox input {
  accent-color: blue;
}
Conclusion
This Random Quote Generator project provides a simple yet functional web application to display random quotes. It demonstrates the use of HTML for structure, CSS for styling, and JavaScript for interactivity. This project is an excellent example for beginners to understand how to build interactive web applications.