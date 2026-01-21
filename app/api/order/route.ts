import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, phone, productName, productPrice, size, productImage } = await req.json();

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['azalea.website.shop@gmail.com'],
            subject: `🛍️ طلب جديد: ${productName} - ${size}`,
            html: `
<div dir="rtl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 30px; border-radius: 20px; background-color: #ffffff;">
    <h2 style="color: #1e293b; text-align: center; font-size: 24px;">طلب شراء جديد من الموقع</h2>
    
    <div style="text-align: center; margin: 20px 0;">
       <img src="${productImage}" alt="${productName}" style="width: 180px; height: 220px; object-fit: cover; border-radius: 15px; border: 2px solid #f1f5f9;" />
    </div>

    <div style="background-color: #f8fafc; padding: 20px; border-radius: 15px; margin-bottom: 25px;">
        <p style="margin: 10px 0;"><strong>اسم المنتج:</strong> <span style="color: #d946ef;">${productName}</span></p>
        <p style="margin: 10px 0;"><strong>المقاس المختار:</strong> <span style="background-color: #fce7f3; padding: 2px 8px; border-radius: 5px;">${size}</span></p>
        <p style="margin: 10px 0;"><strong>السعر:</strong> ${productPrice}$</p>
    </div>

    <div style="padding: 0 10px;">
        <h3 style="color: #475569; font-size: 18px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">بيانات العميل</h3>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>رقم الهاتف:</strong> ${phone}</p>
    </div>
    
    <div style="margin-top: 35px; text-align: center;">
        <a href="https://wa.me/${phone.replace(/\s+/g, '')}?text=${encodeURIComponent(`مرحباً ${name}، معك متجر Azalea. بخصوص طلبك لمنتج ${productName} (مقاس ${size})، نود التأكيد معك...`)}" 
           style="background-color: #25D366; color: white; padding: 15px 30px; text-decoration: none; border-radius: 12px; font-weight: bold; font-size: 16px; display: inline-block;">
           الرد وتأكيد الطلب (WhatsApp)
        </a>
    </div>
    
    <p style="font-size: 12px; color: #94a3b8; margin-top: 40px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px;">
        تم إرسال هذا الطلب آلياً من نظام Azalea
    </p>
</div>`
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}