const quotes = [
{
    quote: "Everyday is for you",
    author:"Park",
},
{
    quote: "Trust yourself",
    author:"Park",
},
{
    quote: "You decide your life",
    author:"Park",

},
{
    quote: "Walk a lot",
    author:"Park",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
/*
Math.random();
Math.round();
Math.Ceil(); 올림
Math.floor();내림

Math.floor(Math.random());
[1,2,3,4].length ->4

*/
