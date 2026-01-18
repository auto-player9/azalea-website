import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="text-right order-1 lg:order-4">
                        <h6 className="text-xl font-bold mb-6">اشترك في النشرة</h6>
                        <p className="text-gray-400 mb-6">احصل على آخر العروض والمنتجات الحصرية</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-pink-accent outline-none text-right transition-all"
                            />
                            <button className="bg-pink-accent hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-[1.02]">
                                اشترك الآن
                            </button>
                        </div>
                    </div>

                    <div className="text-right order-2 lg:order-3">
                        <h6 className="text-xl font-bold mb-6">خدمة العملاء</h6>
                        <ul className="space-y-4">
                            {['سياسة الإرجاع', 'الشحن والتوصيل', 'الأسئلة الشائعة', 'الشروط والأحكام'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-pink-accent transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-right order-3 lg:order-2">
                        <h6 className="text-xl font-bold mb-6">روابط سريعة</h6>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-400 hover:text-pink-accent transition-colors">الرئيسية</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-pink-accent transition-colors">المنتجات</Link></li>
                            <li><Link href="/#about" className="text-gray-400 hover:text-pink-accent transition-colors">من نحن</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-pink-accent transition-colors">اتصل بنا</Link></li>
                        </ul>
                    </div>

                    <div className="text-right order-4 lg:order-1">
                        <h5 className="text-3xl font-bold mb-6 text-pink-accent">Azalea</h5>
                        <p className="text-gray-400 leading-relaxed">
                            نقدم لكم أفضل أقمشة الغرف الفاخرة المصنوعة من أجود الخامات الطبيعية لضمان راحة ملكية ونوم هادئ.
                        </p>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-center">
                    <p className='text-gray-dark'>
                            Powered By Saleh
                    </p>
                    <p className="text-gray-500 text-sm">
                        © ٢٠٢٦ Azalea. جميع الحقوق محفوظة. تم التطوير بكل ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
}