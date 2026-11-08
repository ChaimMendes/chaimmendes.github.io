'use client';

import { useMemo, useState } from 'react';
import BlogPieceCard from '@/components/BlogPieceCard';
import type { BlogPiece } from '@/lib/parseBlogPieces';

interface BlogPieceListProps {
  pieces: BlogPiece[];
}

type SortOrder = 'date' | 'trending';

function getDateValue(date: string | undefined): number {
  if (!date) {
    return Number.NEGATIVE_INFINITY;
  }

  const timestamp = Date.parse(date.replace(/\b(\d{1,2})(st|nd|rd|th)\b/gi, '$1'));
  return Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp;
}

export default function BlogPieceList({ pieces }: BlogPieceListProps) {
  const [sortOrder, setSortOrder] = useState<SortOrder>('date');
  const sortedPieces = useMemo(
    () =>
      [...pieces].sort((a, b) =>
        sortOrder === 'trending'
          ? (a.priority ?? 999) - (b.priority ?? 999)
          : getDateValue(b.date) - getDateValue(a.date),
      ),
    [pieces, sortOrder],
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16" aria-labelledby="all-articles-heading">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="all-articles-heading" className="text-2xl font-titles font-semibold text-white sm:text-3xl">
            All articles
          </h2>
          <p className="mt-1 font-main text-sm text-white/60">And, in the blog today...</p>
        </div>
        <label className="flex items-center gap-3 text-sm text-white/70">
          Sort by
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value === 'trending' ? 'trending' : 'date')}
            className="rounded-lg border border-white/20 bg-neutral-900 px-3 py-2 text-white outline-none focus-visible:border-green focus-visible:ring-2 focus-visible:ring-green/30"
          >
            <option value="date">Newest</option>
            <option value="trending">Trending</option>
          </select>
        </label>
      </div>
      {sortedPieces.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedPieces.map((piece) => (
            <BlogPieceCard key={piece.slug} piece={piece} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white/70">
          No articles are available yet.
        </p>
      )}
    </section>
  );
}
