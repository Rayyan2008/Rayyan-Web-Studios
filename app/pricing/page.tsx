"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import { DollarSign, FileText, Building, Rocket, Check, X } from "lucide-react"

export default function Pricing() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-8 relative mx-auto"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10"><DollarSign className="inline w-4 h-4 mr-1" /> Transparent Pricing for Quality Work</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl md:leading-16 tracking-tight font-light text-white mb-8">
            <span className="font-medium italic instrument">Affordable</span> Solutions
            <br />
            <span className="font-light tracking-tight text-white">That Deliver Results</span>
          </h1>

          {/* Description */}
          <p className="text-sm font-light text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
            Every project is unique, so pricing depends on your specific needs. I offer transparent quotes with no hidden fees.
            All work includes ongoing support and honest advice. Prices are negotiable based on project requirements.
            These are starting templates - final pricing depends on your specific needs and scope.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Basic Package */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <FileText className="w-8 h-8 mb-4 text-white inline-block" />
              <h3 className="text-xl font-medium text-white mb-2">Landing Page</h3>
              <div className="text-3xl font-bold text-white mb-4">Starting at Rs 8k</div>
              <p className="text-sm text-white/70 mb-6">Perfect for promotions, events, or simple online presence.</p>
              <ul className="text-left text-sm text-white/70 space-y-2 mb-6">
                <li>• Single-page responsive design</li>
                <li>• Basic SEO setup</li>
                <li>• Contact form integration</li>
                <li>• 1 month free support</li>
              </ul>
              <a href="/consultation" className="w-full px-6 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 inline-block text-center">
                Get Started
              </a>
            </div>

            {/* Business Package */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 relative text-center">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
                Most Popular
              </div>
              <Building className="w-8 h-8 mb-4 text-white inline-block" />
              <h3 className="text-xl font-medium text-white mb-2">Business Website</h3>
              <div className="text-3xl font-bold text-white mb-4">Starting at Rs 20k</div>
              <p className="text-sm text-white/70 mb-6">Complete multi-page website for small businesses.</p>
              <ul className="text-left text-sm text-white/70 space-y-2 mb-6">
                <li>• Up to 5 pages</li>
                <li>• Mobile-optimized design</li>
                <li>• SEO optimization</li>
                <li>• 3 months free support</li>
                <li>• Google Analytics setup</li>
              </ul>
              <a href="/consultation" className="w-full px-6 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 inline-block text-center">
                Get Started
              </a>
            </div>

            {/* Custom Package */}
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              <Rocket className="w-8 h-8 mb-4 text-white inline-block" />
              <h3 className="text-xl font-medium text-white mb-2">Custom Solution</h3>
              <div className="text-3xl font-bold text-white mb-4">Starting at Rs 40k</div>
              <p className="text-sm text-white/70 mb-6">Advanced features, e-commerce, or complex requirements.</p>
              <ul className="text-left text-sm text-white/70 space-y-2 mb-6">
                <li>• Custom functionality</li>
                <li>• E-commerce integration</li>
                <li>• Advanced SEO</li>
                <li>• 6 months free support</li>
                <li>• Performance optimization</li>
              </ul>
              <a href="/consultation" className="w-full px-6 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 inline-block text-center">
                Get Started
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-lg font-medium text-white mb-4">What's Included in Every Package</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-white/70">
              <div>• Transparent communication</div>
              <div>• Honest project timeline</div>
              <div>• No outsourcing - personal work</div>
              <div>• Free consultation call</div>
              <div>• Mobile-responsive design</div>
              <div>• Fast loading speeds</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4 flex-wrap mt-12">
            <a href="/" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50">
              Back to Home
            </a>
            <a href="/consultation" className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 inline-block">
              Free Consultation
            </a>
          </div>
        </div>
      </main>
    </ShaderBackground>
  )
}
