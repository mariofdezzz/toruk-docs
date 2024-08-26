# Authentication

## Basic Authentication

Secure your endpoints with [Basic Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic).

::: warning 🚧 WIP
This feature is under development.
:::

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { basicAuth } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [{
    path: '/',
    handler: () => new Response('Hello World!'),
    use: [
      basicAuth({
        username: 'toruk',
        password: 'pandora'
      })
    ]
  }
}).serve()
```

## Bearer Authentication

This middleware can apply [Bearer Authentication](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#bearer) to your endpoints.

::: warning 🚧 WIP
This feature is under development.
:::

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { bearerAuth } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [{
    path: '/',
    handler: () => new Response('Hello World!'),
    use: [
      bearerAuth({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      })
    ]
  }]
}).serve()
```

## JWT Auth

This middleware provides authentication by verifying a JSON Web Token (JWT) in the request header. The middleware will check for an Authorization header if the cookie option is not set.

::: warning 🚧 WIP
This feature is under development.
:::

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { jwt } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [{
    path: '/',
    handler: ({ jwt }) => new Response('Welcome ' + jwt.payload.name),
    use: [
      jwt({
        secret: 'your-secret',
      })
    ]
  }]
}).serve()
```

 
## Firebase Auth <Badge type="warning" text="3rd party" />

Validate Firebase token in the request header. 

::: warning 🚧 WIP
This feature is under development.
:::

### Usage

```ts
import { App } from 'https://deno.land/x/toruk/mod.ts'
import { firebase } from 'https://deno.land/x/toruk/middlewares/mod.ts'

new App({
  routes: [{
    path: '/',
    handler: ({ jwt }) => new Response('Welcome ' + jwt.payload.name),
    use: [
      firebase({
        projectId: 'my-project',
      })
    ]
  }]
}).serve()
```

You can strongly type the firebase **token payload** by extending the `UseFirebase` type:

```ts
import type { Handler } from 'https://deno.land/x/toruk/mod.ts'
import type { UseFirebase } from 'https://deno.land/x/toruk/middlewares/mod.ts'

type ExtendedUseFirebase = UseFirebase<{
  email: string 
}>

export const handler: Handler<'/', [ ExtendedUseFirebase ]> = ({ jwt }) => {
  return new Response('Welcome ' + jwt.payload.email)
}
```