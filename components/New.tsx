import { type ArticleType } from "@/data/data";
import { useRecentArticles } from "@/hooks/useRecentArtilces";

function New() {
  const newArticles = useRecentArticles();

  return (
    <section className="px-site-clamp-20px-24px py-site-clamp-24px-32px bg-primary-inverted text-primary-inverted-foreground-muted">
      <h2 className="heading-lg text-accent-inverted">New</h2>
      {newArticles.map((article: ArticleType) => (
        <article key={article.id}>
          <h3 className="heading-sm text-primary-inverted-foreground">
            {article.title}
          </h3>
          <p>{article.exerpt}</p>
        </article>
      ))}
    </section>
  );
}
export default New;
