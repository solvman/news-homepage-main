import { useFeaturedArticle } from "@/hooks/useFeaturedArticle";
import Image from "next/image";

function Hero() {
  const featuredArticle = useFeaturedArticle();

  return (
    <section>
      {featuredArticle.img?.src.desktop && (
        <Image
          src={featuredArticle.img?.src.desktop}
          alt={featuredArticle.img.alt}
          className="hidden md:block"
          priority
        />
      )}
      {featuredArticle.img?.src.mobile && (
        <Image
          src={featuredArticle.img?.src.mobile}
          alt={featuredArticle.img.alt}
          className="block md:hidden"
          priority
        />
      )}
      <h2 className="heading-xl">{featuredArticle.title}</h2>
      <p>{featuredArticle.exerpt}</p>
      <a href={featuredArticle.url}>Read more</a>
    </section>
  );
}
export default Hero;
