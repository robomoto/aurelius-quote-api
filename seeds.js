

const Quote = require('./models/quotes');
const bookOne  = require('./meditations/book1');
const bookTwo = require('./meditations/book2');
const bookThree = require('./meditations/book3');
const bookFour = require('./meditations/book4');
const bookFive = require('./meditations/book5');
const bookSix = require('./meditations/book6.js');
const bookSeven = require('./meditations/book7');
const bookEight = require('./meditations/book8');
const bookNine = require('./meditations/book9');
const bookTen = require('./meditations/book10');
const bookEleven = require('./meditations/book11');
const bookTwelve = require('./meditations/book12');
const seedQuotes = [];

const dbUrl = 'mongodb://localhost/quote_api';

const mongoose = require('mongoose');
// mongoose.set('debug', true);
mongoose.connect(dbUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true
})
.then(() => {
    console.log("Mongo Connection Open");
})
.catch( err =>{
    console.log("Mongo Connection Error: " + err);
})

console.log(bookOne);

for(quote of bookOne.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 1",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookTwo.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 2",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookThree.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 3",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookFour.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 4",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookFive.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 5",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookSix.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 6",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookSeven.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 7",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookEight.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 8",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookNine.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 9",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookTen.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 10",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookEleven.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 11",
language: "english",
original_language: "greek",
translator: "George Long"}) }

for(quote of bookTwelve.book) { seedQuotes.push({
    quotation : quote,
    author: "Marcus Aurelius",
    reference: "Meditations: Book 12",
language: "english",
original_language: "greek",
translator: "George Long"}) }



Quote.insertMany(seedQuotes)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
