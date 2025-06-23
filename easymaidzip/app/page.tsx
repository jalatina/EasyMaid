"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Sparkles, Clock, Shield, Star } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function EasyMaidLanding() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage("Please enter your email address")
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    // Save to localStorage so you can see it in the admin page
    const signup = {
      email: email,
      timestamp: new Date().toISOString(),
    }

    const existing = JSON.parse(localStorage.getItem("easymaid-signups") || "[]")
    existing.push(signup)
    localStorage.setItem("easymaid-signups", JSON.stringify(existing))

    // Simulate processing
    setTimeout(() => {
      console.log("🎉 New EasyMaid signup:", email, "at", new Date().toISOString())
      setMessage("Thank you for your interest! We'll be in touch soon.")
      setEmail("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <Sparkles className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">EasyMaid</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contact
          </a>
          <a href="/admin" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Admin
          </a>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800">
                    🏠 Professional Cleaning Services
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Your Home, <span className="text-blue-600">Spotlessly Clean</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                    Professional, reliable, and affordable cleaning services for busy homeowners. Let EasyMaid take care
                    of the cleaning while you focus on what matters most.
                  </p>
                </div>

                {/* Email Signup Form */}
                <div className="w-full max-w-md">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="flex-1 h-12 text-base"
                        disabled={isSubmitting}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="h-12 px-6 bg-blue-600 hover:bg-blue-700"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Joining..." : "Get Started"}
                      </Button>
                    </div>
                    {message && (
                      <div className={`text-sm ${message.includes("Thank you") ? "text-green-600" : "text-red-600"}`}>
                        {message}
                      </div>
                    )}
                    <p className="text-xs text-gray-500">
                      Join our waitlist to be the first to know when we launch in your area!
                    </p>
                  </form>
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

              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  width="500"
                  height="600"
                  alt="Professional cleaning service"
                  className="mx-auto aspect-[5/6] overflow-hidden rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                Our Services
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                Everything you need for a clean home
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-lg">
                From regular maintenance to deep cleaning, we've got you covered with our comprehensive cleaning
                services.
              </p>
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
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Dusting & vacuuming
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Kitchen & bathroom cleaning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Floor mopping & sanitizing
                      </li>
                    </ul>
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
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Inside appliances & cabinets
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Baseboards & window sills
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Light fixtures & ceiling fans
                      </li>
                    </ul>
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
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Post-construction cleanup
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Eco-friendly products
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Pet-friendly cleaning
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  Why EasyMaid
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Trusted by families across the city
                </h2>
                <p className="text-gray-600 md:text-lg">
                  We understand that inviting someone into your home requires trust. That's why we go above and beyond
                  to ensure every team member meets our high standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Thoroughly Vetted Team</h4>
                      <p className="text-sm text-gray-600">Background checks and references for every cleaner</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Flexible Scheduling</h4>
                      <p className="text-sm text-gray-600">Book online and choose times that work for you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">100% Satisfaction Guarantee</h4>
                      <p className="text-sm text-gray-600">Not happy? We'll make it right or refund your money</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width="500"
                  height="400"
                  alt="Happy family with clean home"
                  className="mx-auto aspect-[5/4] overflow-hidden rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">What our customers say</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      "EasyMaid has been a lifesaver! Their team is professional, thorough, and trustworthy. I finally
                      have my weekends back!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">SJ</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                        <p className="text-xs text-gray-500">Working Mom of 2</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      "The attention to detail is incredible. They clean areas I never even thought of. Highly recommend
                      to anyone looking for quality service."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-green-600">MC</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Michael Chen</p>
                        <p className="text-xs text-gray-500">Busy Professional</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600">
                      "Reliable, affordable, and they always show up on time. The booking process is so easy. Best
                      decision I've made this year!"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-sm font-medium text-purple-600">ER</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Emily Rodriguez</p>
                        <p className="text-xs text-gray-500">Small Business Owner</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-16 md:py-24 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready for a cleaner home?</h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-lg">
                Join our waitlist today and be among the first to experience the EasyMaid difference. We're launching
                soon in your area!
              </p>
              <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="flex-1 h-12 text-base bg-white text-gray-900"
                      disabled={isSubmitting}
                    />
                    <Button type="submit" variant="secondary" size="lg" className="h-12 px-6" disabled={isSubmitting}>
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </div>
                  {message && (
                    <div className={`text-sm ${message.includes("Thank you") ? "text-green-200" : "text-red-200"}`}>
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 EasyMaid. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Terms of Service
          </a>
          <a href="mailto:hello@easymaid.com" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Contact Us
          </a>
        </nav>
      </footer>
    </div>
  )
}
