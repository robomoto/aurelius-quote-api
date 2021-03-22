if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const quoteRoutes = require('./routes/quotes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/quote', quoteRoutes);

app.listen(port, (req, res) =>{
    console.log(`App listening on port ${port}`)
})