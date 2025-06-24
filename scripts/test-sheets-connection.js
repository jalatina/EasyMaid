import { google } from "googleapis"

async function testSheetsConnection() {
  try {
    console.log("Testing Google Sheets connection...")

    // Check environment variables
    if (!process.env.GOOGLE_CLIENT_EMAIL) {
      throw new Error("GOOGLE_CLIENT_EMAIL environment variable is missing")
    }

    if (!process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error("GOOGLE_PRIVATE_KEY environment variable is missing")
    }

    if (!process.env.GOOGLE_SHEET_ID) {
      throw new Error("GOOGLE_SHEET_ID environment variable is missing")
    }

    // Set up authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // Test reading the sheet
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1:C1",
    })

    console.log("✅ Connection successful!")
    console.log("Sheet data:", response.data.values)

    // Test writing to the sheet
    const testEmail = `test-${Date.now()}@example.com`
    const timestamp = new Date().toLocaleString()

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, testEmail, "Test Entry"]],
      },
    })

    console.log("✅ Test entry added successfully!")
    console.log(`Added: ${timestamp}, ${testEmail}, Test Entry`)
  } catch (error) {
    console.error("❌ Error:", error.message)
  }
}

testSheetsConnection()
