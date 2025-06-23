export default function GoogleSheetsSetup() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Google Sheets Integration Setup</h1>

      <div className="space-y-6">
        <section className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Step 1: Create a Google Cloud Project</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>
              Go to{" "}
              <a href="https://console.cloud.google.com" className="text-blue-600 underline">
                Google Cloud Console
              </a>
            </li>
            <li>Create a new project or select an existing one</li>
            <li>Enable the Google Sheets API for your project</li>
          </ol>
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Step 2: Create Service Account</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Go to "IAM & Admin" → "Service Accounts"</li>
            <li>Click "Create Service Account"</li>
            <li>Give it a name like "easymaid-sheets"</li>
            <li>Click "Create and Continue"</li>
            <li>Skip role assignment for now</li>
            <li>Click "Done"</li>
          </ol>
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Step 3: Generate Credentials</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Click on your service account</li>
            <li>Go to "Keys" tab</li>
            <li>Click "Add Key" → "Create new key"</li>
            <li>Choose "JSON" format</li>
            <li>Download the JSON file</li>
          </ol>
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Step 4: Create Google Sheet</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Create a new Google Sheet</li>
            <li>Add headers in row 1: "Timestamp", "Email", "Source"</li>
            <li>Copy the Sheet ID from the URL (the long string between /d/ and /edit)</li>
            <li>Share the sheet with your service account email (found in the JSON file)</li>
            <li>Give it "Editor" permissions</li>
          </ol>
        </section>

        <section className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Step 5: Environment Variables</h2>
          <p className="mb-4 text-sm">Add these to your environment variables:</p>
          <div className="bg-gray-100 p-4 rounded font-mono text-sm">
            <div>GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com</div>
            <div>GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...your key...\n-----END PRIVATE KEY-----\n"</div>
            <div>GOOGLE_SHEET_ID=your-sheet-id-here</div>
          </div>
          <p className="mt-2 text-xs text-gray-600">Get these values from the JSON file you downloaded</p>
        </section>

        <section className="border rounded-lg p-6 bg-green-50">
          <h2 className="text-xl font-semibold mb-4 text-green-800">You're All Set! 🎉</h2>
          <p className="text-sm text-green-700">
            Once you've completed these steps, your EasyMaid landing page will automatically save email signups to your
            Google Sheet.
          </p>
        </section>
      </div>
    </div>
  )
}
