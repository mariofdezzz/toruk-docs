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
