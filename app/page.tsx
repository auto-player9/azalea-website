import Hero from "@/components/home/Hero";
import Bestsellers from "@/components/home/Bestsellers";
import { client } from "@/sanity/lib/client";
import { BESTSELLERS_QUERY } from "@/sanity/lib/queries";
import Collections from "@/components/home/Collections";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

async function getBestsellers() {
  const data = await client.fetch(BESTSELLERS_QUERY);
  return data;
}

export default async function Home() {
  const products = await getBestsellers();

  return (
    <main>
      <Hero />
      <Bestsellers products={products} />
      <Collections />
      <About />
      <Contact />
    </main>
  );
}