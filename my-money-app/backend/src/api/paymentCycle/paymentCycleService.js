const PaymentCycle = require('./paymentCycle')
const errorHandler = require('../common/errorHandler');

PaymentCycle.methods(['get', 'post', 'put', 'delete'])
PaymentCycle.updateOptions({new: true, runValidators: true})
PaymentCycle.after('post', errorHandler).after('put', errorHandler);

PaymentCycle.route('count', (req, res, next) => {
  PaymentCycle.count((err, value) => {
    if (err) {
      res.status(500).json({errors: [err]})
    }
    res.status(200).json({value})
  })
})
PaymentCycle.route('summary', (req, res, next) => {
  PaymentCycle.aggregate([{
    $project: {credit: {$sum: "$credits.value"}, debit: {$sum: "$debts.value"}}
  }, {
    $group: {_id: null, credit: {$sum: "$credit"}, debit: {$sum: "$debt"}}
  }, {
    $project: {_id: 0, credit: 1, debit: 1}
  }], (error, result) => {
    if (error) {
      res.status(500).json({errors: [error]})
    } else {
      res.json(result[0] || {credit: 0, debit: 0})
    }
  })
})
module.exports = PaymentCycle