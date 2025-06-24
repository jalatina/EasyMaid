import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sparkles, Clock, Shield } from "lucide-react"

export default function EasyMaidLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <Sparkles className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">EasyMaid</span>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800">
                🏠 Professional Cleaning Services
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Your Home, <span className="text-blue-600">Spotlessly Clean</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                Professional, reliable, and affordable cleaning services for busy homeowners. Let EasyMaid take care of
                the cleaning while you focus on what matters most.
              </p>

              {/* Simple Email Form */}
              <div className="w-full max-w-md">
                <div className="flex gap-2">
                  <Input type="email" placeholder="Enter your email address" className="flex-1 h-12 text-base" />
                  <Button size="lg" className="h-12 px-6 bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">Join our waitlist to be the first to know when we launch!</p>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Background Checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Everything you need for a clean home
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Regular Cleaning</h3>
                    <p className="text-gray-600">
                      Weekly, bi-weekly, or monthly cleaning services to keep your home consistently spotless.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <Sparkles className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Deep Cleaning</h3>
                    <p className="text-gray-600">
                      Comprehensive top-to-bottom cleaning for move-ins, move-outs, or seasonal refresh.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Specialized Services</h3>
                    <p className="text-gray-600">
                      Additional services tailored to your specific needs and preferences.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready for a cleaner home?</h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-lg">
                Join our waitlist today and be among the first to experience the EasyMaid difference.
              </p>
              <div className="w-full max-w-md">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-12 text-base bg-white text-gray-900"
                  />
                  <Button variant="secondary" size="lg" className="h-12 px-6">
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 EasyMaid. All rights reserved.</p>
      </footer>
    </div>
  )
}
