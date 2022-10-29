const middleware = {
	token: {},
	role: {}
};

middleware.token.verify = require("./verify.token.middleware");
middleware.role = require("./verify.role.middleware");

module.exports = middleware;
