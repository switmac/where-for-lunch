module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^client/(.*)': '<rootDir>/../client/$1',
    '^server/(.*)': '<rootDir>/../server/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsStubber.js',
    '\\.(css)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/setup.js',
};
