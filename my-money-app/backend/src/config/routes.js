const express = require("express");

module.exports = function (server) {
  const router = express.Router();
  server.use('/api', router);

  const PaymentCycleService = require('../api/paymentCycle/paymentCycleService');
  PaymentCycleService.register(router, '/paymentCycle')
}