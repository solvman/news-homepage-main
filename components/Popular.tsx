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
          <div className="flex flex-1 flex-col">
            <span className="heading-md text-accent">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <h3 className="heading-xs">{article.title}</h3>
            <p>{article.exerpt}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
export default Popular;
