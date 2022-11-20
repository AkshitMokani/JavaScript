/*const a = 10;
const b = 20;

if (a > b) {
    console.log("A is greater");
}
else{
    console.log("b is greater");
}


//JSON - Javascript Object Notation

//key - value pair
const details = {
    name: "Akshit",
    Animes_liked: ["a1","a2","a3","hi"],
    school: {
        name:"anpadh",
        address:"abc",
    },
};
console.log(details.Animes_liked[2]);
*/

const Quote = require('inspirational-quotes');
var cowsay = require("cowsay");

//console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: "cow" })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote
console.log(cowsay.say(Quote.getQuote({ author: "cow" })));






















