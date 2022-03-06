
const userController = require("../controller/user.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

app.get("/", UserController.homepage);
app.post("/addUser", userController.newUser);
app.get("/getUser", userController.getUser);
app.get("/getUser/:UserID", userController.getUser);
app.post("/updateUser", userController.updateUser);
app.post("/updateUser/:UserID", userController.updateUser);
app.delete("/deleteUser", userController.deleteUser);
app.delete("/deleteUser/:UserID", userController.deleteUser);


}