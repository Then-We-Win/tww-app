
/**
 * This is the products service. It returns all products a client has on the configured platform.
 * 
 * When querying it, you pass it a client id. It will load that client's config
 * in order for the platform to be able to handle your product return data.
 */

const axios = require('axios');

// Generic memoizer - key/value store so we don't have to load customer config each hit.
// TODO: Move this to a subscribe on a config service channel and only change config via the
// new config service :) then this will invalidate in real-time(!)
const configCache = {};

// ecommerce platforms strategy pattern (add all platforms we support here)...
const platforms = {
  shopify: require('./platforms/shopify')
};

module.exports = function (app) {
  app.use('/products', {
    async get(client) {
      let ecommerce = {};
      // If we have loaded this config for this client before, use it instead of the service...
      if (configCache[client]) {
        console.log(`/products/${client} Client config cache hit`);
        ecommerce = configCache[client];
      } else {
        console.log(`/products/${client} Client config cache miss`);
        // Get a reference to the client's ecommerce configuration...
        const config = await app.service('config').get(client);
        // Assign it for use now...
        ecommerce = config.ecommerce;
        // Store it in the cache...
        configCache[client] = ecommerce; // eslint-disable-line require-atomic-updates        
      }

      // Next, initialize the platform methods for the clients ecommerce platform...
      // These can be created in src/services/products/platforms
      const platform = platforms[ecommerce.platform](ecommerce);
      console.log(`/products/${client} --> ${platform.endpoint('products')}`);

      // Perform the proper ecommerce platform products query...
      const response = await axios.get(platform.endpoint('products'))
        .catch(function (error) {
          console.log(error);
        });

      // console.log(`/products/${client} --> ${response.data.products.length} products`);
      // return the result...
      return response.data;
    }
  });
};
