# Routing Syntax

Inspired by well-known frameworks like [Express](https://expressjs.com/), Toruk uses function chaining to register routes. This makes it easier to start working if you are familiar with it. Besides, it has it's downsides.

## Object syntax

To improve code splitting, Toruk provides object routing syntax.

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'

new App({
  router: {
    routes: [
      {
        path: '/',
        handler: () => new Response('Hello World!')
      }
    ]
  }
}).serve()
```

While this might seem complex at first, it gets sense when you take advantage of the full API provided:

```ts
import { App, Router, Handler } from 'https://deno.land/x/toruk/mod.ts'

// routes/index.ts
const handler: Handler = function () {
  return new Response('Hello World!')
}

// router.ts
const router = new Router({
  routes: [
    {
      path: '/',
      handler
    }
  ]
})

// app.ts
new App({
  router
}).serve()
```

::: warning ❗ Attention
This is the recommended syntax to write clean code and strongly typed APIs. We will be using it in the following examples.
:::
