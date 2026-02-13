import { NextResponse } from "next/server";
import { sendContactEmail } from "../../lib/emailContact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const { name, email, company, message } = await request.json();
  const myEmail = process.env.EMAIL_USER || "";

  if (!myEmail) {
    return NextResponse.json(
      { success: false, error: "EMAIL_USER is not configured." },
      { status: 500 }
    );
  }

  try {
    await sendContactEmail(
      myEmail,
      name || "User",
      email || "unknown",
      company,
      message || ""
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send contact email." },
      { status: 500 }
    );
  }
}
