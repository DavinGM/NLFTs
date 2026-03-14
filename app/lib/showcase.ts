export interface Project {
    title: string
    description: string
    image: string
    tech: string[]
    link: string
    demo?: string
    status: string
    contributors: string[]
}

export const projects: Project[] = [
    {
        title: 'Jurnalistik',
        description: 'Website resmi Jurnalistik SMK Assalaam Bandung yang dibangun dengan Nuxt Content v4 dan GSAP .',
        image: '/showcase/jurnalistik.png',
        tech: ['Nuxt 4', 'GSAP', 'Nuxt UI', 'vue-pixel'],
        link: 'https://github.com/NLFTs/Jurnalistik',
        demo: 'https://jurnalistik.nlfts.dev',
        status: 'Released',
        contributors: [
            'https://avatars.githubusercontent.com/u/228851591?v=4',
            'https://avatars.githubusercontent.com/u/204519754?s=130&v=4',
            'https://avatars.githubusercontent.com/u/228840381?s=130&v=4'
        ]
    },
    {
        title: 'NLFTs Docs',
        description: 'Dokumentasi resmi komunitas NLFTs dengan fitur pencarian AI dan integrasi MCP.',
        image: '/showcase/docs.png',
        tech: ['Nuxt 4', 'Nuxt UI', 'Nuxt Content', 'Tailwind'],
        link: 'https://github.com/nlfts/docs-nlfts',
        demo: 'https://nlfts.dev',
        status: 'Released',
        contributors: [
            'https://avatars.githubusercontent.com/u/228851591?v=4',
            'https://avatars.githubusercontent.com/u/225441519?v=4'
        ]
    },
    {
        title: 'TuxJS',
        description: 'Framework JavaScript minimalis yang dirancang untuk performa tinggi dan DX yang luar biasa.',
        image: '/showcase/tuxjs.png',
        tech: ['TypeScript', 'Reactivity', 'Compiler'],
        link: 'https://github.com/nlfts/tuxjs',
        status: 'In Progress',
        contributors: [
            'https://avatars.githubusercontent.com/u/228851591?v=4'
        ]
    }
]
