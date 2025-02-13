const _ = require('lodash');
const err = require("mongoose/lib/document");

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle;
  if (bundle.errors) {
    const errors = parseErrors(bundle.errors);
    return res.status(500).json({errors})
  }
  next()
}

const parseErrors = errs => {
  const errors = [];
  _.forIn(errs, err => errors.push(err.message));
  return errors;
}