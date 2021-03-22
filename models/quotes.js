const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quotation: {
        type: String,
        required: 'Silence is golden, but not very quotable.'
    },
    author: {
        type: String,
    },
    reference: {
        type: String
    }, 
    language: {
        type: String
    },
    original_language: {
        type: String
    },
    translator: {
        type: String
    },
    notes: {
        type: [String]
    }
})

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;