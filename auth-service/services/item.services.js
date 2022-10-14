const axios = require('axios')
const endpoint = require('../constants/endpoint.constants')
const messages = require('../../order-service/proto/order_pb');
const util = require('../../order-service/utils')
const caster = util.caster;
const client = require('../clients').order


exports.create = async (req, res) => {

       try {
              console.log(req.body)
              const response = await axios.post(`${endpoint.laravel}/item`, req.body);
              res.status(200).send(response.data)
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error
              })
       }
}

exports.getAll = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.laravel}/item`);
              res.status(200).send(response.data)
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error
              })
       }
}

exports.get = async (req, res) => {
       try {
              const response = await axios.get(`${endpoint.laravel}/item/${req.params.id}`);
              res.status(200).send(response.data)
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error
              })
       }
}

exports.delete = async (req, res) => {
       try {
              const response = await axios.delete(`${endpoint.laravel}/item/${req.params.id}`);
              res.status(200).send(response.data)
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error
              })
       }
}
exports.update = async (req, res) => {
       try {
              const response = await axios.put(`${endpoint.laravel}/item/${req.params.id}`, req.body);
              res.status(200).send(response.data)
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error
              })
       }
}