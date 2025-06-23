"use server"

export async function submitEmailWebhook(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    // Send to a webhook service (like Zapier, Make.com, or n8n)
    // This will forward the email to you via email, Slack, etc.

    const webhookUrl = process.env.WEBHOOK_URL // You'll set this up

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "EasyMaid Landing Page",
        }),
      })
    }

    // Also log to console for backup
    console.log("🎉 New EasyMaid signup:", email, "at", new Date().toISOString())

    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error processing signup:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
