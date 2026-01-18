import { client } from "@/sanity/lib/client";
import { PRODUCT_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck, Truck } from "lucide-react";

export default async function ProductDetailsContent({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;
    const product = await client.fetch(PRODUCT_BY_ID_QUERY, { id }, { cache: 'no-store' });

    if (!product) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <h2 className="text-2xl text-muted-foreground">عذراً، المنتج غير متوفر حالياً.</h2>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-secondary/30 shadow-luxury group">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
                {product.isBestseller && (
                    <Badge className="absolute top-6 right-6 bg-pink-accent text-white px-4 py-1.5 border-none text-sm">
                        الأكثر مبيعاً
                    </Badge>
                )}
            </div>

            <div className="flex flex-col text-right space-y-8">
                <div>
                    <span className="text-pink-accent font-bold tracking-widest text-sm mb-3 block uppercase">
                        {product.category}
                    </span>
                    <h1 className="text-5xl font-black text-primary leading-tight mb-4">
                        {product.name}
                    </h1>
                    <span className="text-4xl font-black text-primary">${product.price}</span>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary border-r-4 border-pink-accent pr-3">الوصف</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                        {product.description}
                    </p>
                </div>

                {product?.sizes && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">المقاسات المتاحة:</h3>
                        <div className="flex flex-wrap gap-3 flex-row-reverse justify-end">
                            {product.sizes?.map((size: string) => (
                                <div
                                    key={size}
                                    className="px-8 py-4 bg-background border-2 border-border/50 rounded-2xl font-bold text-primary flex items-center gap-2 shadow-sm transition-all hover:border-pink-accent"
                                >
                                    <Check size={18} className="text-pink-accent" />
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-border/50">
                    <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-2xl">
                        <Truck className="text-pink-accent" size={24} />
                        <div className="text-right">
                            <p className="font-bold text-primary text-sm">شحن سريع</p>
                            <p className="text-xs text-muted-foreground">خلال 2-4 أيام عمل</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-secondary/20 rounded-2xl">
                        <ShieldCheck className="text-pink-accent" size={24} />
                        <div className="text-right">
                            <p className="font-bold text-primary text-sm">ضمان الجودة</p>
                            <p className="text-xs text-muted-foreground">قطن طبيعي 100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}