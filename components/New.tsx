import { type ArticleType } from "@/data/data";
import { useRecentArticles } from "@/hooks/useRecentArtilces";

function New() {
  const newArticles = useRecentArticles();

  return (
    <section className="px-site-clamp-20px-24px py-site-clamp-24px-32px bg-primary-inverted text-primary-inverted-foreground-muted">
      <h2 className="heading-lg mb-9 text-accent-inverted">New</h2>
      <div className="divide-y divide-primary-foreground-muted">
        {newArticles.map((article: ArticleType) => (
          <article key={article.id} className="py-8 first:pt-0 last:pb-0">
            <h3 className="heading-sm mb-2 text-primary-inverted-foreground">
              <a
                href={article.url}
                className="transition duration-200 hover:text-accent-inverted"
              >
                {article.title}
              </a>
            </h3>
            <p>{article.exerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export default New;
