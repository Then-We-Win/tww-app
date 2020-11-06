# Then We Win (Includes back end and front end)
An engine with a backend and frontend.


The services are in Feathers 4 and minimal. Cut/Paste them wherever you want.

In particular:

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

