# Handlers

Toruk uses native [Deno.ServeHandler](https://docs.deno.com/api/deno/~/Deno.ServeHandler) to handle requests, except parameters come in object shape.

Handler functions receive an object with **request** and **info** properties. Expects to return a `Response` object and can be async functions. Additionaly, you can use `Handler` type to help you define your handlers.

```ts
import { Handler } from 'https://deno.land/x/toruk/mod.ts'

export const handler: Handler = async function ({ request }) {
  const origin = request.headers.get('origin')

  return new Response(`Hello ${origin}!`)
}
```

## Response

Following Deno's best practices, handler functions must return a `Response` object. This means you should be familiar composing responses using [Response API](https://docs.deno.com/deploy/api/runtime-response/).

```ts
// Text response
return new Response('Hello world!')

// JSON response
return Response.json({ hello: 'world' })

// Redirect response
return Response.redirect('/')
```

::: tip 💬 Info
For more complex responses like streams, visit Deno docs.
:::

## Parameters

Paths are matched using [URLPattern](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API) object. This allows different patterns, one of them being parameters *(named groups)*. Parameters are **strongly typed** by default.

```ts
import { Handler } from 'https://deno.land/x/toruk/mod.ts'

export const handler: Handler<'/user/:id'> = async function ({ params }) {
  return new Response(`Hello user Nº ${params.id}!`)
}
```

### Optional parameters

Parameters can be optional:

```ts
import { Handler } from 'https://deno.land/x/toruk/mod.ts'

export const handler: Handler<'/user/:id?'> = async function ({ params }) {
  return new Response(`Hello user Nº ${params.id ?? 'no id provided'}!`)
}
```

## Wildcards

If you want to ignore part of the path, you can use wildcards pattern `*`.

```ts
import { Handler } from 'https://deno.land/x/toruk/mod.ts'

export const handler: Handler<'/user/*/name'> = async function () {
  return new Response('Who are you?')
}
```

## RegExp

Besides regular expressions are allowed, you might check [Regex matchers limitations](https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API#regex_matchers_limitations) for edge cases.

```ts
import { Handler } from 'https://deno.land/x/toruk/mod.ts'

// Only matched if `id` is a number, else 404
export const handler: Handler<'/user/:id(\\d+)'> = async function () {
  return new Response(`Hello user Nº ${params.id}!`)
}
```
