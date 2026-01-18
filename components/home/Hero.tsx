import Link from 'next/link';
import React from 'react';

export default function Hero() {
    return (
        <section className="relative h-[650px] w-full overflow-hidden" dir="rtl">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent"></div>
            </div>

            <div className="relative container mx-auto px-4 h-full flex items-center justify-end">
                <div className="max-w-2xl text-right text-white space-y-6">
                    <h2 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-md">
                        نوم هادئ، <br />
                        <span className="text-pink-soft">حياة أجمل</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mr-0 ml-auto">
                        اكتشف مجموعتنا الفاخرة من أقمشة الغرف المصنوعة من أجود الخامات العالمية لضمان راحتك ليلة بعد ليلة.
                    </p>

                    <div className="flex flex-row-reverse gap-4 pt-4">
                        <button className="bg-pink-accent hover:bg-pink-soft hover:text-gray-dark text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-pink-accent/20">
                            <Link href={"#bestsellers"} >تسوق التشكيلة الجديدة</Link>
                        </button>

                        <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all">
                            <Link href={"/products"} > اكتشف المزيد</Link>
                        </button>
                    </div>

                    <div className="flex justify-end gap-8 pt-12 border-t border-white/20 mt-12">
                        <div className="text-center">
                            <span className="block text-2xl font-bold">١٠٠٪</span>
                            <span className="text-sm text-white/70">قطن طبيعي</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold">٤٨ ساعة</span>
                            <span className="text-sm text-white/70">توصيل سريع</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}