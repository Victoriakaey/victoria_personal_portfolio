import { validateString, getErrorMessage } from "@/lib/utils";

/**
 * Delivery goes through https://web3forms.com.
 *
 * It replaced Resend, which sent from `personalPortfolio@resend.dev` — a shared
 * test domain that only ever delivers to the address owning the Resend account.
 * That fails in the worst possible way for a contact form: the API returns
 * success, the visitor sees "Email sent!", and the message is dropped. Web3Forms
 * sends from its own verified infrastructure, so it reaches any inbox.
 *
 * NOT a server action, deliberately. Web3Forms rejects server-side calls on the
 * free plan — "Use our API in client side ... (Pro plan is required)" — so
 * adding "use server" here silently breaks every submission. This runs in the
 * browser, which is what their own quick-start does.
 *
 * The access key is public by design and ends up in the client bundle either
 * way. NEXT_PUBLIC_ so an override actually reaches the browser; without one it
 * falls back to the literal and the form still works.
 */
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "ffdbf531-debd-490e-b22d-30f1bc1b9295";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: "Message from your portfolio contact form",
        from_name: "Portfolio Contact Form",
        // Web3Forms uses this as the reply-to, so replying goes to the sender.
        email: senderEmail,
        message,
      }),
    });

    const data = await response.json();

    // A rejected submission still returns parseable JSON, so the flag has to be
    // checked explicitly — exactly how the Resend version hid its failures.
    if (!response.ok || !data?.success) {
      return { error: data?.message ?? "Message could not be sent" };
    }

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
