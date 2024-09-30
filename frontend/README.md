# Intellecto App - Multipurpose Admin and Webapp Tailwind Template

[![cssninja-discord](https://img.shields.io/discord/785473098069311510?label=join%20us%20on%20discord&color=6944EC)](https://go.cssninja.io/discord)

## ▶️ Getting started

First of all, Thank you so much for purchasing this template and for being our loyal customer. You are awesome! You are entitled to get free lifetime updates to this product and support from the cssninjaStudio team directly. **Tairo** is a product built by [cssninjaStudio](https://cssninja.io/) and [Digisquad](https://digisquad.io/).

### Prerequisites

1. A recent web browser (Chrome, Edge, Firefox, ...)
2. [Node.js LTS](https://nodejs.org/en/) _(LTS or Current version)_ installed
3. Knowledge with [Typescript](https://github.com/microsoft/typescript) _(should not be installed globally)_
4. Knowledge with [Tailwind CSS](https://tailwindcss.com/)
5. (recommended) [VSCode](https://code.visualstudio.com/) with [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

#### Install Node.js

1. Check if you already have Node.js installed. Run this command in your terminal:

```bash
node -v
```

If node is not installed on your machine, you can go to the official nodejs.org website, and choose the version depending on your operating system:

- <a href="https://nodejs.org/en/download/" target="_blank">Install Node.js and npm on Windows, Linux or Mac OSX</a>
- <a href="https://github.com/nvm-sh/nvm" target="_blank">Or, install Node Version Manager to quickly install and use different versions of Node.js</a>

2. Enable pnpm with corepack

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

> _corepack is installed by default with node from **v16.13.x**, if your version is below, install it with: `npm install -g corepack`_

To setup the template and start installing project dependencies, run:

```bash
pnpm install
```

> **Note:** This will install depenencies form all packages that matches with `pnpm-workspace.yaml`. If you need to clear all `node_modules`, you can use `pnpm clear:all` command.

## 🔃 Run a development server

To start the development server, run:

```bash
pnpm dev
```

This will run the `dev` script from the `package.json` file.

> Access the Tairo frontend in your browser at [http://localhost:3000/](http://localhost:3000/)


## Execution path

This is what happens when the app runs:

1. Project Initialization:

When you start a Nuxt application, it first looks for the nuxt.config.js or nuxt.config.ts file in the root directory.
This configuration file defines various settings, including any layers the app is using.


2. Layer Resolution:

Nuxt will then resolve all the layers defined in the configuration. Unless you specify layer configuration in the nuxt config file, just folders will be used that start with a period. If the folder has a `nuxt config` file in that folder, it will be processed as a layer, otherwise it won't.

The `.app` folder is used as a `production` local layer, and `.demo` folder is the `demo` local layer, containing all of Tairo in your project structure.

3. Merging of Layers:

Nuxt merges all the layers in the order they are defined, with .nuxt and then .app folder being the first ones if they exist. Nuxt uses "last one wins", meaning the last layer to load, if it contains an override for something prior, will overwrite the previous item.

Nuxt lets you `filter` layers from the command prompt. We use this method to run dev mode: (which only uses the `.app` layer):

Taken from root `package.json`:
```
"dev": "pnpm --filter=app dev"
"demo:dev": "pnpm --filter=demo dev",
```

So when you run `npm run dev` you are asking for the `.app` layer to be processed on it's own, with no other layers!

if you run `npm run demo:dev`, the .demo folder has a nuxt config file that adds additional layers in "extends", which also loads multiple items in the `layers` folder. We can bring these things over into .app as well!

4. Server Initialization:

If it's a server-side rendered app, Nuxt starts the server. It loads all server-side plugins and middleware defined in the layers and the main project (the `.app` layer, in our case).


5. Vue App Creation:

It registers all middleware, components, composables, and plugins from all layers and the main project.

> **NOTE:** Middewre: Nuxt uses a really cool concept called [middleware](https://nuxt.com/docs/guide/directory-structure/middleware#middleware-order).

During this stage, the winning `app.vue` (last one loaded) is executed. That file then loads the rest of the application, with some additional key insight:

* Before anything, Nuxt checks for global middleware. Create it by just putting a file in `/middleware/your-name-here.global.js`
* Before anything else, Nuxt checks for middleware. If you include `definePageMeta({ middleware: ['foo']}})` in any final route, this will execute *first*, even before `app.vue`.
* All imports from `app.vue` are hoisted before excuting JS within the file itself (this hoisting is what may cause execution path issues in nuxt if you `import` other dependancies! Be careful here).
* The JS code within app.vue is executed.
* All usage of template components are then executed, in order they appear in the template.
* This includes stuff in the `/layouts/*` folder, if `<NuxtLayout>` is used.
* This includes stuff routed in the `/pages/*` folder, if `<NuxtPage>` is used.

### Nuxt effects

Nuxt offers some really cool features...

* [Middleware](https://nuxt.com/docs/guide/directory-structure/middleware#middleware-order)
* process (in any JS, a object called "process" which contains details about where you're running (client/server/browser/etc), is available)

## 💡 What to do next ?

Our online documentation is a great place to learn how to use Tairo.
We try to keep it mostly up to date, so you can always find the latest information.

- [Access Online Documentation](https://tairo.cssninja.io/documentation)
- [Access Shuriken UI Documentation](https://shurikenui.com)

> We also have a great [discord community](https://go.cssninja.io/discord) where you can ask questions and show your work.
