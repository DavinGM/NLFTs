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
    }
]
