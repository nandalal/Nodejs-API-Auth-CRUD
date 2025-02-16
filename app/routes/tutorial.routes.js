const { authJwt } = require("../middlewares/index.js");
const tutorials = require("../controllers/tutorial.controller.js");


module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });


  // Create a new Tutorial
  app.post("/api/tutorials", [authJwt.verifyToken], tutorials.create);
  // app.post("/api/tutorials", [], tutorials.create);

  // Retrieve all Tutorials
  app.get("/api/tutorials", [authJwt.verifyToken], tutorials.findAll);
  // app.get("/api/tutorials", [], tutorials.findAll);

  // Retrieve all published Tutorials
  app.get("/api/tutorials/published", [authJwt.verifyToken], tutorials.findAllPublished);
  // app.get("/api/tutorials/published", [], tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  app.get("/api/tutorials/:id", [authJwt.verifyToken], tutorials.findOne);
  // app.get("/api/tutorials/:id", [], tutorials.findOne);

  // Update a Tutorial with id
  app.put("/api/tutorials/:id", [authJwt.verifyToken], tutorials.update);
  // app.put("/api/tutorials/:id", [], tutorials.update);

  // Delete a Tutorial with id
  app.delete("/api/tutorials/:id", [authJwt.verifyToken], tutorials.delete);
  // app.delete("/api/tutorials/:id", [], tutorials.delete);

  // Create a new Tutorial
  app.delete("/api/tutorials", [authJwt.verifyToken], tutorials.deleteAll);
  // app.delete("/api/tutorials", [], tutorials.deleteAll);


};
