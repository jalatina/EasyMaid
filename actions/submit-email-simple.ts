"use server"

export async function submitEmailSimple(formData: FormData) {
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
    // Log to console (you'll see this in Vercel logs)
    console.log("🎉 New EasyMaid signup:", email, "at", new Date().toISOString())

    // Here you could also:
    // - Send yourself an email notification
    // - Post to a webhook
    // - Save to a simple file
    // - Send to any service you prefer

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
