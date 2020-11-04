# Experience engine (Includes back end and front end)
A rules engine with a backend and frontend.


This contains a set of services that support the Black Rifle Coffee Company release of Watch And Shop.

The services are in Feathers 4 and minimal. Cut/Paste them wherever you want.

In particular:

* A /products/:clientId service that supports Shopify and any other storefront with a small plugin we write.
* A /config/:clientId service that can power other services right from the DB (/products and /buy uses the config service, not an endpoint or db directly, so you can pull it any way you want).
* A /users/:id and authentication service that supports Oauth, Facebook, Google, Twitter and Github with password stripping for security.
* A front-end that you can use to query the services and switch config keys

## Security
The services are not setup for security, so please put them behind a gateway. Using the config service to hydrate the frontend is a demo, as the auth service hasn't been implemented here.

**We will need to require an auth token if the services are going to be public facing as they can expose private config. This is easy, but it isn't done(!) so make sure this is private facing unless this gets done first.**

## Getting started
You will need a local MongoDB called SourceV2 with the following collections:

* config
* users

### Restoring collections from source (you will need to do this the first time you run this repo)

```
mongorestore ./data
```

### Saving your collections back to source

```
mongodump --db=SourceV2 --collection=users --out=./data
mongodump --db=SourceV2 --collection=config --out=./data
```

#### Open 2 consoles

console 1 (backend):
```
cd back
npm i
npm run dev
```

console 2 (frontend):
```
cd front
npm i
npm run dev || npx quasar dev
```

The front will connect to the back and perform a basic hydration process, as well as demo config and use the products service to list products for a clients storefront

## Exploring data

In the front-end UI, click the ```[...]``` sections listed under the respective JSON heading to see what the server is sending back to the client.

## Testing endpoints

There are 3 endpoints you can test, they are really simple:

* ```http://localhost:9999/products/5d900a6245d9f576dc6bc84f``` Will return all Black Rifle Coffee Company products and stock levels.
* ```http://localhost:9999/products/5d90115732570760acd17ad2``` Will return all VerteLuxe products and stock levels.
* ```http://localhost:9999/config``` Will return all config for all clients.
* ```http://localhost:9999/config/5d900a6245d9f576dc6bc84f``` Will return all config for Black Rifle Coffee Company.
* ```http://localhost:9999/config/5d90115732570760acd17ad2``` Will return all config for VerteLuxe.
* ```http://localhost:9999/users``` Will return all users with passwords stripped.
* ```http://localhost:9999/users/5d7eee122790e248fc808efc``` Will return a demo authorized public app user.
* ```http://localhost:9999/users/5d7eee122790e248fc808efc``` Will return a demo authorized private app user.

## Changing clients

By Default, the client will ask for a VerteLuxe setup, which will connect to the actual VerteLuxe store and return real VerteLuxe products.  It will also pull the VerteLuxe config from the config service and use it in both the back and front ends.

There is also a demo BRCC demo.  To change the config the client is asking for, just edit this file: ```front/src/store/config/state.js```

change the config entry to:

* ```5d90115732570760acd17ad2``` - VerteLuxe
* ```5d900a6245d9f576dc6bc84f``` - Black Riffle Coffee Company single product demo store.
* Create your own config by simply duplicating a config document in the config collection, then change the ```ecommerce.platforms.shopify.auth``` object to your own shopify store, then just change the config key in ```front/src/store/config/state.js``` to your new document ```__id``` and you're done! :)

## Supporting additional ecommerce platforms
Create a new plugin for the platform you want to support in ```back/src/services/products/platforms/```

*Make sure you also add config settings for it in your config document of course!*
