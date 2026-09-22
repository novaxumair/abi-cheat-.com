export type GameStatus = 'Active' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is Arena Breakout Infinite cheats only — no other titles. */
export const GAMES: Game[] = [
  { slug: 'abi', name: 'Arena Breakout Infinite', status: 'Active', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-cheats`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  return lower.endsWith('-cheats') ? lower.slice(0, -7) : lower
}

export const PRODUCT_FEATURE_GROUPS = [
  {
    name: 'Aimbot options',
    items: [
      'Enable Akimbo',
      'Visible Check',
      'Ignore Knocked',
      'Draw Target Line',
      'Draw FOV',
      'Max. Distance',
      'Custom Keybind for Mouse',
      'Aimbot Filter',
      'Aimbot Smoothness',
      'Aimbot Speed',
      'Aimbot FOV',
    ],
  },
  {
    name: 'Visual options',
    items: [
      'Player ESP',
      'AI ESP',
      'Enable',
      'Inventory List',
      'Box',
      'Distance',
      'Name',
      'Team Index',
      'Weapon Type',
      'View Direction',
      'Health Bar',
      'Head Circle',
      'Snaplines',
      'Skeleton',
      'Inventory Price',
      'Level',
      'Side',
    ],
  },
  {
    name: 'World visual options',
    items: [
      'Enable Player Corpse ESP',
      'Enable AI Corpse ESP',
      'Price',
      'Max Distance',
      'Minimum Price',
    ],
  },
  {
    name: 'Misc options',
    items: [
      'Crosshair',
      'Font Size',
      'Combat Mode',
      'Create config',
      'Save config',
      'Load Config',
      'Delete Config',
    ],
  },
] as const

export const GUIDE_FEATURES = [
  {
    name: 'Aimbot & combat assist',
    text: 'Configurable Aimbot with FOV, smoothing, speed, visible checks, and custom mouse binds — tuned for ABI firefights without locking through solid cover when checks are on.',
  },
  {
    name: 'Player & AI ESP',
    text: 'Boxes, skeletons, names, weapon type, health bars, and team index for PMCs and scavs — see contacts through warehouses and stairwells before you commit.',
  },
  {
    name: 'Loot & container wallhack',
    text: 'Item ESP with price filters, minimum value thresholds, and container highlights so high-value pulls stand out on Farm, Valley, and Northridge runs.',
  },
  {
    name: 'Corpse & extraction intel',
    text: 'Player and AI corpse ESP with price tags — recover kits safely and spot leftover loot after firefights.',
  },
  {
    name: 'Combat mode & configs',
    text: 'Save raid, PvP, and looting profiles — load configs per map or squad role without rebuilding the menu every session.',
  },
  {
    name: 'Stream-friendly overlays',
    text: 'Stream-proof mode keeps ESP and Aimbot overlays off common capture paths while you still see them locally.',
  },
  {
    name: 'Windows PC support',
    text: 'Built for Arena Breakout Infinite on Windows 10 and 11 via Steam, Epic, Microsoft Store, and the official launcher.',
  },
  {
    name: 'Patch-synced loader',
    text: 'We publish Active or Updating status after ABI patches so you load only when the current build matches the game client.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
