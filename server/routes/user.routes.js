const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config')

module.exports = (app) => {
    console.log("in the routes");
    app.get("/api/users", authenticate, UserController.index);
    app.post("/api/user/register", UserController.register);
    app.get("/api/user/:id", authenticate, UserController.show);
    app.put("/api/user/update/:id", authenticate, UserController.update);
    app.delete("/api/user/destroy/:id", authenticate, UserController.destroy);
}