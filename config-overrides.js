const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
         '@views': path.resolve(__dirname, 'src/views'),
         '@components': path.resolve(__dirname, 'src/components'),
         '@layouts': path.resolve(__dirname, 'src/layouts'),
         '@enums': path.resolve(__dirname, 'src/enums'),
         '@interfaces': path.resolve(__dirname, 'src/interfaces'),
         '@services': path.resolve(__dirname, 'src/services'),
         '@types': path.resolve(__dirname, 'src/types'),
         '@helpers': path.resolve(__dirname, 'src/helpers'),
         "@store": path.resolve(__dirname, 'src/store'),
         "@redux-slices": path.resolve(__dirname, 'src/redux-slices'),
         "@config": path.resolve(__dirname, 'src/config'),
         "@assets": path.resolve(__dirname, 'src/assets'),
         "@common": path.resolve(__dirname, 'src/assets/stylesheets/_index.scss')
    },
  };
return config;
};