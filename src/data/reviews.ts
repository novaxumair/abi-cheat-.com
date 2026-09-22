export type Review = {
  id: string
  author: string
  role: string
  game: string
  rating: number
  datePublished: string
  body: string
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'jayk',
    role: 'Trios main',
    game: 'ABI',
    rating: 5,
    datePublished: '2026-09-14',
    body: 'Status on the product page matched what I got in menu. Player ESP held after the last ABI patch — glad I waited for Active before loading.',
  },
  {
    id: '2',
    author: 'nova',
    role: 'Loot runner',
    game: 'ABI',
    rating: 5,
    datePublished: '2026-09-13',
    body: 'Bought for loot ESP with minimum price filter. Not opening every grey drawer on Farm changed my whole economy.',
  },
  {
    id: '3',
    author: 'rift',
    role: 'Squad lead',
    game: 'ABI',
    rating: 4,
    datePublished: '2026-09-13',
    body: 'No fake multi-game catalog. Honest Updating vs Active flips are what I wanted before buying arena breakout infinite cheats.',
  },
  {
    id: '4',
    author: 'kiln',
    role: 'Duos',
    game: 'ABI',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'They rebuilt when other sites still pushed dead loaders. We check status, then checkout — ESP solid around Valley warehouses.',
  },
  {
    id: '5',
    author: 'moss',
    role: 'Night raids',
    game: 'ABI',
    rating: 5,
    datePublished: '2026-09-12',
    body: 'Menu was straightforward. Stream-proof on, skeleton ESP muted colors. Setup forum covered antivirus so first launch worked.',
  },
  {
    id: '6',
    author: 'vale',
    role: 'New buyer',
    game: 'ABI',
    rating: 5,
    datePublished: '2026-09-11',
    body: 'Weekly key first was the right call. Instant delivery and live status sold me before monthly.',
  },
  {
    id: '7',
    author: 'drake',
    role: 'Solo PMC',
    game: 'ABI',
    rating: 4,
    datePublished: '2026-09-11',
    body: 'Distance readouts on player ESP were accurate. Aimbot smoothness took ten minutes to dial — forums helped.',
  },
  {
    id: '8',
    author: 'sora',
    role: 'Ranked player',
    game: 'ABI',
    rating: 4,
    datePublished: '2026-09-10',
    body: 'Combat mode off, ESP only — fewer reports in ranked. Would like faster patch notes on site but loader always caught up within a day.',
  },
]

export function getReviewsAggregate() {
  const count = REVIEWS.length
  const sum = REVIEWS.reduce((acc, r) => acc + r.rating, 0)
  const avg = count ? (sum / count).toFixed(1) : '5.0'
  return {
    ratingValue: avg,
    reviewCount: String(count),
    bestRating: '5',
    worstRating: '1',
  }
}
