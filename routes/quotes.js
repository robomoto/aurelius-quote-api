const express = require('express');
const router = express.Router();
const { Quote } = require('../models');
const wrapAsync = require('../utils/wrapAsync');
const { getQuotes, createQuote, getRandQuote, getQuote, updateQuote, deleteQuote } = require('../controllers/quotes')

router.route('/')
    .get(wrapAsync(getQuotes))
    .post(wrapAsync(createQuote))

router.get('/rand',(wrapAsync(getRandQuote)))

router.route('/:quoteId')
    .get(wrapAsync(getQuote))
    .put(wrapAsync(updateQuote))
    .delete(wrapAsync(deleteQuote))

module.exports = router;