import Link from 'next/link';
import type { BlogPiece } from '@/lib/parseBlogPieces';

interface BlogPieceCardProps {
  piece: BlogPiece;
}

export default function BlogPieceCard({ piece }: BlogPieceCardProps) {
  return (
    <Link
      href={`/blog/pieces/${piece.slug}`}
      className="blog-card-reveal group flex h-full min-h-36 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition duration-200 hover:-translate-y-1 hover:border-green/50 hover:bg-white/[0.07] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green motion-reduce:transform-none"
    >
      <img
        src={piece.image}
        alt=""
        className="h-auto w-24 shrink-0 object-cover transition-transform duration-300 group-hover:scale-105 sm:w-28"
      />
      <div className="flex min-w-0 flex-1 flex-col items-start p-4">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {piece.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-green/30 px-2 py-0.5 text-xs text-green"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="line-clamp-2 text-base font-semibold leading-snug text-white sm:text-lg">
          {piece.name}
        </h2>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/70">
          {piece.description}
        </p>
        <time className="mt-auto pt-3 text-xs text-white/50">{piece.date}</time>
      </div>
    </Link>
  );
}
