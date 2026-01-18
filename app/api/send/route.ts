import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'azalea.website.shop@gmail.com',
      replyTo: email,
      subject: `رسالة جديدة من ${name}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 3px solid #ffd700; padding-bottom: 10px;">رسالة جديدة من موقع Azalea</h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>الاسم:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>البريد الإلكتروني:</strong> ${email}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1a1a1a;">الرسالة:</h3>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 10px; line-height: 1.6;">${message}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">

          <p style="color: #666; font-size: 12px;">تم الإرسال من نموذج الاتصال على موقع MoMedia</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
