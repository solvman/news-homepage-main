import { type ArticleType } from "@/data/data";
import { useRecentArticles } from "@/hooks/useRecentArtilces";

function New() {
  const newArticles = useRecentArticles();

  return (
    <section>
      <h2>New</h2>
      {newArticles.map((article: ArticleType) => (
        <article key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.exerpt}</p>
        </article>
      ))}
    </section>
  );
}
export default New;
