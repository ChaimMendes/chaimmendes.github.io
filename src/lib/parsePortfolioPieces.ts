import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface PortfolioPiece {
  slug: string;
  name: string;
  description: string;
  image: string;
  content: string;
  priority?: number;
}

export async function getPortfolioPieces(): Promise<PortfolioPiece[]> {
  const piecesDir = path.join(process.cwd(), 'src/app/portfolio/pieces');
  
  console.log('Reading pieces from:', piecesDir);
  
  if (!fs.existsSync(piecesDir)) {
    console.log('Directory does not exist!');
    return [];
  }

  const allFiles = fs.readdirSync(piecesDir);
  console.log('All files in directory:', allFiles);
  
  const files = allFiles.filter(file => {
    const filePath = path.join(piecesDir, file);
    const stat = fs.statSync(filePath);
    const isFile = stat.isFile();
    const isMd = file.endsWith('.md');
    console.log(`${file}: isFile=${isFile}, isMd=${isMd}`);
    return isFile && isMd;
  });
  
  console.log('MD files found:', files);
  
  const pieces = files.map(file => {
    const filePath = path.join(piecesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const piece = {
      slug: file.replace('.md', ''),
      name: data.name || 'Untitled',
      description: data.description || '',
      image: data.image || '/default-image.jpg',
      content: content,
      priority: data.priority || 999,
    };
    
    console.log('Parsed piece:', piece.slug);
    
    return piece;
  });

  console.log('Final pieces:', pieces.map(p => p.slug));
  
  // Sort by priority (lower number = higher priority)
  pieces.sort((a, b) => (a.priority || 999) - (b.priority || 999));
  
  return pieces;
}
