# App - Multipurpose Admin and Webapp Tailwind Template


#### Install Node.js 18v

1. Check if you already have Node.js installed. Run this command in your terminal:

```bash
node -v
```



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

