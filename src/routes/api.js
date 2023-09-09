const siteRouter = require('./site.route');

function api(app) {
    app.use('/', siteRouter);
}

module.exports = routes;
