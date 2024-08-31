import Header from "@/components/Header";
import Hero from "@/components/Hero";
import New from "@/components/New";
import Popular from "@/components/Popular";

export default function Home() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <h1 className="sr-only">News homepage</h1>
        <div className="gap-site-clamp-24px-30px mb-14 flex flex-col lg:mb-16 lg:grid lg:grid-cols-3">
          <Hero />
          <New />
        </div>
        <Popular />
      </main>
    </>
  );
}
