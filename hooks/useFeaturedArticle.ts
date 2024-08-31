import { type ArticleType, articles } from "@/data/data";

export function useFeaturedArticle(): ArticleType {
  return articles.find((article) => article.featured) || articles[0];
}
