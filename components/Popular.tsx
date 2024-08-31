import { ArticleType, popularArticles } from "@/data/data";

function Popular() {
  return (
    <section>
      <h2 className="sr-only">Popular articles</h2>
      {popularArticles.map((article: ArticleType, index) => (
        <article key={article.id}>
          <span>{(index + 1).toString().padStart(2, "0")}</span>
          <h3>{article.title}</h3>
          <p>{article.exerpt}</p>
        </article>
      ))}
    </section>
  );
}
export default Popular;
