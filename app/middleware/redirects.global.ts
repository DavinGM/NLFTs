import { redirectMap } from '~/lib/socials'

export default defineNuxtRouteMiddleware((to) => {
    // 1. Get the path without leading/trailing slashes
    const slug = to.path.replace(/^\/|\/$/g, '').toLowerCase().trim()

    // 2. exclude known routes that might be mistaken for slugs
    // 'connected' is the target prefix, we should avoid infinite loops
    if (to.path.startsWith('/connected/') || to.name === 'connected-slug') {
        return
    }

    // 3. check if it's a valid redirect slug
    if (redirectMap[slug]) {
        // redirect to clean /connected/slug to show the countdown UI
        return navigateTo(`/connected/${slug}`)
    }
})
