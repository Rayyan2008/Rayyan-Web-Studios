"use client"

import { useState } from "react"
import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import emailjs from '@emailjs/browser'

export default function Consultation() {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        business: formData.business,
        message: formData.message,
        selectedDate,
        selectedTime
      }

      await emailjs.send(
        'service_upf1i8c',
        'template_9pkc8oh',
        templateParams,
        'pS62Q5qwoLbBSDA4I'
      )

      setIsSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Failed to send request. Please try again or contact me directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (isSubmitted) {
    return (
      <ShaderBackground>
        <Header />
        <main className="relative z-20 min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-4xl mb-4">✅</div>
              <h1 className="text-2xl font-medium text-white mb-4">Request Submitted!</h1>
              <p className="text-sm text-white/70 mb-6">
                Your consultation request will be reviewed and confirmed via email within 24 hours.
                I personally review every request to ensure proper attention.
              </p>
              <a href="/" className="px-6 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90">
                Back to Home
              </a>
            </div>
          </div>
        </main>
      </ShaderBackground>
    )
  }

  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-20 min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-8 relative mx-auto"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">📅 Free Website Consultation</span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl md:leading-16 tracking-tight font-light text-white mb-4">
              <span className="font-medium italic instrument">Book</span> Your Free
              <br />
              <span className="font-light tracking-tight text-white">Consultation</span>
            </h1>
            <p className="text-sm font-light text-white/70 leading-relaxed max-w-2xl mx-auto">
              Let's discuss your website idea. Every consultation is personally reviewed to ensure proper attention.
              Once you request a slot, I'll review it and confirm via email.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar Section */}
            <div>
              <h2 className="text-xl font-medium text-white mb-6">Step 1: Choose Your Preferred Time</h2>

              {/* Date Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-white mb-3">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              {/* Time Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-white mb-3">Available Times</label>
                <div className="grid grid-cols-2 gap-3">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-4 py-3 rounded-xl border transition-all duration-200 text-sm ${
                        selectedTime === time
                          ? 'bg-white text-black border-white'
                          : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && selectedTime && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/20">
                  <p className="text-sm text-white/70">Selected:</p>
                  <p className="text-white font-medium">{selectedDate} at {selectedTime}</p>
                </div>
              )}
            </div>

            {/* Form Section */}
            <div>
              <h2 className="text-xl font-medium text-white mb-6">Step 2: Your Details</h2>

              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-sm text-red-400">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Business Name (Optional)</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Tell me about your website needs (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                    placeholder="Briefly describe what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || isLoading}
                  className="w-full px-8 py-4 rounded-xl bg-white text-black font-medium text-sm transition-all duration-200 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Request Free Consultation"}
                </button>
              </form>

              <p className="text-xs text-white/60 mt-4 text-center">
                Your request will be reviewed and confirmed via email. No automated booking - personal attention guaranteed.
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <a href="/" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50">
              Back to Home
            </a>
          </div>
        </div>
      </main>
    </ShaderBackground>
  )
}
