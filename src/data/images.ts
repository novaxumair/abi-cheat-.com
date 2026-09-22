import { ABI_COVER, ABI_HERO, ABI_MENU } from './media'
import { ABI_OG, getOgImageForPath, PAGE_OG } from './og'

export { ABI_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const ABI_PRODUCT_HERO = ABI_HERO
export const ABI_PRODUCT_COVER = ABI_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  abi: {
    alt: 'Arena Breakout Infinite cheats product artwork for PC',
    title: 'Arena Breakout Infinite Cheats Product Details',
    caption: 'ABI Aimbot, ESP, wallhack, loot ESP, and container overlays',
    heroAlt: 'Arena Breakout Infinite ESP and Aimbot features',
    heroTitle: 'Arena Breakout Infinite Cheats Features',
    heroCaption: 'Review ABI Aimbot, ESP, wallhack, and loader status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: ABI_HERO,
    og: PAGE_OG.home,
    alt: 'Arena Breakout Infinite cheats ESP and Aimbot artwork for PC',
    title: 'Arena Breakout Infinite Cheats',
    caption: 'ABI Aimbot, ESP, wallhack, and loot overlays overview.',
  },
  forums: {
    src: '/media/abi-screenshot-4.webp',
    og: PAGE_OG.forums,
    alt: 'Arena Breakout Infinite wallhack ESP gameplay screenshot',
    title: 'Arena Breakout Infinite Cheat Guides',
    caption: 'Setup, Aimbot, and ESP forum threads.',
  },
  reviews: {
    src: '/media/abi-screenshot-2.webp',
    og: PAGE_OG.reviews,
    alt: 'Arena Breakout Infinite Aimbot gameplay review screenshot',
    title: 'Arena Breakout Infinite Cheat Reviews',
    caption: 'Feature feedback from ABI players.',
  },
  faq: {
    src: '/media/abi-screenshot-8.webp',
    og: PAGE_OG.faq,
    alt: 'Arena Breakout Infinite loot ESP screenshot for FAQ',
    title: 'Arena Breakout Infinite Cheats FAQ',
    caption: 'Pricing, features, and setup answers.',
  },
  support: {
    src: '/media/abi-screenshot-6.webp',
    og: PAGE_OG.support,
    alt: 'Arena Breakout Infinite scoped ESP support screenshot',
    title: 'Arena Breakout Infinite Cheat Support',
    caption: 'Delivery, loader, and Windows help.',
  },
  product: {
    src: ABI_COVER,
    og: PAGE_OG.product,
    alt: 'Arena Breakout Infinite Aimbot ESP and wallhack product artwork',
    title: 'Arena Breakout Infinite Cheats Features',
    caption: 'Product details for ABI Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return ABI_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return ABI_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
