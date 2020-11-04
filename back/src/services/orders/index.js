
/**
 * This is the products service. It returns all products a client has on the configured platform.
 * 
 * When querying it, you pass it a client id. It will load that client's config
 * in order for the platform to be able to handle your product return data.
 */

const axios = require('axios');
const { getClientConfig, endpointFor } = require('../../common');
const { NotFound, BadRequest } = require('@feathersjs/errors');

// ecommerce platforms strategy pattern (add all platforms we support here)...
const platforms = {
  shopify: require('./platforms/shopify')
};

module.exports = function (app) {
  app.use(endpointFor(__filename), {
    async get(client, params) {

      if (!params.query.id) {
        return new BadRequest('Missing required param: id');
      }

      if (typeof client !== 'string') {
        return new BadRequest('Malformed client id');
      }

      if (client.length !== 24) {
        return new BadRequest('Malformed client id');
      }

      // Will return a 404 to the user if the config doesn't exist, since the request can't be processed.
      const config = await getClientConfig(client);

      // If we get here, we have a good client config, we just need to check if their order id exists.
      const ecommerce =  config.ecommerce;
      const platform = platforms[ecommerce.platform](ecommerce);

      console.log(`${endpointFor(__filename)}/${client} --> ${platform.endpoint('getOrder', params.query.id)}`);
      
      // Attempt to get their order...
      const response = await axios.get(platform.endpoint('getOrder', params.query.id))
        .catch(function (error) {
          console.log(`Could not find ${params.query.id}`);
          return new NotFound(error);
        });
      
      // Give them their order...
      return response.data;
    },
    async create(data, params) {

      if (!params.query.client) {
        return new BadRequest('Missing required param: client');
      }
      const client = params.query.client;

      if (typeof client !== 'string') {
        return new BadRequest('Malformed client id');
      }

      if (client.length !== 24) {
        return new BadRequest('Malformed client id');
      }

      // Will return a 404 to the user if the config doesn't exist, since the request can't be processed.
      const config = await getClientConfig(client);

      console.log('HERE!');
      // If we get here, we have a good client config, we just need to save their order...
      const ecommerce =  config.ecommerce;
      const platform = platforms[ecommerce.platform](ecommerce);

      console.log(`${endpointFor(__filename)}/${client} --> ${platform.endpoint('createOrder')}`);
      // Perform the proper ecommerce platform products query...
      const response = await axios.post(platform.endpoint('createOrder'), data)
        .catch(function (error) {
          console.log(error);
        });
      // console.log('DONE?', response);
      // return the result...
      return response.data;
    }

  });
};
