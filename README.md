# Betterconf

Use .conf configuration files in your JavaScript/TypeScript project.

> **Warning**
> This project is currently a work in progress and not usable at all yet.

## Installation

With NPM:

```bash
npm install betterconf
```

With PNPM:

```bash
pnpm install betterconf
```

With Bun:

```bash
bun install betterconf
```

## Getting started

betterconf support .conf file with the Hocon specs. Here a short sample with dev and prod conf:

```conf
# config.dev.conf
{
  env = ${NODE_ENV} # development
  database {
    provider = "sqlite"
    url      = "file:./dev.db"
  }
}
```

```conf
# config.prod.conf
{
  env = ${NODE_ENV} # production
  database {
    provider = "postgres"
    url      = "postgresql://postgres:postgres@localhost:5432/postgres"
  }
}
```

Add betterconf to your package's scripts (Next.js example here):

```json
"scripts": {
  "dev": "betterconf run -r='config.dev.conf' -w='src/config.ts' -- next dev",
  "build": "betterconf run -r='config.prod.conf' -w='src/config.ts' -- next build",
  ...
}
```

And use it anywhere from your code source:

```ts
import { config } from "./config"

console.log(config.env)               // "development"
console.log(config.database.provider) // "sqlite"
console.log(config.database.url)      // "file:./dev.db"
```

# Copyright

&copy; [Christophe Ribeiro](https://christophe.ribeiro.io) under [MIT License](./LICENSE.md).