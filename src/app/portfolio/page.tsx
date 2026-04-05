import styles from './page.module.css';
import { getPortfolioPieces } from '@/lib/parsePortfolioPieces';
import PortfolioPieceCard from '@/components/PortfolioPieceCard';

export default async function Portfolio() {
    const pieces = await getPortfolioPieces();

    return (
        <>
        <div className={styles["Landing"]}>
            <video src="/Media/DesertPlanet-Extended.mp4" autoPlay loop muted></video>
            <div className={styles["videoOverlay"]}>
                <h3>It's not <b>Mars.</b></h3>
                <h3>Welcome to my <b>Universe.</b></h3>
            </div>
        </div>
        <div className={styles["Portfolio"]}>
            <h1>Portfolio</h1>
            <div className={styles["Pieces"]}>
                {pieces.map((piece) => (
                    <PortfolioPieceCard key={piece.slug} piece={piece} />
                ))}
            </div>
        </div>
        </>
    )
}