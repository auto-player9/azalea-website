import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import OrderForm from '../OrderForm';

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
        <div className='bg-background rounded-3xl overflow-hidden shadow-luxury border border-border/50 transition-all duration-300 hover:shadow-xl group'>
            
            <Link href={`/products/${product.id}`} className="relative h-80 w-full overflow-hidden block">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                

                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

                {product.isBestseller && (
                    <div className="absolute top-5 right-5 z-10">
                        <Badge className="bg-pink-accent/90 backdrop-blur-md text-white border-none px-4 py-1.5 rounded-full shadow-lg text-xs font-bold">
                            الأكثر مبيعاً
                        </Badge>
                    </div>
                )}
            </Link>

            <div className="p-6 flex flex-col flex-grow text-right font-expo">

                <div className="mb-3">
                    <span className="text-[10px] text-pink-accent font-black tracking-[0.2em] uppercase bg-pink-accent/5 px-3 py-1 rounded-md">
                        {product.category}
                    </span>
                    <Link href={`/products/${product.id}`}>
                        <h4 className="text-xl font-bold text-primary mt-3 hover:text-pink-accent transition-colors line-clamp-1">
                            {product.name}
                        </h4>
                    </Link>
                </div>

                <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed min-h-[40px]">
                    {product.description}
                </p>

                <div className="flex flex-row-reverse flex-wrap gap-1.5 mb-6">
                    {product?.sizes && product.sizes.slice(0, 3).map((size) => (
                        <span
                            key={size}
                            className="text-[10px] px-2.5 py-1 bg-secondary/50 text-muted-foreground border border-border/30 rounded-lg font-medium"
                        >
                            {size}
                        </span>
                    ))}
                    {product.sizes?.length > 3 && (
                        <span className="text-[10px] px-2 py-1 text-pink-accent font-bold italic">
                            +{product.sizes.length - 3} أكثر
                        </span>
                    )}
                </div>

                <div className="mt-auto pt-5 border-t border-border/40">
                    <div className="flex justify-between items-center flex-row-reverse mb-5">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-muted-foreground/60 font-bold uppercase tracking-widest">السعر</span>
                            <div className="flex items-center gap-1">
                                <span className="text-2xl font-black text-primary tracking-tighter">${product.price}</span>
                            </div>
                        </div>
                        <div className="w-10 h-1 bg-gradient-to-l from-pink-accent/40 to-transparent rounded-full" />
                    </div>

                    <div className="transform transition-all duration-300 group-hover:translate-y-[-4px]">
                        <OrderForm
                            productName={product.name}
                            productPrice={product.price}
                            availableSizes={product.sizes || []}
                            productImage={product.imageUrl}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}