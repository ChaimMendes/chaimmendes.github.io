'use client';

import Link from 'next/link';
import { BlogPiece } from '@/lib/parseBlogPieces';
import styles from '@/app/blog/page.module.css';

interface BlogPieceCardProps {
  piece: BlogPiece;
}

export default function BlogPieceCard({ piece }: BlogPieceCardProps) {
  return (
    <Link href={`/blog/pieces/${piece.slug}`}>
      <div className={styles["PieceCard"]}>
        <div className={styles["PieceCardContent"]}>
          <h1>{piece.name}</h1>
          <p>{piece.date}</p>
          <p>{piece.description}</p>
        </div>
        <div className={styles["PieceCardImage"]} style={{ backgroundImage: `url(${piece.image})` }} />
      </div>
    </Link>
  );
}
