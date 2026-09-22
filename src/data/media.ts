export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

export const ABI_HERO = '/media/abi-hero-full.webp'
export const ABI_COVER = '/media/abi-cover.webp'
export const ABI_MENU = '/media/abi-menu.webp'
export const ABI_VIDEO_THUMB = '/media/abi-video-thumb.jpg'

export const ABI_HOME_VIDEO = {
  src: '/videos/hero.webm',
  poster: ABI_VIDEO_THUMB,
  title: 'Arena Breakout Infinite cheat gameplay preview',
  caption:
    'Preview of Arena Breakout Infinite ESP, Aimbot FOV, and loot overlays during a PC raid.',
} as const

function shot(n: number) {
  return `/media/abi-screenshot-${n}.webp`
}

/** Product page gameplay preview carousel (screenshots 1–9). */
export const PRODUCT_PREVIEW_GALLERY = [
  {
    src: shot(1),
    alt: 'Arena Breakout Infinite Aimbot scope ESP with skeleton overlay on PC',
  },
  {
    src: shot(2),
    alt: 'Arena Breakout Infinite Aimbot FOV box and target tracking gameplay',
  },
  {
    src: shot(3),
    alt: 'Arena Breakout Infinite player ESP distance tags and weapon labels',
  },
  {
    src: shot(4),
    alt: 'Arena Breakout Infinite wallhack player boxes through fence and building',
  },
  {
    src: shot(5),
    alt: 'Arena Breakout Infinite ESP boxes with weapon type and loot value tags',
  },
  {
    src: shot(6),
    alt: 'Arena Breakout Infinite scoped combat assist and player ESP highlight',
  },
  {
    src: shot(7),
    alt: 'Arena Breakout Infinite long-range player ESP list during reload',
  },
  {
    src: shot(8),
    alt: 'Arena Breakout Infinite loot ESP item prices and container wallhack',
  },
  {
    src: shot(9),
    alt: 'Arena Breakout Infinite skeleton ESP through sniper scope on target',
  },
] as const

export const PAGE_MEDIA = {
  home: {
    image: ABI_HERO,
    alt: 'Arena Breakout Infinite ESP and Aimbot gameplay banner on PC',
    title: 'Arena Breakout Infinite Cheats',
    caption: 'ESP, Aimbot, wallhack, and loot overlays for ABI raids.',
  },
  product: {
    image: ABI_COVER,
    video: ABI_HOME_VIDEO.src,
    alt: 'Arena Breakout Infinite cheat product — player ESP and Aimbot features',
    title: 'ABI Aimbot, ESP & Wallhack Features',
    caption: 'Full module list for Arena Breakout Infinite on Windows PC.',
    videoTitle: ABI_HOME_VIDEO.title,
    videoDescription: ABI_HOME_VIDEO.caption,
  },
  forums: {
    image: shot(4),
    alt: 'Arena Breakout Infinite player ESP wallhack gameplay screenshot',
    title: 'Arena Breakout Infinite Cheat Forums',
    caption: 'Setup threads for Aimbot, ESP, loot filters, and loader help.',
  },
  reviews: {
    image: shot(2),
    alt: 'Arena Breakout Infinite Aimbot FOV gameplay screenshot for reviews',
    title: 'Arena Breakout Infinite Cheat Reviews',
    caption: 'Buyer feedback on ESP, Aimbot, and loot modules.',
  },
  faq: {
    image: shot(8),
    alt: 'Arena Breakout Infinite loot ESP and container overlay screenshot',
    title: 'Arena Breakout Infinite Cheats FAQ',
    caption: 'Compatibility, pricing, and setup answers for ABI.',
  },
  support: {
    image: shot(6),
    alt: 'Arena Breakout Infinite sniper scope ESP gameplay screenshot',
    title: 'Arena Breakout Infinite Cheat Support',
    caption: 'Loader, delivery, and Windows troubleshooting.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': {
    image: shot(3),
    alt: 'Arena Breakout Infinite cheat feature overview — ESP tags and distance',
    title: 'Arena Breakout Infinite Cheats Features',
    caption: 'Module checklist before checkout.',
  },
  'aimbot-settings': {
    image: shot(1),
    alt: 'Arena Breakout Infinite Aimbot through scope with skeleton ESP',
    title: 'Aimbot Settings for ABI',
    caption: 'FOV, smoothing, and ban-risk habits.',
  },
  'esp-wallhack-guide': {
    image: shot(5),
    alt: 'Arena Breakout Infinite player wallhack boxes with weapon and distance ESP',
    title: 'Player ESP Setup',
    caption: 'Boxes, skeleton, and snapline defaults.',
  },
  'loot-container-esp': {
    image: shot(8),
    alt: 'Arena Breakout Infinite loot ESP showing item prices through walls',
    title: 'Loot & Container ESP',
    caption: 'Price filters and minimum value thresholds.',
  },
  hotkeys: {
    image: shot(7),
    alt: 'Arena Breakout Infinite ESP list overlay during inventory check',
    title: 'ABI Cheat Hotkeys',
    caption: 'Menu and toggle binds after load.',
  },
  'complete-setup': {
    image: shot(9),
    alt: 'Arena Breakout Infinite skeleton ESP through sniper scope',
    title: 'Instructions to Use the Cheats',
    caption: 'End-to-end loader and first-run steps.',
  },
  'windows-setup': {
    image: shot(4),
    alt: 'Arena Breakout Infinite wallhack ESP on outdoor map',
    title: 'Windows Setup for ABI Cheats',
    caption: 'Windows 10/11 prep and overlays.',
  },
  'disable-antivirus': {
    image: ABI_MENU,
    alt: 'Arena Breakout Infinite cheat menu reference artwork',
    title: 'Antivirus Exclusions',
    caption: 'Allowlist the delivery folder before first inject.',
  },
  'stream-proof-setup': {
    image: shot(2),
    alt: 'Arena Breakout Infinite Aimbot FOV box overlay screenshot',
    title: 'Stream-Proof Overlays',
    caption: 'Hide ESP from OBS while playing locally.',
  },
  'game-patch-status': {
    image: ABI_COVER,
    alt: 'Arena Breakout Infinite cheat product artwork after patches',
    title: 'ABI Cheats After a Game Patch',
    caption: 'When to wait for loader updates.',
  },
  'load-status-checklist': {
    image: shot(6),
    alt: 'Arena Breakout Infinite scoped ESP target tracking screenshot',
    title: 'Pre-Load Checklist',
    caption: 'Confirm status before every session.',
  },
  'combat-assist-settings': {
    image: shot(1),
    alt: 'Arena Breakout Infinite combat assist Aimbot reticle on target',
    title: 'Combat Assist Settings',
    caption: 'Smoothness, speed, and report risk.',
  },
  'extraction-loot-guide': {
    image: shot(3),
    alt: 'Arena Breakout Infinite long-range player ESP information overlay',
    title: 'Extraction & Loot Routes',
    caption: 'ESP-first farming and extract timing.',
  },
  'loader-errors': {
    image: ABI_MENU,
    alt: 'Arena Breakout Infinite cheat configuration menu preview',
    title: 'Fix Loader Errors',
    caption: 'Menu not opening and inject failures.',
  },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}

/** @deprecated */
export const DAYZ_HOME_VIDEO = ABI_HOME_VIDEO
