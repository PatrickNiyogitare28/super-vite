const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
         '@views': path.resolve(__dirname, 'src/views'),
         '@components': path.resolve(__dirname, 'src/views'),
    },
  };
return config;
};