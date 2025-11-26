import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW, 
      },
    });

    const mailData = {
      from: `"${name}" <${process.env.NODEMAILER_EMAIL}>`,
      to: "radeennndsp@gmail.com",
      subject: `Message from ${name}`,
      html: `
        <p>${message}</p>
        <p><strong>Email Pengirim:</strong> ${email}</p>
      `,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailData);

    return NextResponse.json(
      { message: "Email sent successfully", info },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
};
