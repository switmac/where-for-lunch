const importer = require('postcss-import');
const advancedVariables = require('postcss-advanced-variables');
const nested = require('postcss-nested');

const plugins = [
  nested,
  importer({
    path: ['./client', './node_modules'],
  }),
  advancedVariables,
];

module.exports = {
  plugins,
};
