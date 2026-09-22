import { ABI_HERO, ABI_HOME_VIDEO } from '../data/media'

type VideoBgProps = {
  /** Poster while video loads */
  image?: string
  imageAlt?: string
}

/** Full-bleed hero video — muted loop, cover fit (no letterboxing). */
export function VideoBg({
  image = ABI_HERO,
  imageAlt = 'Arena Breakout Infinite ESP and Aimbot gameplay',
}: VideoBgProps) {
  return (
    <div className="hero-video-wrap absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute inset-0 z-0 bg-z-bg" aria-hidden />
      <video
        className="hero-video-bg absolute inset-0 z-[1] h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={image}
        aria-label={ABI_HOME_VIDEO.title}
      >
        <source src={ABI_HOME_VIDEO.src} type="video/webm" />
      </video>
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className="sr-only"
      />
      <div className="hero-video-tint pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="hero-video-tint-glow pointer-events-none absolute inset-0 z-[2]" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-z-bg via-z-bg/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 z-[3] h-24 bg-gradient-to-b from-z-bg/70 to-transparent" />
    </div>
  )
}
