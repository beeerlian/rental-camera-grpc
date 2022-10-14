const axios = require('axios')
const endpoint = require('../constants/endpoint.constants')
const util = require('../../order-service/utils')



exports.create = async (req, res) => {

       try {
              console.log(req.body)
              const response = await axios.post(`${endpoint.laravel}/user`, req.body);
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
              const response = await axios.get(`${endpoint.laravel}/user`);
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
              const response = await axios.get(`${endpoint.laravel}/user/${req.params.id}`);
              res.status(200).send(response.data)
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error
              })
       }
}

exports.getProfile = async (req, res) => {
       try {
              console.log(req.user.id)
              const response = await axios.get(`${endpoint.laravel}/user/${req.user.id}`);
              res.status(200).send({
                     success: true,
                     data: response.data
              })
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error
              })
       }
}


exports.delete = async (req, res) => {
       try {
              const response = await axios.delete(`${endpoint.laravel}/user/${req.params.id}`);
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
              const response = await axios.put(`${endpoint.laravel}/user/${req.params.id}`, req.body);
              res.status(200).send(response.data)
       } catch (error) {
              res.status(error.status || 400).send({
                     code: error.code || "BAD_REQUEST",
                     error: error
              })
       }
}