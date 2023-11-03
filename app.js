const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/media', express.static(__dirname + '/public/media'));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Import and use the routes from the controllers
const indexRoutes = require('./controller/index');
app.use('/', indexRoutes);

app.listen(port, () => console.info(`Listening on port ${port}`));









