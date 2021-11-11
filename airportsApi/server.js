const { urlencoded } = require('express');
const express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser');

const app = express();
cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended:true }));

const logger = (req, res, next) => {
    console.log('URL: ', req.originalUrl);
    next();
}

app.set('view engine', 'ejs');
app.use(logger);

const airportsRoutes = require('./routes/airports');
const productsRoutes = require('./routes/products');

app.use('/airports', airportsRoutes)
app.use('/products', productsRoutes)

app.listen(9000);