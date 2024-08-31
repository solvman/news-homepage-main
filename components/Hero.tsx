import { useFeaturedArticle } from "@/hooks/useFeaturedArticle";

function Hero() {
  const featuredArticle = useFeaturedArticle();

  return (
    <section>
      <h2 className="heading-xl">{featuredArticle.title}</h2>
      <p>{featuredArticle.exerpt}</p>
      <a href={featuredArticle.url}>Read more</a>
    </section>
  );
}
export default Hero;
