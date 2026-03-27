type EnquiryPayload = {
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  source: string;
};

const ENQUIRY_EMAIL = "hello@bluechilli.ai";
const ENQUIRY_ENDPOINT = `https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`;

function toFriendlyMessage(message?: string) {
  if (!message) {
    return "Unable to send your enquiry right now.";
  }

  const normalized = message.toLowerCase();

  if (normalized.includes("open this page through a web server")) {
    return "Please open the website via http://localhost (npm run dev), not as a local file.";
  }

  if (normalized.includes("activate") || normalized.includes("confirmation")) {
    return "Please activate FormSubmit from the confirmation email sent to hello@bluechilli.ai, then try again.";
  }

  return message;
}

export async function submitEnquiry(payload: EnquiryPayload) {
  const formData = new FormData();
  formData.append("_subject", payload.subject);
  formData.append("_captcha", "false");
  formData.append("_template", "table");
  formData.append("source", payload.source);
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("_replyto", payload.email);
  formData.append("phone", payload.phone ?? "Not provided");
  formData.append("message", payload.message);

  const response = await fetch(ENQUIRY_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const contentType = response.headers.get("content-type") ?? "";
  const result = contentType.includes("application/json")
    ? await response.json()
    : { message: await response.text() };

  if (!response.ok) {
    throw new Error(toFriendlyMessage(result?.message));
  }

  if (result?.success === false || result?.success === "false") {
    throw new Error(toFriendlyMessage(result?.message));
  }
}