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
      <div 
        className={styles["PieceCard"]}
        style={{ backgroundImage: `url(${piece.image})` }}
      >
        <div className={styles["PieceName"]}>
          <h3>{piece.name}</h3>
        </div>
        <div className={styles["PieceDescription"]}>
          <p>{piece.description}</p>
        </div>
      </div>
    </Link>
  );
}
