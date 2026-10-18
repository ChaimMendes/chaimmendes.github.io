import styles from './page.module.css';
import { getBlogPieces } from '@/lib/parseBlogPieces';
import BlogPieceCard from '@/components/BlogPieceCard';

export default async function Blog() {
    const pieces = await getBlogPieces();
    const SciencePost1 = pieces.find((piece) => piece.slug === 'supersonic-flight');
    const SciencePost2 = pieces.find((piece) => piece.slug === 'supersonic-flight');
    const SciencePost3 = pieces.find((piece) => piece.slug === 'supersonic-flight');

    return (
        <>
            {/* Landing */}
            <div className={styles["Landing"]}>
                <div className={styles["Img"]}></div>
                <div className={styles["triangle"]}>
                    <h1>Blog</h1>
                </div>
            </div>
            {/* ---------------Spotlight Articles----------------- */}
            <div className={styles["spotlight"]}>
                <div className={styles["science"]} style={{ backgroundImage: `url("${SciencePost1.image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='my-auto mx-7 inline-flex flex-col backdrop-blur-md backdrop-brightness-75 rounded-3xl'>
                        <h2 className='text-green font-titles text-6xl'>SCIENCE</h2>
                        <div className="flex-column gap-1 my-4 px-5">
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href="/blog/supersonic-flight">
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost1.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost1.description}|{SciencePost1?.date}</h4>
                            </a>
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href="/blog/supersonic-flight">
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost1.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost1.description}|{SciencePost1?.date}</h4>
                            </a>
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href="/blog/supersonic-flight">
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost1.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost1.description}|{SciencePost1?.date}</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='block h-[30vh]'></div>
                <div className={styles["space"]} style={{ backgroundImage: `url("${SciencePost1.image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='my-auto mx-7 inline-flex flex-col backdrop-blur-md backdrop-brightness-75 rounded-3xl'>
                        <h2 className='text-green font-titles text-6xl'>SPACE</h2>
                        <div className="flex-column gap-1 my-4 px-5">
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href="/blog/supersonic-flight">
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost1.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost1.description}|{SciencePost1?.date}</h4>
                            </a>
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href="/blog/supersonic-flight">
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost1.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost1.description}|{SciencePost1?.date}</h4>
                            </a>
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href="/blog/supersonic-flight">
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost1.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost1.description}|{SciencePost1?.date}</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["allPieces"]}>
                <div className={styles["Pieces"]}>
                    {pieces.map((piece) => (
                        <BlogPieceCard key={piece.slug} piece={piece} />
                    ))}
                </div>
            </div>
        </>
    )
}