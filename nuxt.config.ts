// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://nlfts.dev'
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit',
    '@nuxtjs/supabase'
  ],

  supabase: {
    redirect: false
  },

  devtools: {
    enabled: true
  },

  colorMode: {
    preference: 'dark'
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false,
      failOnError: false,
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://nlfts.dev/',
    title: 'NLFTs Community',
    description: 'Wadah kolaboratif bagi para pengembang framework dan tech stack modern.',
    full: {
      title: 'NLFTs Community - Full Documentation',
      description: 'Dokumentasi lengkap untuk komunitas NLFTs.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'NLFTs Docs'
  }
})
