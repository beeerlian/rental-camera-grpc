const axios = require("axios");
const endpoint = require("../constants/endpoint.constants");
const messages = require("../../order-service/proto/order_pb");
const util = require("../../order-service/utils");
const caster = util.caster;
const client = require("../clients").order;


exports.create = async (req, res) => {
	let request = new messages.GetRequest();
	request.setId(req.body.order_id);
	client.get(request, function (error, response) {
		if (error) {
			res.status(error.status || 400).send({
				code: error.code || "BAD_REQUEST",
				error: error
			});
		}
		if (response) {
			req.body = {
				...req.body,
				...caster.orderProtoObjToDBObj(response.toObject())
			};
			console.log(req.body);
			axios.post(`${endpoint.node}/transaction`, req.body).then((resp) => {

				res.status(200).send({
					status: "success",
					data: resp.data || null
				});
			}).catch((error) => {
				res.status(error.status || 400).send({
					code: error.code || "BAD_REQUEST",
					error: error
				});
			});
		}

	});

};

exports.getAll = async (req, res) => {
	try {
		const response = await axios.get(`${endpoint.node}/transaction`, req.body);
		res.status(200).send({
			status: "success",
			data: response.data || null
		});
	} catch (error) {
		res.status(error.status || 400).send({
			code: error.code || "BAD_REQUEST",
			error: error
		});
	}
};

exports.get = async (req, res) => {
	try {
		const response = await axios.get(`${endpoint.node}/transaction/${req.params.id}`);
		res.status(200).send({
			status: "success",
			data: response.data || null
		});
	} catch (error) {
		res.status(error.status || 400).send({
			code: error.code || "BAD_REQUEST",
			error: error
		});
	}
};
