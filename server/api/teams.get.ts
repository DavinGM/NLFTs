export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const token = config.githubToken

    if (!token) {
        throw createError({
            statusCode: 500,
            statusMessage: 'GITHUB_TOKEN is not set'
        })
    }

    const org = 'NLFTs'

    try {
        // 1. Fetch organization members
        const members = await $fetch(`https://api.github.com/orgs/${org}/members`, {
            headers: {
                Authorization: `token ${token}`,
                'User-Agent': 'Nuxt-App'
            }
        }) as any[]

        // 2. Fetch detailed info for each member
        const detailedMembers = await Promise.all(members.map(async (member) => {
            const user = await $fetch(`https://api.github.com/users/${member.login}`, {
                headers: {
                    Authorization: `token ${token}`,
                    'User-Agent': 'Nuxt-App'
                }
            }) as any

            // 3. Fetch social accounts
            const socialAccounts = await $fetch(`https://api.github.com/users/${member.login}/social_accounts`, {
                headers: {
                    Authorization: `token ${token}`,
                    'User-Agent': 'Nuxt-App'
                }
            }) as any[]

            return {
                login: user.login,
                name: user.name || user.login,
                bio: user.bio,
                avatar_url: user.avatar_url,
                html_url: user.html_url,
                blog: user.blog,
                email: user.email,
                socials: socialAccounts.map(s => ({
                    provider: s.provider,
                    url: s.url
                })),
                // Simple check for sponsors
                has_sponsors: user.has_sponsors || false,
                sponsor_url: `https://github.com/sponsors/${user.login}`
            }
        }))

        return detailedMembers
    } catch (error: any) {
        console.error('Error fetching GitHub teams:', error.message || error)

        // If in development, return mock data to prevent blocking local development
        if (process.dev) {
            console.warn('Returning mock data for teams in development mode due to fetch failure.')
            return [
                {
                    login: 'davingm',
                    name: 'Davin Mantiri',
                    bio: 'Lead Maintainer of NLFTs',
                    avatar_url: 'https://github.com/davingm.png',
                    html_url: 'https://github.com/davingm',
                    blog: 'https://nlfts.dev',
                    email: null,
                    socials: [{ provider: 'github', url: 'https://github.com/davingm' }],
                    has_sponsors: true,
                    sponsor_url: 'https://github.com/sponsors/davingm'
                }
            ]
        }

        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch GitHub teams'
        })
    }
})
