const { wrapDisplayName, setDisplayName, compose } = require('recompose');

module.exports = compose(
  setDisplayName,
  wrapDisplayName
);
