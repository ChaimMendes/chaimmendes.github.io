'use client';

import Link from 'next/link';
import { PortfolioPiece } from '@/lib/parsePortfolioPieces';
import styles from '@/app/portfolio/page.module.css';

interface PortfolioPieceCardProps {
  piece: PortfolioPiece;
}

export default function PortfolioPieceCard({ piece }: PortfolioPieceCardProps) {
  return (
    <Link href={`/portfolio/pieces/${piece.slug}`}>
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
