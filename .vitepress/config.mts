import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  title: 'Toruk',
  description: 'Uncomplicate API',

  head: [
    ['link', { rel: 'icon', type: 'image/webp', href: '/toruk-logo.webp' }],
  ],

  themeConfig: {
    logo: {
      src: '/toruk-logo.webp', width: 24, height: 24
    },

    nav: [
      { text: 'Guide', link: '/guide' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Why Toruk?', link: '/guide/why-toruk' },
            { text: 'Quick Start', link: '/guide/' },
          ]
        },
        {
          text: 'Essentials',
          items: [
            { text: 'Routing Syntax', link: '/guide/essentials/routing-syntax' },
            { text: 'Routes', link: '/guide/essentials/routes' },
            { text: 'Handlers', link: '/guide/essentials/handlers' },
            { text: 'Middlewares', link: '/guide/essentials/middlewares' },
            { text: 'Error Handling', link: '/guide/essentials/error-handling' },
          ]
        }
      ],
      '/examples/': [
        // TODO
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present, Mario Ferrero Fernández'
    }
  }
})
