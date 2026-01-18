import Link from 'next/link';
import Section from '../common/Section';
import ProductCard from '@/components/products/ProductCard';

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    sizes?: string[];
}

export default function Bestsellers({ products }: { products: Product[] }) {
    return (
        <Section id="bestsellers" className="bg-white">
            <div className="mx-auto">
                <div className="text-center mb-16">
                    <h3 className="text-4xl font-bold text-primary mb-4">الأكثر مبيعاً</h3>
                    <p className="text-muted-foreground text-lg ">المنتجات المفضلة لعملائنا لنوم ملكي</p>
                </div>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8 mb-12">
                    {products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={{
                                id: product._id,
                                name: product.title,
                                price: product.price,
                                imageUrl: product.imageUrl,
                                category: product.category,
                                description: product.description,
                                sizes: product.sizes || [],
                                isBestseller: true
                            }}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/products"
                        className="inline-block bg-primary hover:bg-pink-accent text-white px-12 py-4 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-luxury"
                    >
                        عرض جميع المنتجات
                    </Link>
                </div>
            </div>
        </Section>
    );
}