import styles from './page.module.css';
import { getBlogPieces } from '@/lib/parseBlogPieces';
import BlogPieceList from '@/components/BlogPieceList';

const SCIENCE_SLUGS = [
  'why-we-need-nancy-grace',
  'supersonic-flight',
  'why-we-need-nuclear-propulsion',
];
const TECH_SLUGS = [
  'fedora-is-the-best-penguin',
  'your-second-tech-slug',   // replace with real slugs
  'your-third-tech-slug',
];

export default async function Blog() {
  const pieces = await getBlogPieces();

  const pick = (slugs: string[]) =>
    slugs
      .map((slug) => pieces.find((p) => p.slug === slug))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const science = pick(SCIENCE_SLUGS);
  const tech = pick(TECH_SLUGS);

  return (
    <>
      <div className={styles["Landing"]}>
        <div className={styles["Img"]}></div>
        <div className={styles["triangle"]}>
          <h1>Blog</h1>
        </div>
      </div>

      <div className={styles["spotlight"]}>
        <Spotlight title="SCIENCE" className={styles["science"]} posts={science} />
        <div className="block h-[30vh]"></div>
        <Spotlight title="TECH" className={styles["tech"]} posts={tech} />
      </div>

      <BlogPieceList pieces={pieces} />
    </>
  );
}

function Spotlight({ title, className, posts }: { title: string; className?: string; posts: any[] }) {
  if (posts.length === 0) return null;
  return (
    <div
      className={className}
      style={{ backgroundImage: `url("${posts[0].image}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="my-auto mx-7 inline-flex flex-col backdrop-blur-md backdrop-brightness-75 rounded-3xl">
        <h2 className="text-green font-titles text-6xl">{title}</h2>
        <div className="flex flex-col gap-1 my-4 px-5">
          {posts.map((post) => (
            <a
              key={post.slug}
              className="px-4 transition-transform duration-300 ease-linear hover:scale-101"
              href={`/blog/pieces/${post.slug}`}
            >
              <h3 className="border-b-2 border-gray-900 font-main text-2xl">{post.name}</h3>
              <h4 className="font-main text-sm text-gray-100">
                {post.description} | {post.date}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}