# Performance

## Body Limit

The **Body Limit** middleware limits the size of the request body.

This middleware first uses the value of the [Content-Length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) header in the request, if present. If it is not set, it reads the body in the stream and executes an error handler if it is larger than the specified file size.

::: warning 🚧 WIP
This feature is under development.
:::

### Options

##### <Badge type="danger" text="Required" /> maxSize: `number`

The maximum size of the request body in bytes.

##### <Badge type="tip" text="Optional" /> onError: `Handler<'/', [ UseBodyLimit ]>`

<!-- FIXME: tip badge color -->
The error handler to be invoked if the specified file size is exceeded.

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { bodyLimit } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [ /* ... */ ],
  use: [
    bodyLimit({ 
      maxSize: 50 * 1024 // 50kb
    }),
  ]
}).serve()
```

## Cache

## ETag

## Compress
