import { type ArticleType } from "@/data/data";
import { usePopularArticles } from "@/hooks/usePopularArticles";
import Image from "next/image";

function Popular() {
  const popularArticles = usePopularArticles();
  return (
    <section>
      <h2 className="sr-only">Popular articles</h2>
      {popularArticles.map((article: ArticleType, index) => (
        <article key={article.id}>
          {article.img?.src.thumbnail && (
            <Image src={article.img.src.thumbnail} alt={article.img.alt} />
          )}
          <span className="heading-md text-accent">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <h3 className="heading-xs">{article.title}</h3>
          <p>{article.exerpt}</p>
        </article>
      ))}
    </section>
  );
}
export default Popular;
