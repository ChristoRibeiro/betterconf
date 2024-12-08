# dotconf

Use .conf configuration files in your JavaScript/TypeScript project.

> **Warning**
> This project is currently a work in progress and not usable at all yet.

## Installation

With NPM:

```bash
npm install @dotconf/config
npm install @dotconf/cli --save-dev
```

With PNPM:

```bash
pnpm install @dotconf/config
pnpm install @dotconf/cli --save-dev
```

With Bun:

```bash
bun install @dotconf/config
bun install @dotconf/cli --save-dev
```

## Getting started

dotconf support .conf file with the Hocon specs. Here a short sample:

```conf
# development.conf
{
  env = ${NODE_ENV}
  database {
    provider = "sqlite"
    url      = "file:./dev.db"
  }
}
```

Add dotconf to your package's scripts (next.js project here):

```json
"scripts": {
  "dev": "dotconf -w -c development.conf -- next dev",
  "build": "dotconf -c production.conf -- next build",
  "start": "dotconf -c production.conf -- next start"
}
```

And use it anywhere from your code source:

```ts
import { config } from "@dotconf/config"

console.log(config.env)               // "development"
console.log(config.database.provider) // "sqlite"
console.log(config.database.url)      // "file:./dev.db"
```

# Copyright

&copy; [Christophe Ribeiro](https://christophe.ribeiro.io) under [MIT License](./LICENSE.md).