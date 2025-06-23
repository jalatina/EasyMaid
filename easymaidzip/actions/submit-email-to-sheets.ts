"use server"

import { google } from "googleapis"

export async function submitEmailToSheets(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Please enter a valid email address",
    }
  }

  try {
    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // Get current timestamp
    const timestamp = new Date().toLocaleString()

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:C", // Adjust range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [timestamp, email, "EasyMaid Signup"], // Add more columns as needed
        ],
      },
    })

    console.log("Email added to Google Sheets:", email)

    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error adding to Google Sheets:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}
