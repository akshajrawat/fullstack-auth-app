// basic imports
const constants = require("../Util/constants");

// errorhandler middleware
const errorHandler = (err, req, res, next) => {
  // getting status code
  const status = err.statusCode || res.statusCode || 500;

  //   switch case to handle error
  switch (status) {
    // cases
    case constants.BAD_REQUEST:
      res.status(status).json({
        title: constants.BAD_REQUEST,
        message: err.message,
        stack: err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.status(status).json({
        title: constants.UNAUTHORIZED,
        message: err.message,
        stack: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.status(status).json({
        title: constants.NOT_FOUND,
        message: err.message,
        stack: err.stack,
      });
      break;

    case constants.INTERNAL_ERROR:
      res.status(status).json({
        title: constants.INTERNAL_ERROR,
        message: err.message,
        stack: err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
