# Quick Start

## The application instance

The application starts by creating a new application instance:

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'

const app = new App({
  /* app config */
})
```

## First route

Our app instance allows us to register routes:

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'

const app = new App()

app.get('/', () => new Response('Hello World!'))
```

## Serving the app

The application won't be exposed until we `.serve()` it. This method will expose same API as [Deno.ServeOptions](https://docs.deno.com/api/deno/~/Deno.ServeOptions) because it's used under the hood:

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'

const app = new App()

app.get('/', () => new Response('Hello World!'))

app.serve()
```
