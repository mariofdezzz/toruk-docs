# Error Handling

## Resource Not Found

If a resource could not be found, the server should respond with a `404 Not Found` *Response*.

In order to preserve the HTTP protocol, **you must not change** this behavior. Besides, you could do so.

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'

new App({
  onNotFound: () => new Response('Not Found', { status: 404 })
}).serve()
```

::: warning 🚧 WIP
This feature is under development.
:::

## Exception

By default, any error **thrown** will result in a `500` status code *Result*. If you would like to handle *Exceptions* you can do it globally by using Deno's native `onError` function.

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'

new App().serve({
  onError: (err) => new Response(`Error: ${err.message}`, { status: 500 })
})
```
