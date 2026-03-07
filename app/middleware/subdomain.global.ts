import { redirectMap } from '~/lib/socials'

export default defineNuxtRouteMiddleware((to) => {
    const url = useRequestURL()
    const host = url.host

    // Only apply restrictions to the 'go' subdomain
    if (host.startsWith('go.')) {
        const isRoot = to.path === '/'
        const isConnectedRoute = to.path.startsWith('/connected/') || to.name === 'connected-slug'

        // 1. Allow root (Vercel redirects this to nlfts.dev anyway)
        if (isRoot) return

        // 2. Allow only valid redirect slugs
        if (isConnectedRoute) {
            const slug = (to.params.slug as string || to.path.split('/').pop() || '').toLowerCase().trim()
            if (redirectMap[slug]) {
                return // Valid redirect, let [slug].vue handle it
            }
        }

        // 3. BLOCK EVERYTHING ELSE: Redirect to main domain
        return navigateTo('https://nlfts.dev', { external: true })
    }
})
