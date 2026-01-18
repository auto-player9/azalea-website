import { Suspense } from "react";
import ProductDetailsContent from "@/components/products/ProductDetailsContent";
import ProductDetailsSkeleton from "@/components/products/ProductDetailsSkeleton"; 

export default async function ProductDetailsPage({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;

    return (
        <div className="max-w-7xl mx-auto px-6 py-16 font-expo" dir="rtl">
            <Suspense fallback={<ProductDetailsSkeleton />}>
                <ProductDetailsContent id={id} />
            </Suspense>
        </div>
    );
}
