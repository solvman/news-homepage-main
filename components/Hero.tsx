import { heroArticle } from "@/data/data";

function Hero() {
  return (
    <section>
      <h2 className="heading-xl">{heroArticle.title}</h2>
      <p>{heroArticle.exerpt}</p>
      <a href={heroArticle.url}>Read more</a>
    </section>
  );
}
export default Hero;
