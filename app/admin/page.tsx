"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Calendar, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EmailSignup {
  email: string
  timestamp: string
}

export default function AdminPage() {
  const [signups, setSignups] = useState<EmailSignup[]>([])

  useEffect(() => {
    // Get signups from localStorage (where we'll store them)
    const stored = localStorage.getItem("easymaid-signups")
    if (stored) {
      setSignups(JSON.parse(stored))
    }
  }, [])

  const exportCSV = () => {
    const csvContent = [
      ["Email", "Date", "Time"],
      ...signups.map((signup) => [
        signup.email,
        new Date(signup.timestamp).toLocaleDateString(),
        new Date(signup.timestamp).toLocaleTimeString(),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `easymaid-signups-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">EasyMaid Signups</h1>
            <p className="text-gray-600">View all email signups from your landing page</p>
          </div>
          {signups.length > 0 && (
            <Button onClick={exportCSV} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export CSV
            </Button>
          )}
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Signups</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{signups.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {
                  signups.filter((signup) => {
                    const today = new Date().toDateString()
                    return new Date(signup.timestamp).toDateString() === today
                  }).length
                }
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {
                  signups.filter((signup) => {
                    const weekAgo = new Date()
                    weekAgo.setDate(weekAgo.getDate() - 7)
                    return new Date(signup.timestamp) >= weekAgo
                  }).length
                }
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Signups List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Signups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {signups.length === 0 ? (
                <div className="text-center py-8">
                  <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No signups yet</p>
                  <p className="text-sm text-gray-400">Signups will appear here when people join your waitlist</p>
                </div>
              ) : (
                signups
                  .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                  .map((signup, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Mail className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{signup.email}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(signup.timestamp).toLocaleDateString()} at{" "}
                            {new Date(signup.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary">EasyMaid Landing</Badge>
                    </div>
                  ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
