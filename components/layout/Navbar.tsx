"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "المنتجات", href: "/products" }, 
  { name: "من نحن", href: "/#about" },
  { name: "اتصل بنا", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm" dir="rtl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between lg:justify-around">
        <button 
          className="md:hidden p-2 text-primary hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-primary/80 hover:text-pink-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-pink-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>


        <div className="flex items-center gap-4 h-16 w-28 overflow-hidden rounded-xl">
          <Link href="/">
            <Image
              src="/icons/logo.jpg"
              alt="logo"
              width={100}
              height={100}
              className="object-cover h-full w-full"
            />
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "absolute top-20 left-0 w-full bg-background border-b border-border shadow-xl transition-all duration-300 ease-in-out md:hidden overflow-hidden",
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} 
              className="p-4 text-primary hover:bg-secondary hover:text-pink-accent rounded-2xl transition-all flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <div className="w-2 h-2 rounded-full bg-pink-soft group-hover:bg-pink-accent transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}