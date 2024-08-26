# Custom Middlewares

::: danger 🚧 WIP
API may change too much. Do not build custom middlewares yet.
:::

```ts
function myMiddleware(): Middleware {
  // = Prepare data =
  const METHOD_NOT_ALLOWED = 'GET'

  return async function ({ next, request, response }) {
    // = Prevent route handler from executing =
    if (request.method === METHOD_NOT_ALLOWED) {
      return new Response('Method not allowed', { status: 405 })
    }

    // = Execute the route handler =
    const response = await next()
    
    // = Modify or validate the response =
    response.headers.set('X-Custom-Header', 'value')

    return response
  }
}
```