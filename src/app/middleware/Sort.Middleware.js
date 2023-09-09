module.exports = function sortMiddleware(request, response, next) {
    response.locals._sort = {
        enabled: false,
        column: 'default',
        type: 'default',
    };

    if (request.query.hasOwnProperty('_sort')) {
        Object.assign(response.locals._sort, {
            enabled: true,
            column: request.query.column,
            type: request.query.type,
        });
    }

    next();
};
