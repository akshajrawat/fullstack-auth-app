// Status code constants
const STATUS_CODES = {
  SUCCESS: 200, // OK
  CREATED: 201, // Resource created successfully
  BAD_REQUEST: 400, // Missing or invalid data
  UNAUTHORIZED: 401, // Auth failed or token missing
  FORBIDDEN: 403, // Authenticated but no access
  NOT_FOUND: 404, // Resource not found
  CONFLICT: 409, // Resource already exists
  INTERNAL_ERROR: 500, // Server error
};

module.exports = STATUS_CODES;
