
const { Quote } = require('../models');

exports.getQuotes = async (req, res) => {
    const quotes = await Quote.find()
    return res.json(quotes);
}

exports.createQuote = async (req, res) => {
    console.log(req.body);
    const newQuote = new Quote(req.body);  //not sanitizing or error checking
    await newQuote.save();
    return res.json(newQuote);
}

exports.getRandQuote = async (req, res) => {
    const quote = await Quote.aggregate([{$sample: { size: 1}}]); //using aggregate for random sample, returns array
    return res.json(quote[0]); 
}

exports.getQuote = async (req, res) => {
    const quote = await Quote.findById(req.params.quoteId);
    return res.json(quote);
}

exports.updateQuote = async (req, res) => {
    const quote = await Quote.findOneAndUpdate({_id: req.params.quoteId}, req.body, {new: true});
    return res.json(quote);
}

exports.deleteQuote = async (req, res) => {
    await Quote.deleteOne({_id: req.params.quoteId});
    return res.json("Item removed.");
}

module.exports = exports;