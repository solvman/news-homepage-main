import { type ArticleType } from "@/data/data";
import { usePopularArticles } from "@/hooks/usePopularArticles";
import Image from "next/image";

function Popular() {
  const popularArticles = usePopularArticles();
  return (
    <section className="gap-site-clamp-24px-30px flex flex-col lg:grid lg:grid-cols-3">
      <h2 className="sr-only">Popular articles</h2>
      {popularArticles.map((article: ArticleType, index) => (
        <article key={article.id} className="gap-site-md flex flex-row">
          {article.img?.src.thumbnail && (
            <Image
              src={article.img.src.thumbnail}
              alt={article.img.alt}
              className="w-[100px]"
            />
          )}
          <div className="flex h-full flex-1 flex-col justify-between">
            <span className="heading-md block leading-none text-accent">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <h3 className="heading-xs">
              <a
                href={article.url}
                className="transition duration-200 hover:text-accent"
              >
                {article.title}
              </a>
            </h3>
            <p>{article.exerpt}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
export default Popular;
