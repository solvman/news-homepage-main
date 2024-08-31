import { useFeaturedArticle } from "@/hooks/useFeaturedArticle";
import Image from "next/image";

function Hero() {
  const featuredArticle = useFeaturedArticle();

  return (
    <section className="gap-site-clamp-24px-30px flex flex-col lg:col-span-2 lg:grid lg:grid-cols-subgrid">
      <div className="lg:col-span-2">
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
      </div>
      <h2 className="heading-xl">{featuredArticle.title}</h2>
      <div>
        <p className="mb-site-clamp-24px-30px">{featuredArticle.exerpt}</p>
        <a
          href={featuredArticle.url}
          className="transtion inline-block bg-accent px-8 py-3 font-site-bold uppercase tracking-[4.375px] text-primary-foreground duration-300 hover:bg-primary-foreground hover:text-primary"
        >
          Read more
        </a>
      </div>
    </section>
  );
}
export default Hero;
