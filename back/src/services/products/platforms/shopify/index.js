
/**
 * In order to support any platform for ecommerce, we need to have this strategy router.
 * This is for Shopify. To add another one, just support the below methods.
 * 
 * Please look at how Shopify structures their products.  You must support that format
 * in order for the platform to be able to handle your product return data.
 */

module.exports = function (config) {
  config = config.platforms[config.platform].auth; // Quick shortcut to the config we want
  return {
    endpoint (name) { // Returns the proper endpoint for this platform
      switch (name) {
      case 'products':
        return `https://${config.user}:${config.pass}@${config.store}.myshopify.com/admin/api/2019-07/products.json`;
      }
    },
    parse (payload) { // Parses the returned list of products to match our format
      return payload; // Nothing to do since we're basing our format on shopify's format :)
    }
  };
};
