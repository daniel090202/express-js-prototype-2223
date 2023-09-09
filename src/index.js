const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');

// Using dotenv library to get the environment variables.
require('dotenv').config();

const routes = require('./routes/routes');
const db = require('./config/db');

const sortMiddleware = require('./app/middleware/Sort.Middleware');

//
const app = express();

// Define the hostname and port to run your website
const port = process.env.PORT;
const hostName = process.env.HOST_NAME;

// Configure static files (public) - users can access from browser.
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Because FORM does not support
// any other methods except GET/POST
// => Use this to override the method.
app.use(methodOverride('_method'));

// Customize middleware.
// Apply middleware to all path of project.
app.use(sortMiddleware);

// Connect database.
db.connect();

// HTTP Logger
//app.use(morgan('combined'));

// Indicate for express that we use a template engine.
// Template Engine is used to render UI.
app.engine(
    // We use a template engine called Handlebars.
    'handlebars',
    // Helper functions used to handle logics on views.
    // Note: Do not handle logics (calculations, if...else , etc) on views.
    handlebars.engine({
        extname: '.handlebars',
        helpers: require('./helpers/handlebars'),
    }),
);

// Define the location of the views we use for this project.
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/resources', 'views'));

// Define the routes of our website.
routes(app);

app.listen(port, hostName, () => {
    console.log(`Listening on port at http://${hostName}:${port}`);
});
