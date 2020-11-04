
/**
 * In order to support any platform for ecommerce, we need to have this strategy router.
 * This is for Shopify. To add another one, just support the below methods.
 * 
 * Please look at how Shopify structures their orders.  You must support that format
 * in order for the platform to be able to handle your order return data.
 */

module.exports = function (config) {
  config = config.platforms[config.platform].auth; // Quick shortcut to the config we want
  return {
    endpoint (name, id) { // Returns the proper endpoint for this platform
      switch (name) {
      case 'getOrder':
        return `https://${config.user}:${config.pass}@${config.store}.myshopify.com/admin/api/2019-07/draft_orders/${id}.json`;
      case 'createOrder':
        return `https://${config.user}:${config.pass}@${config.store}.myshopify.com/admin/api/2019-07/draft_orders.json`;
      }
    },
    parse (payload) { // Parses the returned list of products to match our format
      return payload; // Nothing to do since we're basing our format on shopify's format :)
    }
  };
};
