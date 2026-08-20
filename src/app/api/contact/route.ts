import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f172a;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 100px;">Name</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Email</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Subject</td>
            <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px;">
          <p style="color: #64748b; margin: 0 0 8px; font-size: 13px;">Message</p>
          <p style="color: #0f172a; margin: 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"CloudPulse Website" <${process.env.SMTP_USER}>`,
      to: "hr@cloudpulsetechnologies.com, samp@cloudpulsetechnologies.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
