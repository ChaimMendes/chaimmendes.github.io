import styles from './page.module.css';
import { getBlogPieces } from '@/lib/parseBlogPieces';
import BlogPieceCard from '@/components/BlogPieceCard';

export default async function Blog() {
    const pieces = await getBlogPieces();

    return (
        <>
            <div className={styles["Landing"]}>
                <video src="/Media/blogvideo.mp4" autoPlay loop muted></video>
                <div className={styles["videoOverlay"]}>
                    <h3>The <b>Blog.</b></h3>
                    <h3>of <b>Stuff(ing)</b></h3>
                </div>
            </div>
            <div className={styles["Blog"]}>
                <h1>Blog</h1>
                <div className={styles["Pieces"]}>
                    {pieces.map((piece) => (
                        <BlogPieceCard key={piece.slug} piece={piece} />
                    ))}
                </div>
            </div>
        </>
    )
}