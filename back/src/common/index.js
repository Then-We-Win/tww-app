const NodeCache = require('node-cache');
const config = require('config');
const path = require('path');

const clientConfigCache = new NodeCache( { stdTTL: config.cache.clientConfig.ttl } );
let app = undefined;

// Returns the top-most folder for the current path.
const folderFor = (name) => path.dirname(name).split(path.sep).pop();

// like folderFor, but with a prepended '/' and appending optional stuff.
const endpointFor = (name, append = '') => `/${folderFor(name)}${append}`;

// Needed to inject the app object locally.
function use (appInjection) {
  app = appInjection;
}

// Returns a client configuration, using cache first.
async function getClientConfig(client) {
  if (!app) throw Error('You must call common.use(app) before calling getClientConfig');
  const config = clientConfigCache.get(client);
  if (config) {
    console.log(`Client Config cache hit: ${client}`);
    return config;
  } else {
    console.log(`Client Config cache miss: ${client}`);
    const newConfig = await app.service('config').get(client);
    clientConfigCache.set(client, newConfig);
    return newConfig;
  }
}


module.exports = {
  use,
  endpointFor,
  folderFor,
  getClientConfig
};
