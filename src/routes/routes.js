const siteRouter = require('./site.route');
const postsRouter = require('./posts.route');

function routes(app) {
    //app.use('/posts', postsRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
