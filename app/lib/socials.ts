export interface SocialLink {
    name: string
    description: string
    icon: string
    color: string
    link: string
    label: string
    status: string
}

export const socialLinks: SocialLink[] = [
    {
        name: 'Discord',
        description: 'Gabung di server pusat komunitas untuk diskusi teknis, tanya jawab, dan networking real-time.',
        icon: 'i-simple-icons-discord',
        color: 'blue',
        link: '/connected/discord',
        label: 'Join Server',
        status: 'Online'
    },
    {
        name: 'GitHub',
        description: 'Kontribusi langsung ke repositori open-source kami. Fork, kembangkan, dan kirim Pull Request.',
        icon: 'i-simple-icons-github',
        color: 'neutral',
        link: '/connected/github',
        label: 'Start Contributing',
        status: 'Public'
    },
    {
        name: 'WhatsApp',
        description: 'Grup khusus untuk informasi cepat, pengumuman event, dan diskusi ringan antar anggota.',
        icon: 'i-simple-icons-whatsapp',
        color: 'green',
        link: '/connected/whatsapp',
        label: 'Join Group',
        status: 'Active'
    },
    {
        name: 'Email',
        description: 'Kirim pesan langsung kepada tim kami untuk pertanyaan bisnis, kerjasama, atau dukungan teknis.',
        icon: 'i-lucide-mail',
        color: 'indigo',
        link: '/connected/email',
        label: 'Send Email',
        status: 'Official'
    }
]

export const redirectMap: Record<string, string> = {
    'discord': 'https://discord.gg/DYfWzfTUHV',
    'whatsapp': 'https://chat.whatsapp.com/CsT9hYFZUmz6NRFJzZ3yhj?mode=gi_t',
    'github': 'https://github.com/nlfts',
    'email': 'https://talks@nlfts.dev'
}
