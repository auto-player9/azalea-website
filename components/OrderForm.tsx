"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ChevronDown } from "lucide-react";

const orderSchema = z.object({
    name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
    phone: z.string().regex(/^(05|5|961|70|71|76|78|79|81|03)\d+$/, "رقم الهاتف غير صحيح"),
    size: z.string().min(1, "يرجى اختيار المقاس المطلوب").optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

interface OrderFormProps {
    productName: string;
    productPrice: number;
    availableSizes: string[];
    productImage: string;
}

export default function OrderForm({ productName, productPrice, availableSizes, productImage }: OrderFormProps) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<OrderFormValues>({
        resolver: zodResolver(orderSchema),
    });

    const onSubmit = async (data: OrderFormValues) => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    phone: data.phone,
                    productName,
                    productPrice,
                    size: data.size || "لا يوجد مقياس لهذا المنتج",
                    productImage
                }),
            });

            if (!response.ok) throw new Error("email does not send");

            const myWhatsappNumber = "96170781107";
            const whatsappMsg = `مرحباً Azalea، أريد طلب منتج: ${productName}
الصورة: ${productImage}
${data.size ? `المقاس: ${data.size}`: ""}
السعر: ${productPrice}$
الاسم: ${data.name}
الهاتف: ${data.phone}
`;

            const whatsappUrl = `https://wa.me/${myWhatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

            toast.success("تم تسجيل طلبك، سيتم تحويلك للواتساب الآن");

            setTimeout(() => {
                window.open(whatsappUrl, "_blank");
                setOpen(false);
                reset();
            }, 1000);

        } catch (error) {
            toast.error("حدث خطأ، حاول مرة أخرى");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full bg-pink-accent hover:bg-pink-accent/90 text-white h-14 text-xl font-bold  shadow-lg transition-all flex-1 cursor-pointer">
                    اطلب المنتج الآن
                </Button>
            </DialogTrigger>

            <DialogContent className="font-expo sm:max-w-[425px] rounded-[2rem] p-12" dir="rtl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-black text-right mb-4">ارسال طلبك</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-right">
                    
                    {availableSizes  && availableSizes.length > 0  &&
                        <div className="space-y-2">
                            <Label>اختر المقاس</Label>
                            <div className="relative">
                                <select
                                    {...register("size")}
                                    className={`w-full p-3 rounded-xl border-2 appearance-none bg-background outline-none transition-all ${errors.size ? "border-red-500" : "border-border focus:border-pink-accent"}`}
                                >
                                    <option value="">--- اختر المقاس ---</option>
                                    {availableSizes.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute left-3 top-3.5 text-muted-foreground pointer-events-none" size={20} />
                            </div>
                            {errors.size && <p className="text-red-500 text-sm font-bold">{errors.size.message}</p>}
                        </div>
                    }

                    <div className="space-y-2">
                        <Label htmlFor="name">الاسم بالكامل</Label>
                        <Input
                            id="name"
                            {...register("name")}
                            placeholder="مثال: أحمد علي"
                            className={errors.name ? "border-red-500" : "rounded-xl border-2 focus:border-pink-accent"}
                        />
                        {errors.name && <p className="text-red-500 text-sm font-bold">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">رقم الجوال</Label>
                        <Input
                            id="phone"
                            {...register("phone")}
                            placeholder="أدخل رقمك"
                            className={errors.phone ? "border-red-500" : "rounded-xl border-2 focus:border-pink-accent"}
                        />
                        {errors.phone && <p className="text-red-500 text-sm font-bold">{errors.phone.message}</p>}
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-black hover:bg-black/90 h-14 text-lg font-bold rounded-2xl shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                        {isLoading ? "جاري المعالجة..." : "تأكيد الطلب عبر واتساب"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}