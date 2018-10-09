const morgan = require('morgan');

const logger = morgan(':date[web] :method :url');

module.exports = {logger};