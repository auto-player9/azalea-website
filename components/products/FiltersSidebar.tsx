"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const FIXED_SIZES = ["S", "M", "L", "XL", "XXL", "مفرد", "مزدوج", "كينج"];

export default function FiltersSidebar({ categories }: { categories: string[] }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();


    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedSize, setSelectedSize] = useState<string>(searchParams.get("size") || "");
    const [selectedCats, setSelectedCats] = useState<string[]>(searchParams.get("category")?.split(",") || []);


    useEffect(() => {
        setSelectedSize(searchParams.get("size") || "");
        setSelectedCats(searchParams.get("category")?.split(",") || []);
        const min = Number(searchParams.get("minPrice")) || 0;
        const max = Number(searchParams.get("maxPrice")) || 1000;
        setPriceRange([min, max]);
    }, [searchParams]);

    const applyFilters = () => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedSize) params.set("size", selectedSize); else params.delete("size");
        if (selectedCats.length > 0) params.set("category", selectedCats.join(",")); else params.delete("category");
        params.set("minPrice", priceRange[0].toString());
        params.set("maxPrice", priceRange[1].toString());

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const clearAll = () => {
        router.push(pathname);
    };

    const toggleCategory = (cat: string) => {
        setSelectedCats(prev =>
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    return (
        <aside className="lg:w-80 flex-shrink-0 relative font-expo">
            <div className="bg-background rounded-3xl shadow-luxury border border-border/50 p-7 sticky top-28">

                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={clearAll}
                        className="text-sm text-muted-foreground hover:text-pink-accent transition-colors underline underline-offset-4 cursor-pointer"
                    >
                        مسح الكل
                    </button>
                    <h3 className="text-xl font-bold text-primary tracking-tight">تصفية النتائج</h3>
                </div>

                <Accordion type="multiple" defaultValue={["categories", "sizes", "price"]} className="w-full space-y-3">

                    <AccordionItem value="categories" className="border-none bg-secondary rounded-2xl px-4">
                        <AccordionTrigger className="hover:no-underline py-4 font-bold text-primary flex-row-reverse">
                            الأقسام
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 space-y-3">
                            {categories.map((cat) => (
                                <div key={cat} className="flex items-center justify-between space-x-reverse space-x-3 group cursor-pointer">
                                    <Label htmlFor={cat} className="text-[15px] font-medium text-muted-foreground group-hover:text-pink-accent cursor-pointer transition-colors">
                                        {cat}
                                    </Label>
                                    <Checkbox
                                        id={cat}
                                        checked={selectedCats.includes(cat)}
                                        onCheckedChange={() => toggleCategory(cat)}
                                        className="w-5 h-5 border-border data-[state=checked]:bg-pink-accent data-[state=checked]:border-pink-accent rounded-md"
                                    />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="sizes" className="border-none bg-secondary rounded-2xl px-4">
                        <AccordionTrigger className="hover:no-underline py-4 font-bold text-primary flex-row-reverse">
                            المقاسات
                        </AccordionTrigger>
                        <AccordionContent className="pb-5">
                            <div className="grid grid-cols-4 gap-2">
                                {FIXED_SIZES.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size === selectedSize ? "" : size)}
                                        className={cn(
                                            "h-10 flex items-center justify-center rounded-xl border text-sm font-medium transition-all",
                                            selectedSize === size
                                                ? "border-pink-accent bg-pink-soft text-pink-accent shadow-sm"
                                                : "border-border bg-background text-muted-foreground hover:border-pink-accent/50"
                                        )}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="price" className="border-none bg-secondary rounded-2xl px-4">
                        <AccordionTrigger className="hover:no-underline py-4 font-bold text-primary flex-row-reverse">
                            نطاق السعر
                        </AccordionTrigger>
                        <AccordionContent className="pb-6 pt-2 px-1">
                            <Slider
                                value={priceRange}
                                max={1000}
                                step={10}
                                onValueChange={setPriceRange}
                                className="my-6"
                            />
                            <div className="flex justify-between items-center gap-4 flex-row-reverse">
                                <div className="flex-1 bg-background border border-border p-2 rounded-xl text-center">
                                    <span className="block text-[10px] text-muted-foreground">إلى</span>
                                    <span className="font-bold text-primary text-sm">${priceRange[1]}</span>
                                </div>
                                <div className="flex-1 bg-background border border-border p-2 rounded-xl text-center">
                                    <span className="block text-[10px] text-muted-foreground">من</span>
                                    <span className="font-bold text-primary text-sm">${priceRange[0]}</span>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>

                <Button
                    onClick={applyFilters}
                    className="w-full mt-8 bg-primary hover:bg-pink-accent text-primary-foreground py-7 rounded-2xl transition-all duration-300 text-lg shadow-luxury"
                >
                    تطبيق الفلترة
                </Button>
            </div>
        </aside>
    );
}