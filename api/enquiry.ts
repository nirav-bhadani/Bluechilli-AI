import nodemailer from "nodemailer";

type EnquiryPayload = {
  subject?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
};

type RequestLike = {
  method?: string;
  headers?: Record<string, string | string[] | undefined>;
  body?: EnquiryPayload;
};

type ResponseLike = {
  status: (code: number) => ResponseLike;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string | string[]) => void;
};

function getEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function isAllowedMethod(method?: string) {
  return method === "POST" || method === "OPTIONS";
}

function parseOrigin(headers?: Record<string, string | string[] | undefined>) {
  const origin = headers?.origin;
  if (Array.isArray(origin)) {
    return origin[0] || "*";
  }
  return origin || "*";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default async function handler(req: RequestLike, res: ResponseLike) {
  const origin = parseOrigin(req.headers);
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (!isAllowedMethod(req.method)) {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  if (req.method === "OPTIONS") {
    return res.status(200).json({ success: true });
  }

  try {
    const smtpHost = getEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT || "587");
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = getEnv("SMTP_USER");
    const smtpPass = getEnv("SMTP_PASS");
    const enquiryTo = process.env.ENQUIRY_TO || "hello@bluechilli.ai";
    const fromEmail = process.env.SMTP_FROM || smtpUser;

    const payload = req.body || {};
    const subject = (payload.subject || "New Website Enquiry").toString().slice(0, 200);
    const name = (payload.name || "Unknown").toString().slice(0, 200);
    const email = (payload.email || "").toString().trim();
    const phone = (payload.phone || "Not provided").toString().slice(0, 100);
    const message = (payload.message || "").toString().trim();
    const source = (payload.source || "Website").toString().slice(0, 200);

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message are required.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    const safeSubject = escapeHtml(subject);
    const safeSource = escapeHtml(source);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: enquiryTo,
      replyTo: email,
      subject,
      text: [
        `Source: ${source}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
          <h2 style="margin: 0 0 12px;">${safeSubject}</h2>
          <p><strong>Source:</strong> ${safeSource}</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <hr style="margin: 16px 0; border: 0; border-top: 1px solid #e5e7eb;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${safeMessage}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Enquiry sent successfully." });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send enquiry.";
    return res.status(500).json({ success: false, message });
  }
}
