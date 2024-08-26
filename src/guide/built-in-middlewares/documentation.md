# Documentation

## Swagger UI <Badge type="warning" text="3rd" />

The [Swagger UI](https://swagger.io/tools/swagger-ui/) middleware provides a simple way to document your API.

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { swagger } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [ /* ... */ ],
  use: [
    swagger(),
  ]
}).serve()
```
