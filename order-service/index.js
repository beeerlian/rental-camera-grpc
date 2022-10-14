const grpc = require('@grpc/grpc-js')

const services = require('./proto/order_grpc_pb');
const db = require('./models')
const Service = require('./services/order.service')

async function app() {
       const service = new Service(grpc);
       let server = new grpc.Server();
       server.addService(services.OrderSvcService, {
              list: service.getAll,
              get: service.get,
              calculateFee: service.calculateFee,
              update: service.update,
              delete: service.delete,
              create: service.create
       });
       let address = "0.0.0.0" + ":" + 8080;
       server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
              server.start();
              console.log("Server running at " + address);
       });
}

app()

const client = async () => {
       const client = new services.OrderSvcClient(address, grpc.credentials.createInsecure());
       console.log(client)
}
client()

