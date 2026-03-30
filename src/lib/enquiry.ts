type EnquiryPayload = {
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  source: string;
};

const ENQUIRY_ENDPOINT = import.meta.env.VITE_ENQUIRY_API_URL || "/api/enquiry";

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
  const response = await fetch(ENQUIRY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const contentType = response.headers.get("content-type") ?? "";
  const result = contentType.includes("application/json") ? await response.json() : { message: await response.text() };

  if (!response.ok) {
    throw new Error(toFriendlyMessage(result?.message));
  }

  if (result?.success === false || result?.success === "false") {
    throw new Error(toFriendlyMessage(result?.message));
  }
}