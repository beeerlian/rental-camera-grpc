const axios = require('axios')
const endpoint = require('../constants/endpoint.constants')
const messages = require('../../order-service/proto/order_pb');
const util = require('../../order-service/utils')
const caster = util.caster;
const client = require('../clients').order


exports.create = async (req, res) => {
       try {
              const result = await axios.get(`${endpoint.laravel}/item/${req.body.item_id}`);
              if (!result) {
                     throw new Error("Item not found");
              }
              const item = result.data.data;
              req.body = {
                     ...req.body,
                     item_name: item.name,
                     item_price: item.price,
              }
              const request = caster.createReqFromObject(req.body);
              client.create(request, function (err, response) {
                     if (err) {
                            sendErrorRes(res, err);
                     }
                     if (response) {
                            res.status(200).send({
                                   status: "success",
                                   data: response.toObject() || []
                            })
                     }

              });

       } catch (err) {
              sendErrorRes(res, err);
       }
}

exports.update = async (req, res) => {
       try {
              const response = await axios.put(`${endpoint.node}/order/${req.params.id}`, req.body);
              res.status(200).send({
                     status: "success",
                     data: response.data || null
              })
       } catch (error) {
              sendErrorRes(res, error);
       }
}

exports.calculatePrice = async (req, res) => {
       let request = new messages.CalculateFeeRequest();
       request.setId(req.params.id);
       client.calculateFee(request, function (err, response) {
              if (err) {
                     sendErrorRes(res, err);
              }
              if (response) {
                     res.status(200).send({
                            status: "success",
                            data: response.toObject() || []
                     })
              }

       });
}


exports.delete = async (req, res) => {
       let request = new messages.DeleteRequest();
       request.setId(req.params.id);
       client.delete(request, function (err, response) {
              if (err) {
                     sendErrorRes(res, err);
              }
              if (response) {
                     res.status(200).send({
                            status: "success",
                            data: response.toObject() || []
                     })
              }

       });
}

exports.get = (req, res) => {
       let request = new messages.GetRequest();
       request.setId(req.params.id);
       client.get(request, function (err, response) {
              if (err) {
                     sendErrorRes(res, err);
              }
              if (response) {
                     res.status(200).send({
                            status: "success",
                            data: response.toObject() || []
                     })
              }

       });
}

exports.getAll = async (req, res) => {
       let request = new messages.Empty();
       client.list(request, function (err, response) {
              if (err) {
                     sendErrorRes(res, err);
              }
              if (response) {
                     res.status(200).send({
                            status: "success",
                            data: response.toObject().ordersList || []
                     })
              }

       });

}

function sendErrorRes(res, error) {
       res.status(error.status || 400).send({
              code: error.code || "BAD_REQUEST",
              // error: error.response.data.message ?? error.response.data ?? error.message ?? error
              error: error
       })
}