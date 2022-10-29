const verify = (req, res, next) => {
	const role = req.user.role;
	switch (req.route.path) {
	case "/item":
		if (role === "CUSTOMER") sendErrorResponse(res, role);
		break;
	case "/order":
		if (role === "CUSTOMER") sendErrorResponse(res, role);
		break;
	case "/register":
		if (role === "CUSTOMER") sendErrorResponse(res, role);
		break;
	case "/transaction":
		if (role === "CUSTOMER") sendErrorResponse(res, role);
		break;
	default:
		break;
	}
	next();
};

const customer = (req, res, next) => {
	const role = req.user.role;
	if (role === "CUSTOMER") {
		sendErrorResponse(res, role);
	}
	else {
		next();
	}
};

const superAdmin = (req, res, next) => {
	const role = req.user.role;
	if (role === "SUPER_ADMIN") {
		sendErrorResponse(res, role);
	}
	else {
		next();
	}
};

const admin = (req, res, next) => {
	const role = req.user.role;
	if (role === "ADMIN") {
		sendErrorResponse(res, role);
	}
	else {
		next();
	}
};

module.exports = { verify, ban: { customer, superAdmin, admin } };



function sendErrorResponse(res, role) {
	return res.status(402).send({
		status: "METHOD_NOT_ALOWWED",
		message: `youre cannot access this method with ${role} role`
	});
}
