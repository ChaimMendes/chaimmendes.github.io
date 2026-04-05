import { getPortfolioPieces } from '@/lib/parsePortfolioPieces';
import styles from '../../page.module.css';
import Link from 'next/link';

export const dynamicParams = true;

interface PiecePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PiecePage({ params }: PiecePageProps) {
  const { slug } = await params;
  
  const pieces = await getPortfolioPieces();
  console.log('Available pieces:', pieces.map(p => p.slug));
  console.log('Looking for slug:', slug);
  
  const piece = pieces.find(p => p.slug === slug);

  if (!piece) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Piece not found</h1>
        <p>Looking for: {slug}</p>
        <p>Available: {pieces.map(p => p.slug).join(', ')}</p>
        <Link href="/portfolio">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className={styles['PieceDetail']}>
      <Link href="/portfolio" className={styles['BackLink']}>← Back to Portfolio</Link>
      
      <div className={styles['PieceHeader']}>
        <img src={piece.image} alt={piece.name} className={styles['PieceImage']} />
      </div>

      <div className={styles['PieceContent']}>
        <h1>{piece.name}</h1>
        <p className={styles['PieceIntro']}>{piece.description}</p>
        
        <div className={styles['MarkdownContent']}>
          {piece.content.split('\n').map((line, i) => {
            if (line.startsWith('# ')) {
              return <h2 key={i}>{line.replace('# ', '')}</h2>;
            } else if (line.startsWith('## ')) {
              return <h3 key={i}>{line.replace('## ', '')}</h3>;
            } else if (line.trim()) {
              return <p key={i}>{line}</p>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
