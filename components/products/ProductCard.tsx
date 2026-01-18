import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

interface Product {
    id: string | number;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
    description: string;
    sizes: string[];
    isBestseller?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/products/${product.id}`}>
            <div className="bg-background rounded-3xl overflow-hidden shadow-luxury border border-border/50 transition-all duration-300 hover:shadow-xl group">

                <div className="relative h-80 w-full bg-secondary/50 overflow-hidden">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {product.isBestseller && (
                        <div className="absolute top-4 right-4">
                            <Badge className="bg-pink-accent hover:bg-pink-accent text-white border-none px-3 py-1 shadow-sm">
                                الأكثر مبيعاً
                            </Badge>
                        </div>
                    )}
                </div>

                <div className="p-6 text-right font-expo">

                    <p className="text-xs text-pink-accent font-bold mb-2 tracking-wide">
                        {product.category}
                    </p>
                    <h4 className="text-xl font-bold text-primary mb-2 line-clamp-1">
                        {product.name}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                    </p>

                    <div className="flex flex-row-reverse flex-wrap gap-2 mb-6">
                        {product?.sizes && product.sizes.map((size) => (
                            <span
                                key={size}
                                className="text-[11px] px-3 py-1.5 bg-secondary text-primary border border-border/40 rounded-xl font-bold transition-colors group-hover:border-pink-accent/30"
                            >
                                {size}
                            </span>
                        ))}
                    </div>

                    <div className="pt-5 border-t border-border/50 flex justify-between items-center flex-row-reverse">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-muted-foreground uppercase leading-none mb-1">Price</span>
                            <span className="text-2xl font-black text-primary tracking-tighter">
                                ${product.price}
                            </span>
                        </div>
                        <div className="w-8 h-[2px] bg-pink-soft rounded-full" />
                    </div>
                </div>
            </div>
        </Link>
    );
}