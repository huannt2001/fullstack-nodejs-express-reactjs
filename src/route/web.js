import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about-me', homeController.getAboutPage);

    router.get('/hoidanit', (req, res) => {
        return res.send('Hello world nodejs with hoi dan IT')
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;