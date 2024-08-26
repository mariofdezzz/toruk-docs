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
            { text: 'Handlers', link: '/guide/essentials/handlers' },
            { text: 'Error Handling', link: '/guide/essentials/error-handling' },
            { text: 'Middlewares', link: '/guide/essentials/middlewares' },
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Custom Middlewares', link: '/guide/advanced/custom-middlewares' },
          ]
        },
        {
          text: 'Built-in Middlewares',
          link: '/guide/built-in-middlewares',
          items: [
            { text: 'Authentication', link: '/guide/built-in-middlewares/authentication' },
            { text: 'Documentation', link: '/guide/built-in-middlewares/documentation' },
            { text: 'Observability', link: '/guide/built-in-middlewares/observability' },
            { text: 'Performance', link: '/guide/built-in-middlewares/performance' },
            { text: 'Validation', link: '/guide/built-in-middlewares/validation' },
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
