const messages = require("../proto/order_pb");


const orderFromObject = (obj) => {
	const order = new messages.Order();
	order.setId(obj.id);
	order.setUserid(obj.user_id);
	order.setItemid(obj.item_id);
	order.setItemname(obj.item_name);
	order.setItemprice(obj.item_price);
	order.setTellerid(obj.teller_id);
	order.setOrderdate(obj.order_date.toString());
	order.setCreatedat(obj.created_at.toString());

	return order;
};

const orderProtoObjToDBObj = (obj) => {

	return {
		user_id: obj.userid,
		item_id: obj.itemid,
		item_name: obj.itemname,
		item_price: obj.itemprice,
		teller_id: obj.tellerid,
		order_date: obj.orderdate,
		created_at: obj.createdat

	};
};

const createReqFromObject = (obj) => {
	console.log(obj);

	let request = new messages.CreateRequest();
	request.setUserid(parseInt(obj.user_id));
	request.setItemid(parseInt(obj.item_id));
	request.setItemname(obj.item_name);
	request.setItemprice(parseInt(obj.item_price));
	request.setTellerid(parseInt(obj.teller_id));
	console.log(request.toObject());

	return request;
};
module.exports = { createReqFromObject, orderFromObject, orderProtoObjToDBObj };
