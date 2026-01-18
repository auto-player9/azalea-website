import { Suspense } from "react";
import FiltersSidebar from "@/components/products/FiltersSidebar";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductSkeleton from "@/components/products/ProductSkeleton";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const categories: string[] = ["أطقم لحاف", "مخدات", "مفارش", "لباد"];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 font-expo" dir="rtl">

            <div className="mb-10 text-right">
                <h1 className="text-4xl font-black text-primary mb-2">المنتجات</h1>
                <p className="text-muted-foreground">اكتشف مجموعتنا الفاخرة من الكتان والمفارش</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                
                <Suspense fallback={<div className="w-64 h-96 bg-secondary/20 animate-pulse rounded-2xl" />}>
                    <FiltersSidebar categories={categories} />
                </Suspense>

                <div className="flex-1">

                    <Suspense fallback={<ProductSkeleton />}>
                        <ProductsGrid searchParams={searchParams} />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}