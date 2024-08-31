import { type ArticleType, articles } from "@/data/data";

export function useRecentArticles(): ArticleType[] {
  const sortedArticles = articles.sort((a, b) => {
    return new Date(b.published).getTime() - new Date(a.published).getTime();
  });

  return sortedArticles.slice(0, 3);
}
