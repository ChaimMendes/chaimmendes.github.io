import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPiece {
  slug: string;
  name: string;
  description: string;
  image: string;
  content: string;
  date?: string;
  priority?: number;
  tags: string[];
}

export async function getBlogPieces(): Promise<BlogPiece[]> {
  const piecesDir = path.join(process.cwd(), 'src/app/blog/pieces');
  
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
      priority: typeof data.priority === 'number' && Number.isFinite(data.priority) ? data.priority : 999,
      date: typeof data.date === 'string' ? data.date : new Date().toISOString(),
      tags: Array.isArray(data.tags)
        ? data.tags.filter((tag: unknown): tag is string => typeof tag === 'string')
        : [],
    };
    
    console.log('Parsed piece:', piece.slug);
    
    return piece;
  });

  console.log('Final pieces:', pieces.map(p => p.slug));
  
  // Sort by priority (lower number = higher priority)
  pieces.sort((a, b) => (a.priority || 999) - (b.priority || 999));
  
  return pieces;
}
