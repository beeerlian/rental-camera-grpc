const db = require("../models");
const util = require("../utils");
const messages = require("../proto/order_pb");
const Order = db.order;

module.exports = class API {
	constructor(grpc) {
		this.grpc = grpc;
	}

	create = async (call, callback) => {
		console.log(call.request.toObject());
		try {
			const res = await Order.create(util.caster.orderProtoObjToDBObj(call.request.toObject()));
			console.log(res);
			const order = util.caster.orderFromObject(res);
			callback(null, order);
		} catch (error) {
			callback(error, null);
		}
	};

	getAll = async (call, callback) => {
		try {
			const orders = await Order.findAll();

			const res = new messages.OrderList();
			const list = orders.map((item) => {
				const order = util.caster.orderFromObject(item);
				return order;
			});
			res.setOrdersList(list);
			callback(null, res);
		} catch (err) {
			callback(err, null);
		}

	};

	update = async (call, callback) => {
		try {
			const order = await Order.findByPk(call.request.getId());
			if (!order) {
				throw new Error("Order Not Found");
			}
			order.dataValues = { ...order.dataValues, ...call.request.toObject() };
			const result = await order.save();
			const res = util.caster.orderFromObject(result);
			callback(null, res);

		} catch (err) {
			callback(err, null);
		}
	};

	delete = async (call, callback) => {
		try {
			const order = await Order.findByPk(call.request.getId());
			if (!order) {
				throw new Error("Order Not Found");
			}
			const result = await order.destroy();

			const res = util.caster.orderFromObject(result);
			callback(null, res);

		} catch (err) {
			callback(err, null);
		}
	};

	get = async (call, callback) => {
		try {
			const order = await Order.findByPk(call.request.getId());
			if (!order) {
				throw new Error("Order Not Found");
			}
			order.order_date = new Date(order.order_date).getTime();
			order.created_at = new Date(order.created_at).getTime();
			const res = util.caster.orderFromObject(order);
			callback(null, res);

		} catch (err) {
			callback(err, null);
		}
	};

	calculateFee = async (call, callback) => {
		try {
			const id = call.request.getId();
			const order = await Order.findByPk(id);
			if (!order) {
				throw new Error("the order you mean is not available");
			}
			const orderData = util.caster.orderFromObject(order.dataValues);
			const totalRentDay = util.countRentDuration(order.dataValues.order_date);
			const res = new messages.CalculatedFee();
			res.setOrder(orderData);
			res.setTotalrentday(totalRentDay.toString());
			res.setTotalprice((totalRentDay * order.dataValues.item_price).toString());
			callback(null, res);
		} catch (err) {
			callback(err, null);
		}
	};


};
