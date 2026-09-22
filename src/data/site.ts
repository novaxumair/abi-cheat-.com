import { ABI_OG } from './images'
import { PAGE_OG } from './og'

export const SITE_URL = 'https://abicheat.com'
export const SITE_NAME = 'ABI Cheats'
export const SITE_HOST = 'abicheat.com'

/** Stable site identity — Organization, WebSite, and about copy (not per-route). */
export const SITE_PURPOSE =
  'Arena Breakout Infinite Cheats is a single-game site focused on Arena Breakout Infinite cheats, tools, and related gameplay features. The site is dedicated to Arena Breakout Infinite only and does not sell cheats for other games.'

/** Site-wide subject terms for schema knowsAbout (max 6). */
export const SITE_ABOUT = [
  'Arena Breakout Infinite Cheats',
  'Arena Breakout Infinite',
  'Arena Breakout Infinite cheat features',
  'Arena Breakout Infinite ESP',
  'Arena Breakout Infinite gameplay tools',
  'Arena Breakout Infinite cheat setup',
] as const

/** Product JSON-LD description (features + delivery — distinct from SITE_PURPOSE). */
export const PRODUCT_SCHEMA_DESCRIPTION =
  'Windows PC cheat menu for Arena Breakout Infinite with aimbot, player and AI ESP, loot and container overlays, configs, and digital license delivery.'

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = ABI_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'Arena Breakout Infinite Cheats | Features, Tools & Updates',
    description:
      'Single-game site for Arena Breakout Infinite cheats on PC — feature overview, loader status, setup guides, player reviews, and forums. Plans from $35.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Arena Breakout Infinite gameplay showing in-game overlay on PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'Arena Breakout Infinite Cheats Forum | Community Discussions',
    description:
      'Community discussions and setup guides for Arena Breakout Infinite cheats — aimbot tuning, ESP defaults, loot overlays, loader help, and patch-day checklists.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'Arena Breakout Infinite gameplay screenshot from forum guides',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Arena Breakout Infinite Cheats Reviews | Player Feedback',
    description:
      'Player feedback on Arena Breakout Infinite cheats — ESP accuracy, aimbot smoothing, loot filters, and loader updates after ABI patches.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'Arena Breakout Infinite gameplay screenshot referenced in reviews',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Arena Breakout Infinite Cheats FAQ | Common Questions',
    description:
      'Answers about Arena Breakout Infinite cheats — Windows requirements, features, pricing from $35, digital delivery, loader status, and setup steps.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'Arena Breakout Infinite loot overlay screenshot from FAQ',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'Arena Breakout Infinite Cheats Support | Loader & Delivery',
    description:
      'Help with Arena Breakout Infinite cheat orders, license delivery, Windows loader steps, antivirus exclusions, and common menu errors.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'Arena Breakout Infinite cheat support and loader help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'Arena Breakout Infinite Cheats | Features & Setup',
    description:
      'Full Arena Breakout Infinite cheat feature list for PC — aimbot, player ESP, loot overlays, configs, system requirements, and checkout from $35.',
    path: '/abi-cheats',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'Arena Breakout Infinite product page showing ESP and aimbot gameplay',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Arena Breakout Infinite Cheats',
  h2Features: 'What You Get With Arena Breakout Infinite Cheats',
  h2HowItWorks: 'How Arena Breakout Infinite Cheats Works',
  h2Reviews: 'Arena Breakout Infinite Cheats Reviews',
  h2Forums: 'Arena Breakout Infinite Cheats Forum',
  h2Faq: 'Arena Breakout Infinite Cheats FAQ',
  h2Access: 'Ready when you are',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
