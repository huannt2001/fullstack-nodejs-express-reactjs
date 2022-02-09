import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about-me', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);    // create

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD); // read
    router.get('/edit-crud', homeController.getEditCRUD);

    router.post('/put-crud', homeController.putCRUD);   // edit
    router.get('/delete-crud', homeController.deleteCRUD); // Delete

    router.post('/api/login', userController.handleLogin);
    router.get('/hoidanit', (req, res) => {
        return res.send('Hello world nodejs with hoi dan IT')
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;