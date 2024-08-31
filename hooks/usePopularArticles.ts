import { type ArticleType, articles } from "@/data/data";

export function usePopularArticles(): ArticleType[] {
  return articles.sort((a, b) => b.rank - a.rank).slice(0, 3);
}
