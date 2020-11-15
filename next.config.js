const config = require('config')
const css = require("@zeit/next-css");
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins(
  [css], {
    assetPrefix: config.get('server.base_url'),
    publicRuntimeConfig: {
      url: config.get('server.base_url')
    }
    
  }
  
  
);


