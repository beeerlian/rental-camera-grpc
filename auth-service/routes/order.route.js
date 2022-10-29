const middleware = require("../middleware");
const services = require("../services");
const order = services.order;

module.exports = function (app) {
	app.get("/order", [middleware.token.verify, middleware.role.ban.customer], order.getAll);
	app.post("/order", [middleware.token.verify], order.create);
	app.get("/order/:id", [middleware.token.verify, middleware.role.ban.customer], order.get);
	app.get("/order/:id/price", [middleware.token.verify, middleware.role.ban.customer], order.calculatePrice);
	app.delete("/order/:id", [middleware.token.verify, middleware.role.ban.customer], order.delete);
	app.put("/order/:id", [middleware.token.verify, middleware.role.ban.customer], order.update);
};
