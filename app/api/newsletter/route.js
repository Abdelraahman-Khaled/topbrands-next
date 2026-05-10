import nodemailer from 'nodemailer';
import { verifyRecaptcha } from '../_verifyRecaptcha';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const { email, captchaToken } = await request.json();

    const captchaOk = await verifyRecaptcha(captchaToken);
    if (!captchaOk) {
      return Response.json({ ok: false, error: 'captcha' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Top Brands Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Newsletter Subscription: ${email}`,
      html: `<p>New newsletter subscription from: <strong>${email}</strong></p>`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Newsletter mail error:', err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
