# Validation

## CORS

The CORS middleware enables [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for your API.

::: warning 🚧 WIP
This feature is under development.
:::

### Options

##### <Badge type="tip" text="Optional" /> origin: `string` | `string[]`

The value of "Access-Control-Allow-Origin" CORS header. The default is `*`.

##### <Badge type="tip" text="Optional" /> allowHeaders: `string[]`

The value of "Access-Control-Allow-Headers" CORS header.

##### <Badge type="tip" text="Optional" /> allowMethods: `string[]`

The value of "Access-Control-Allow-Methods" CORS header. The default is `['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']`.

##### <Badge type="tip" text="Optional" /> exposeHeaders: `string[]`

The value of "Access-Control-Expose-Headers" CORS header.

##### <Badge type="tip" text="Optional" /> maxAge: `number`

The value of "Access-Control-Max-Age" CORS header.

##### <Badge type="tip" text="Optional" /> credentials: `boolean`

The value of "Access-Control-Allow-Credentials" CORS header.

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { cors } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [ /* ... */ ],
  use: [
    cors({
      origin: 'https://example.com',
      allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
      maxAge: 600,
      credentials: true,
    }),
  ]
}).serve()
```

## Zod <Badge type="warning" text="3rd" />

Validate the request body using [Zod](https://github.com/colinhacks/zod). This middleware **does not propagate** over route nesting.

If used with [Swagger UI](/guide/built-in-middlewares/documentation#swagger-ui) middleware, it will provide body types.

::: warning 🚧 WIP
This feature is under development.
:::

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { zod } from 'https://deno.land/x/toruk/middlewares/mod.ts'
import { z } from 'https://deno.land/x/zod/mod.ts'

const schema = z.object({
  name: z.string(),
  age: z.number(),
})

new App({
  routes: [{
    path: '/',
    handler: ({ body }) => new Response('Hello ' + body.name + '!'),
    use: [
      zod({
        schema,
        onError: ({ error }) => {
          // Handle the error
        }
      })
    ]
  }],
}).serve()
```

With separated handler:

```ts
import type { Handler } from 'https://deno.land/x/toruk/mod.ts'
import type { UseZod } from 'https://deno.land/x/toruk/middlewares/mod.ts'
import { z } from 'https://deno.land/x/zod/mod.ts'

const schema = z.object({
  name: z.string(),
  age: z.number(),
})

export const handler: Handler<'/', [ 
    UseZod<typeof schema>
  ]> = async ({ body }) => {
  return new Response('Hello ' + body.name + '!')
}
```
