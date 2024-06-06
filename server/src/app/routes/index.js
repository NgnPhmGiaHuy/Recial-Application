const apiRoutes = require("./api");
const localRoutes = require("./local");

const routes = (app) => {
    apiRoutes.forEach((route) => {
        if (route.middleware) {
            app.use(`/api/v1${route.path}`, route.middleware, route.route);
        } else {
            app.use(`/api/v1${route.path}`, route.route);
        }
    })

    localRoutes.forEach((route) => {
        app.use(`/local/v1${route.path}`, route.route);
    })
};

module.exports = routes;