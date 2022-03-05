
const todoController = require("../controller/todo.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

app.get("/", todoController.homepage);
app.post("/addTODO", todoController.newTODO);
app.get("/getTODO", todoController.getTODO);
app.get("/getTODO/:todoID", todoController.getTODO);
app.post("/updateTODO", todoController.updateTODO);
app.post("/updateTODO/:todoID", todoController.updateTODO);
app.delete("/deleteTODO", todoController.deleteTODO);
app.delete("/deleteTODO/:todoID", todoController.deleteTODO);


}