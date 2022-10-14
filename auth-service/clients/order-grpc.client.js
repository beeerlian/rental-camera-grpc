const orderGrpc = require('../../order-service/grpc')

const services = require('../../order-service/proto/order_grpc_pb');


let address = "0.0.0.0" + ":" + "8080";
const client = new services.OrderSvcClient(address, orderGrpc.credentials.createInsecure());

module.exports = client
