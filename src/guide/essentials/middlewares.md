# Middlewares

Middlewares are functions that can be used to modify requests and responses. By default, [Toruk provides multiple middlewares](/guide/built-in-middlewares/index) to help you handle common tasks.

Middlewares can be registered at the **app level** or at the **route level**, by using `use` keyword.

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { cors } from 'https://deno.land/x/toruk/middlewares/mod.ts'

// Affects all routes
new App({
  routes: [ /* ... */ ],
  use: [
    cors(),
  ]
}).serve()

// Affects only '/user' route
new App({
  routes: [
    {
      path: '/user',
      handler: () => new Response('Hello World!'),
      use: [
        cors(),
      ]
    }
  ]
}).serve()
```

## Execution

They are executed in the order they are registered and can run before or/and after the route handler.

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { cors, jwt } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [ /* ... */ ],
  use: [
    cors(),
    jwt(),
  ]
}).serve()
```

![Middlewares execution](/middleware-execution.svg)

## Nesting

Child routes share middlewares with their parent uses them. This allows for common patterns as **protected routes**.

```ts
{
  path: '/private',
  children: [{
      path: '/user',
      handler: () => new Response('User Profile')
  }],
  use: [
    jwt(),
  ]
}
```

## Parameters

Middlewares can emit parameters that can be used by the route **handler**.

Each middleware provides typings. You can combine them with `Handler` to strongly type the parameters.

```ts
import type { Handler } from 'https://deno.land/x/toruk/mod.ts'
import type { UseJWT } from 'https://deno.land/x/toruk/middlewares/mod.ts'

const handler: Handler<'/private/me/username', [ UseJWT ]> = async ({ jwt }) => {
  return Response.json({ username: jwt.payload.username })
}
```
