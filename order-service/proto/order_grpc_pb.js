// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var order_pb = require('./order_pb.js');

function serialize_CalculateFeeRequest(arg) {
  if (!(arg instanceof order_pb.CalculateFeeRequest)) {
    throw new Error('Expected argument of type CalculateFeeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CalculateFeeRequest(buffer_arg) {
  return order_pb.CalculateFeeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CalculatedFee(arg) {
  if (!(arg instanceof order_pb.CalculatedFee)) {
    throw new Error('Expected argument of type CalculatedFee');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CalculatedFee(buffer_arg) {
  return order_pb.CalculatedFee.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateRequest(arg) {
  if (!(arg instanceof order_pb.CreateRequest)) {
    throw new Error('Expected argument of type CreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateRequest(buffer_arg) {
  return order_pb.CreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteRequest(arg) {
  if (!(arg instanceof order_pb.DeleteRequest)) {
    throw new Error('Expected argument of type DeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteRequest(buffer_arg) {
  return order_pb.DeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Empty(arg) {
  if (!(arg instanceof order_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return order_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetRequest(arg) {
  if (!(arg instanceof order_pb.GetRequest)) {
    throw new Error('Expected argument of type GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetRequest(buffer_arg) {
  return order_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Order(arg) {
  if (!(arg instanceof order_pb.Order)) {
    throw new Error('Expected argument of type Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Order(buffer_arg) {
  return order_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OrderList(arg) {
  if (!(arg instanceof order_pb.OrderList)) {
    throw new Error('Expected argument of type OrderList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OrderList(buffer_arg) {
  return order_pb.OrderList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateRequest(arg) {
  if (!(arg instanceof order_pb.UpdateRequest)) {
    throw new Error('Expected argument of type UpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateRequest(buffer_arg) {
  return order_pb.UpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// package cr_app;
//
var OrderSvcService = exports.OrderSvcService = {
  list: {
    path: '/OrderSvc/List',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.Empty,
    responseType: order_pb.OrderList,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_OrderList,
    responseDeserialize: deserialize_OrderList,
  },
  get: {
    path: '/OrderSvc/Get',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.GetRequest,
    responseType: order_pb.Order,
    requestSerialize: serialize_GetRequest,
    requestDeserialize: deserialize_GetRequest,
    responseSerialize: serialize_Order,
    responseDeserialize: deserialize_Order,
  },
  create: {
    path: '/OrderSvc/Create',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CreateRequest,
    responseType: order_pb.Order,
    requestSerialize: serialize_CreateRequest,
    requestDeserialize: deserialize_CreateRequest,
    responseSerialize: serialize_Order,
    responseDeserialize: deserialize_Order,
  },
  delete: {
    path: '/OrderSvc/Delete',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.DeleteRequest,
    responseType: order_pb.Order,
    requestSerialize: serialize_DeleteRequest,
    requestDeserialize: deserialize_DeleteRequest,
    responseSerialize: serialize_Order,
    responseDeserialize: deserialize_Order,
  },
  update: {
    path: '/OrderSvc/Update',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.UpdateRequest,
    responseType: order_pb.Order,
    requestSerialize: serialize_UpdateRequest,
    requestDeserialize: deserialize_UpdateRequest,
    responseSerialize: serialize_Order,
    responseDeserialize: deserialize_Order,
  },
  calculateFee: {
    path: '/OrderSvc/CalculateFee',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CalculateFeeRequest,
    responseType: order_pb.CalculatedFee,
    requestSerialize: serialize_CalculateFeeRequest,
    requestDeserialize: deserialize_CalculateFeeRequest,
    responseSerialize: serialize_CalculatedFee,
    responseDeserialize: deserialize_CalculatedFee,
  },
};

exports.OrderSvcClient = grpc.makeGenericClientConstructor(OrderSvcService);
