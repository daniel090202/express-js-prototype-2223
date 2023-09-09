class SiteController {
    // [GET] --> "/home"
    home(request, response, next) {
        response.json({ message: 'Hello World!!' });
    }
}

module.exports = new SiteController();
