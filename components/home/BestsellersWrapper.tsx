import { client } from "@/sanity/lib/client";
import { BESTSELLERS_QUERY } from "@/sanity/lib/queries";
import Bestsellers from "./Bestsellers";

export default async function BestsellersWrapper() {
  const products = await client.fetch(
    BESTSELLERS_QUERY, 
    {}, 
    { cache: 'no-store' } 
  );

  if (!products || products.length === 0) return null;

  return <Bestsellers products={products} />;
}