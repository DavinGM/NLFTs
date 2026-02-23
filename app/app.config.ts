export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'NLFTs Community'
  },
  header: {
    title: 'NLFTs',
    to: '/',
    logo: {
      alt: 'NLFTs Logo',
      light: '',
      dark: ''
    },
    search: false,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nlfts',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': 'https://nlfts.dev/connected/discord',
      'target': '_blank',
      'aria-label': 'Discord'
    }]
  },
  footer: {
    credits: `Dibuat dengan Nuxt.js • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-bluesky',
      'to': 'https://bsky.app/profile/nlfts.dev',
      'target': '_blank',
      'aria-label': 'Bluesky'
    }, {
      'icon': 'i-simple-icons-discord',
      'to': '/connected/discord',
      'target': '_blank',
      'aria-label': 'Discord'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nlfts',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-whatsapp',
      'to': '/connected/whatsapp',
      'target': '_blank',
      'aria-label': 'WhatsApp'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://nlfts.dev/connected/instagram',
      'target': '_blank',
      'aria-label': 'Instagram'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': '#',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nlfts/docs-nlfts/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nlfts/docs-nlfts',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Dokumentasi',
        to: '/getting-started',
        target: '_blank'
      }]
    }
  }
})
