"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, Clock, Instagram, Twitter, Facebook, Youtube, Loader2, Send } from 'lucide-react';
import Section from '../common/Section';
import { toast } from "sonner";

const contactSchema = z.object({
    name: z.string().min(3, "الاسم يجب أن يكون 3 أحرف على الأقل"),
    email: z.string().email("البريد الإلكتروني غير صحيح"),
    message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("تم إرسال رسالتك بنجاح!");
                reset();
            } else {
                toast.error("حدث خطأ أثناء الإرسال، حاول لاحقاً.");
            }
        } catch (error) {
            toast.error("فشل الاتصال بالسيرفر.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h3 className="text-5xl font-bold text-primary mb-6 font-cairo">يسعدنا تواصلكم</h3>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-cairo">
                        نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في اختيار المنتجات المناسبة
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="bg-gradient-to-br from-pink-soft to-secondary p-8 rounded-[2rem] shadow-inner">
                        <h4 className="text-2xl font-bold text-primary mb-8 text-right font-cairo">تواصل معنا</h4>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-primary">
                            <div>
                                <label className="block text-right text-primary/80 font-medium mb-2 font-cairo">الاسم الكامل</label>
                                <input
                                    {...register("name")}
                                    className={`w-full bg-white px-4 py-3 rounded-xl border-none focus:ring-2 outline-none text-right shadow-sm ${errors.name ? 'ring-2 ring-red-400' : 'focus:ring-pink-accent'}`}
                                    placeholder="أدخل اسمك الكامل"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 text-right font-cairo">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block text-right text-primary/80 font-medium mb-2 font-cairo">البريد الإلكتروني</label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    className={`w-full bg-white px-4 py-3 rounded-xl border-none focus:ring-2 outline-none text-right shadow-sm ${errors.email ? 'ring-2 ring-red-400' : 'focus:ring-pink-accent'}`}
                                    placeholder="example@email.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 text-right font-cairo">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block text-right text-primary/80 font-medium mb-2 font-cairo">نص الرسالة</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className={`w-full bg-white px-4 py-3 rounded-xl border-none focus:ring-2 outline-none text-right shadow-sm resize-none ${errors.message ? 'ring-2 ring-red-400' : 'focus:ring-pink-accent'}`}
                                    placeholder="اكتب رسالتك هنا..."
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1 text-right font-cairo">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-pink-accent hover:bg-pink-600 disabled:bg-pink-300 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-md font-cairo flex items-center justify-center gap-2"
                            >
                                {isLoading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                                {isLoading ? "جاري الإرسال..." : "إرسال الرسالة"}
                            </button>
                        </form>
                    </div>

                    <div className="text-right space-y-10">
                        <div>
                            <h4 className="text-2xl font-bold text-primary mb-8 font-cairo">معلومات التواصل</h4>
                            <div className="space-y-6">
                                <a href="tel:+961 70 781 107" className="flex items-center gap-4 justify-end group transition-all">
                                    <div className="group-hover:translate-x-[-5px] transition-transform">
                                        <h5 className="font-bold text-primary font-cairo">رقم الهاتف</h5>
                                        <p className="text-muted-foreground group-hover:text-pink-accent transition-colors">+961 70 781 107</p>
                                    </div>
                                    <div className="bg-pink-soft p-3 rounded-full text-pink-accent group-hover:bg-pink-accent group-hover:text-white transition-all shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                </a>

                                <a href="mailto:info@luxurylinen.sa" className="flex items-center gap-4 justify-end group transition-all">
                                    <div className="group-hover:translate-x-[-5px] transition-transform">
                                        <h5 className="font-bold text-primary font-cairo">البريد الإلكتروني</h5>
                                        <p className="text-muted-foreground group-hover:text-pink-accent transition-colors">info@luxurylinen.sa</p>
                                    </div>
                                    <div className="bg-pink-soft p-3 rounded-full text-pink-accent group-hover:bg-pink-accent group-hover:text-white transition-all shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 justify-end">
                                    <div>
                                        <h5 className="font-bold text-primary font-cairo">ساعات العمل</h5>
                                        <p className="text-muted-foreground text-sm font-cairo">السبت - الخميس: 9ص - 9م</p>
                                    </div>
                                    <div className="bg-pink-soft p-3 rounded-full text-pink-accent shadow-sm">
                                        <Clock size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-2xl font-bold text-primary mb-6 font-cairo">تابعنا على</h4>
                            <div className="flex gap-4 justify-end">
                                {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                                    <a key={index} href="#" className="bg-pink-soft hover:bg-pink-accent p-4 rounded-full transition-all group shadow-sm hover:translate-y-[-5px]">
                                        <Icon className="text-pink-accent group-hover:text-white transition-colors" size={24} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}