import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import FiltersSidebar from "@/components/products/FiltersSidebar";
import ProductCard from "@/components/products/ProductCard";

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    description: string;
    sizes: string[];
    isBestseller: boolean;
}

export const runtime = 'edge';

export default async function ShopPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const filters = await searchParams;

    const params = {
        category: typeof filters.category === "string" ? filters.category.split(",") : null,
        size: typeof filters.size === "string" ? filters.size : null,
        minPrice: Number(filters.minPrice) || 0,
        maxPrice: Number(filters.maxPrice) || 2000,
    };

    const products: Product[] = await client.fetch(PRODUCTS_QUERY, params, {
        next: { revalidate: 60 },
    });

    const categories: string[] = ["أطقم لحاف", "مخدات", "مفارش", "لباد"];

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 font-expo" dir="rtl">
            <div className="mb-10 text-right">
                <h1 className="text-4xl font-black text-primary mb-2">المنتجات</h1>
                <p className="text-muted-foreground">اكتشف مجموعتنا الفاخرة من الكتان والمفارش</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <FiltersSidebar categories={categories} />
                <div className="flex-1">
                    {products.length > 0 ? (
                        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-24 bg-secondary/30 rounded-3xl border-2 border-dashed border-border/50">
                            <div className="bg-background p-5 rounded-full shadow-luxury mb-4">
                                <svg className="w-10 h-10 text-pink-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary">لا توجد نتائج!</h3>
                            <p className="text-muted-foreground mt-2">جرب تغيير معايير البحث أو مسح الفلاتر.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}