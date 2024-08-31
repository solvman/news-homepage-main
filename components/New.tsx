import { newArticles, type ArticleType } from "@/data/data";

function New() {
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
