const services = {};

services.auth = require("./auth.services");
services.order = require("./order.services");
services.transaction = require("./transaction.services");
services.item = require("./item.services");
services.user = require("./user.services");

module.exports = services;
