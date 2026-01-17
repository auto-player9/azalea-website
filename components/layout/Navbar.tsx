// components/Navbar.tsx
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm" dir="rtl">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-[#FFB3C6] font-bold">الرئيسية</Link>
                    <Link href="/products" className="hover:text-[#FFB3C6] transition-colors">المنتجات</Link>
                    <Link href="/about" className="hover:text-[#FFB3C6] transition-colors">من نحن</Link>
                    <Link href="/contact" className="hover:text-[#FFB3C6] transition-colors">اتصل بنا</Link>
                </nav>

                <h1 className="text-2xl font-bold text-gray-800">أقمشة فاخرة</h1>
            </div>
        </header>
    );
}