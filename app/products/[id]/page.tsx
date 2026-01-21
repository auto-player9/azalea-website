import { Suspense } from "react";
import ProductDetailsContent from "@/components/products/ProductDetailsContent";
import ProductDetailsSkeleton from "@/components/products/ProductDetailsSkeleton"; 
import { PRODUCT_BY_ID_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = await client.fetch(PRODUCT_BY_ID_QUERY, { id });
    
    return {
        title: product ? `${product.name} | Azalea` : "منتجاتنا",
        description: product?.description || "وصف المنتج الفاخر"
    };
}
export default function ProductDetailsPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16 font-expo" dir="rtl">
            <Suspense fallback={<ProductDetailsSkeleton />}>
                <ProductDetailsContent params={params} />
            </Suspense>
        </div>
    );
}