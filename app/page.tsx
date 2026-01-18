import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import BestsellersWrapper from "@/components/home/BestsellersWrapper"; 
import ProductSkeleton from "@/components/products/ProductSkeleton";
import Collections from "@/components/home/Collections";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div className="py-20 px-4"><ProductSkeleton /></div>}>
        <BestsellersWrapper />
      </Suspense>

      <Collections />
      <About />
      <Contact />
    </main>
  );
}