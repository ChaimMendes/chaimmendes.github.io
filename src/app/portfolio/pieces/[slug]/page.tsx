import { getPortfolioPieces } from '@/lib/parsePortfolioPieces';
import styles from '../../page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageCarousel from '@/components/ImageCarousel';

export const dynamicParams = true;

interface PiecePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Parse markdown content and render with carousel support
function parseAndRenderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Check for carousel syntax: [CAROUSEL: image1.jpg, image2.jpg]
    if (line.trim().startsWith('[CAROUSEL:')) {
      const carouselMatch = line.match(/\[CAROUSEL:\s*(.+?)\]/);
      if (carouselMatch) {
        const imageString = carouselMatch[1];
        const images = imageString
          .split(',')
          .map((img) => img.trim())
          .filter((img) => img.length > 0);

        elements.push(
          <ImageCarousel
            key={`carousel-${i}`}
            images={images}
            alt="Portfolio image"
          />
        );
        i++;
        continue;
      }
    }

    // Handle headers (# through ######)
    const headerMatch = line.match(/^(#+)\s*(.*)/);
    if (headerMatch) {
      const hashCount = headerMatch[1].length;
      const headerText = headerMatch[2];
      const headerLevel = Math.min(hashCount + 1, 6);

      switch (headerLevel) {
        case 1:
          elements.push(<h1 key={`h1-${i}`}>{headerText}</h1>);
          break;
        case 2:
          elements.push(<h2 key={`h2-${i}`}>{headerText}</h2>);
          break;
        case 3:
          elements.push(<h3 key={`h3-${i}`}>{headerText}</h3>);
          break;
        case 4:
          elements.push(<h4 key={`h4-${i}`}>{headerText}</h4>);
          break;
        case 5:
          elements.push(<h5 key={`h5-${i}`}>{headerText}</h5>);
          break;
        case 6:
          elements.push(<h6 key={`h6-${i}`}>{headerText}</h6>);
          break;
      }
    } else if (line.trim()) {
      elements.push(
        <p key={`p-${i}`}>{line}</p>
      );
    }

    i++;
  }

  return elements;
}

export default async function PiecePage({ params }: PiecePageProps) {
  const { slug } = await params;
  
  const pieces = await getPortfolioPieces();
  console.log('Available pieces:', pieces.map(p => p.slug));
  console.log('Looking for slug:', slug);
  
  const piece = pieces.find(p => p.slug === slug);

  if (!piece) {
    notFound();
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
          {parseAndRenderContent(piece.content)}
        </div>
      </div>
    </div>
  );
}
