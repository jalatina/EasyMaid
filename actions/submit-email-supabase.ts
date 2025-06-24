"use server"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function submitEmailToSupabase(formData: FormData) {
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
    // Check if email already exists
    const { data: existingEmail } = await supabase.from("email_signups").select("email").eq("email", email).single()

    if (existingEmail) {
      return {
        success: true,
        message: "You're already on our waitlist! We'll be in touch soon.",
      }
    }

    // Insert new email signup
    const { error } = await supabase.from("email_signups").insert([
      {
        email: email,
        source: "EasyMaid Landing Page",
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      }
    }

    console.log("New EasyMaid signup:", email)

    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error submitting email:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
