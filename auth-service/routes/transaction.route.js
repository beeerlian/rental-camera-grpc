const middleware = require("../middleware");
const services = require("../services");
const transaction = services.transaction;


module.exports = function (app) {
	app.get("/transaction", [middleware.token.verify, middleware.role.ban.customer], transaction.getAll);
	app.post("/transaction", [middleware.token.verify, middleware.role.ban.customer], transaction.create);
	app.get("/transaction/:id", [middleware.token.verify, middleware.role.ban.customer], transaction.get);
};
