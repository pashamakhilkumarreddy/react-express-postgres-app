const todos = require('./todos');

module.exports = ({
  server,
}) => {
  server.use('/', todos);
};
