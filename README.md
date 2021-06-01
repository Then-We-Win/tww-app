# Then We Win (Monorepo)
An OpenSource, enterprise-grade Vue.js, Quasar, Strapi and Kubernetes based platform for social change.


## Getting started
You will need:


* A device to code on (even a potato PC will work)
* Git
* Node.js
* Yarn (preferred but not required)
* Something to code with (VS Code recommended)

### Installing

The Front facing UI (front)...
```
cd front
yarn
```

The backend services (platform)
```
cd platform
yarn
```

### Running

The Front facing UI (front) and backend services (platform) both use the same process...
```
yarn run dev
```

### Building

```
yarn run build
```
Built files will be placed in the ```/dist``` folder, and in "spa" for a Single Page App build.

> Note: Running the build files must be done on the root of a web server (you can change this with some config)


### Backend services

We use Strapi for the backend services.  We currently use a local database (in /platform/temp/data.db) in SQLLite format to store Strapi records.  This will be moved to Google Cloud Spanner in January 2021 after the initial services are developed :+1:

To login to the backend, once you are running Strapi in your local machine, visit ```http://localhost:1337/admin```

You will need to login with an admin account.  To do this, make sure you use an existing login, or create an admin account in the SQLLite database.

If you have windows, you can download an SQL lite viewer/editor here: https://sqlitebrowser.org/dl/ then just open the file at /platform/temp/data.db

The passwords are stored in bcrypt format, you can generate your password here: https://bcrypt-generator.com/

Copy the result into the password field of the "strapi_administrator" table for your new user, and make sure isActive contains a 1, then login with your new account.


