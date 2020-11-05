// Absolute minimum configuration needed to boot.  The rest of the config will come from the server.
export default {
  config: '5d90115732570760acd17ad2', // The config ID to boot with
  name: 'experience', // What this app is called. If you change this you will pull differen app config.
  debug: 'exp', // Put a localStorage item "debug" with "exp:*" in it to view debug statements
  loaded: false, // We aren't loaded yet.
  server: { // We want to connect to this gateway, and use this transport (websocket or rest)
    url: process.env.DEV ? 'http://localhost:9999' : 'https://gateway.sourcedigital.net',
    transports: ['websocket']
  },
  app: {} // This comes from the server
}
