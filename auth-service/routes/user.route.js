const middleware = require("../middleware");
const services = require("../services");
const user = services.user;

module.exports = function (app) {
	app.get("/user", [middleware.token.verify, middleware.role.ban.customer], user.getAll);
	app.post("/user", [middleware.token.verify, middleware.role.ban.customer], user.create);
	app.get("/user/:id", [middleware.token.verify, middleware.role.ban.customer], user.get);
	app.get("/user/profile", [middleware.token.verify], user.getProfile);
	app.delete("/user/:id", [middleware.token.verify, middleware.role.ban.customer], user.delete);
	app.put("/user/:id", [middleware.token.verify, middleware.role.verify, middleware.role.ban.customer], user.update);
};
