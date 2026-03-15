import { NextResponse } from "next/server";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body as { name?: string; email?: string; message?: string };

  if (!name?.trim() || !email?.trim() || !message?.trim() || !isValidEmail(email) || message.trim().length < 20) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  console.log("Portfolio contact form submission", {
    name,
    email,
    message
  });

  return NextResponse.json({ ok: true });
}
