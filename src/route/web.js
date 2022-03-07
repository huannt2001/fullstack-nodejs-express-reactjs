import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";

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
    router.get('/api/get-all-users', userController.handleGetAllUsers)
    router.post('/api/create-new-user', userController.handleCreateNewUser)
    router.put('/api/edit-user', userController.handleEditUser)
    router.delete('/api/delete-user', userController.handleDeleteUser)

    router.get('/api/allcode', userController.getAllCode)
    router.get('/api/top-doctor-home', doctorController.getDoctorHome); // api lấy thông tin bác sĩ giỏi
    router.get('/api/get-all-doctor', doctorController.getAllDoctors); // api lấy tất cả thông tin bác sĩ
    router.post('/api/save-info-doctor', doctorController.postInfoDoctor); // api lưu info thông tin bác sĩ
    router.get('/api/get-detail-doctor-by-id', doctorController.getDetailDoctorById); // api lấy detail info bác sĩ


    return app.use("/", router);
}

module.exports = initWebRoutes;