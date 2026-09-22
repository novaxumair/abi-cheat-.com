import { ABI_HOME_VIDEO } from '../data/media'

type ProductPreviewProps = {
  className?: string
  wide?: boolean
}

export function ProductPreview({ className = '', wide = false }: ProductPreviewProps) {
  return (
    <div className={`video-brand-mask border border-z-soft/20 ${className}`.trim()}>
      <div
        className={`relative w-full overflow-hidden ${wide ? 'aspect-video lg:aspect-[21/9]' : 'aspect-video'}`}
      >
        <video
          className="video-brand-crop absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={ABI_HOME_VIDEO.poster}
          aria-label={ABI_HOME_VIDEO.title}
        >
          <source src={ABI_HOME_VIDEO.src} type="video/webm" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-z-bg/50 via-transparent to-z-bg/20" />
        <div className="video-brand-blur video-brand-blur--top" aria-hidden />
        <div className="video-brand-blur" aria-hidden />
      </div>
      <p className="sr-only">{ABI_HOME_VIDEO.title}</p>
    </div>
  )
}
