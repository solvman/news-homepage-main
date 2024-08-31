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
        <Hero />
        <New />
        <Popular />
      </main>
    </>
  );
}
