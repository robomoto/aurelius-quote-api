const express = require('express');
const router = express.Router();
const { Quote } = require('../models');
const wrapAsync = require('../utils/wrapAsync');
const { getQuotes, createQuote, getRandQuote, getQuote, updateQuote, deleteQuote } = require('../controllers/quotes')

router.route('/')
    //.get(wrapAsync(getQuotes))        //INDEX
    .get(wrapAsync(getRandQuote))       //RANDOM
    // .post(wrapAsync(createQuote))    //CREATE

router.route('/:quoteId')
    .get(wrapAsync(getQuote))           //SHOW
    // .put(wrapAsync(updateQuote))     //UPDATE
    // .delete(wrapAsync(deleteQuote))  //DELETE

module.exports = router;