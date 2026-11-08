import styles from './page.module.css';
import { getBlogPieces } from '@/lib/parseBlogPieces';
import BlogPieceList from '@/components/BlogPieceList';

export default async function Blog() {
    const pieces = await getBlogPieces();
    const SciencePost1 = pieces.find((piece) => piece.slug === 'supersonic-flight');
    const SciencePost2 = pieces.find((piece) => piece.slug === 'supersonic-flight');
    const SciencePost3 = pieces.find((piece) => piece.slug === 'supersonic-flight');

    const SpacePost1 = pieces.find((piece) => piece.slug === 'why-we-need-nancy-grace');
    const SpacePost2 = pieces.find((piece) => piece.slug === 'why-we-need-nuclear-propulsion');
    const SpacePost3 = pieces.find((piece) => piece.slug === 'why-we-need-nancy-grace');

    const TechPost1 = pieces.find((piece) => piece.slug === 'why-we-need-nancy-grace');
    const TechPost2 = pieces.find((piece) => piece.slug === 'supersonic-flight');
    const TechPost3 = pieces.find((piece) => piece.slug === 'supersonic-flight');

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
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href={`/blog/pieces/${SciencePost1.slug}`}>
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost1.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost1.description}|{SciencePost1?.date}</h4>
                            </a>
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href={`/blog/pieces/${SciencePost2.slug}`}>
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost2.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost2.description}|{SciencePost1?.date}</h4>
                            </a>
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href={`/blog/pieces/${SciencePost3.slug}`}>
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{SciencePost3.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{SciencePost3.description}|{SciencePost1?.date}</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='block h-[30vh]'></div>
                <div className={styles["tech"]} style={{ backgroundImage: `url("${TechPost1.image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='my-auto mx-7 inline-flex flex-col backdrop-blur-md backdrop-brightness-75 rounded-3xl'>
                        <h2 className='text-green font-titles text-6xl'>TECH</h2>
                        <div className="flex-column gap-1 my-4 px-5">
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href={`/blog/pieces/${TechPost1.slug}`}>
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{TechPost1.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{TechPost1.description}|{TechPost1?.date}</h4>
                            </a>
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href={`/blog/pieces/${TechPost2.slug}`}>
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{TechPost2.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{TechPost2.description}|{TechPost1?.date}</h4>
                            </a>
                            <a className="px-4  transition-transform duration-300 ease-linear hover:scale-101" href={`/blog/pieces/${TechPost3.slug}`}>
                                <h3 className="border-b-2 border-gray-900 font-main text-2xl">{TechPost3.name}</h3>
                                <h4 className='font-main text-x text-gray-100'>{TechPost3.description}|{TechPost1?.date}</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPieceList pieces={pieces} />
        </>
    )
}