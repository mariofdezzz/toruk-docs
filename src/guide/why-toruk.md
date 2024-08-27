# Why Toruk?

*Deno* has a lot of tooling from the npm ecosystem, but current APIs doesn't provide strong typings and strong separation of concerns (for file structure). On the other hand, *Deno* has simplified http server a lot, but routing is not out of the box (yet), besides there is really powerful tools such as **URLPattern** which makes it easy to create a routing system.

While Deno is working on [std routing methods](https://jsr.io/@std/http/doc/~/route), I asked my self how would a good API look like and I came up with Toruk. Inspired by [Hono](https://github.com/honojs/hono), Toruk was built **Deno's first**, and provides strong type system wich will be easy to export to other runtimes.
