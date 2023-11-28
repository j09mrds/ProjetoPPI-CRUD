const { Router } = require('express');
const auth = require('../middlewares/auth.middleware');
const routes = new Router();

const userController = require('../controllers/user.controller');
const contactController = require('../controllers/contact.controller');
const authController = require('../controllers/auth.controller');

routes.post("/auth", authController.login);

routes.use(auth);
routes.get("/user", userController.index);
routes.post("/user", userController.store);

routes.get("/user/:id", userController.show);
routes.put("/user/:id", userController.update);
routes.delete("/user/:id", userController.destroy);



routes.get("/contacts", contactController.index);
routes.post("/contacts", contactController.store);

routes.get("/contacts/:id", contactController.show);
routes.put("/contacts/:id", contactController.update);
routes.delete("/contacts/:id", contactController.destroy);

module.exports = routes;
