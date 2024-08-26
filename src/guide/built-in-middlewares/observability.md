# Observability

## Logger

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { logger } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [ /* ... */ ],
  use: [
    logger(),
  ]
}).serve()
```

### Output

```ansi
[0;36m[GET][0;0m	/	[0;32m200 OK[0;0m	5ms
[0;36m[POST][0;0m	/	[0;32m200 OK[0;0m	1ms
[0;36m[DELETE][0;0m	/	[0;32m200 OK[0;0m	3ms
[0;36m[GET][0;0m	/users	[0;31m404 Not Found[0;0m	0ms
[0;36m[OPTIONS][0;0m	/users	[0;31m404 Not Found[0;0m	0ms
[0;36m[DELETE][0;0m	/users/1	[0;31m404 Not Found[0;0m	0ms
```

## Timing

The [Server-Timing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing) middleware provides performance metrics in the response headers.

::: warning 🚧 WIP
This feature is under development.
:::

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { timing } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [{
    path: '/',
    handler: ({ timing: { startTime, endTime, setMetric } }) => {

      // Start a timer
      startTime('db')
      const data = await db.findMany(/* ... */)
      endTime('db')

      // Set a custom metric
      setMetric('region', 'europe-west3')

      // Custom metrics measured in milliseconds
      setMetric('custom', 23.8, 'My custom Metric')

      return Response.json({ data })
    }
  }],
  use: [
    timing(),
  ]
}).serve()
```

### Output

<!-- TODO -->
--
