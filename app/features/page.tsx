"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"

export default function Features() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-8 relative mx-auto"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">🌟 Professional Web Development Services</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl md:leading-16 tracking-tight font-light text-white mb-8">
            <span className="font-medium italic instrument">Reliable</span> Solutions
            <br />
            <span className="font-light tracking-tight text-white">for Your Business</span>
          </h1>

          {/* Description */}
          <p className="text-sm font-light text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
            I create custom websites that help small businesses like yours build trust, attract customers, and grow online.
            Every project is handled personally with transparent communication and honest advice.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-4">🏢</div>
              <h3 className="text-lg font-medium text-white mb-2">Business Websites</h3>
              <p className="text-sm text-white/70">Multi-page professional websites that showcase your services and build credibility with potential customers.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-4">📄</div>
              <h3 className="text-lg font-medium text-white mb-2">Landing Pages</h3>
              <p className="text-sm text-white/70">Single-page designs optimized for conversions, perfect for promotions, events, or specific campaigns.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-4">🔄</div>
              <h3 className="text-lg font-medium text-white mb-2">Website Redesign</h3>
              <p className="text-sm text-white/70">Transform outdated websites into modern, professional sites that work harder for your business.</p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-4">📱</div>
              <h3 className="text-lg font-medium text-white mb-2">Mobile-Friendly</h3>
              <p className="text-sm text-white/70">Responsive designs that look great and work perfectly on all devices, from phones to desktops.</p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-4">🚀</div>
              <h3 className="text-lg font-medium text-white mb-2">SEO Optimization</h3>
              <p className="text-sm text-white/70">Basic search engine optimization to help your website rank better and attract more visitors.</p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl mb-4">🛠️</div>
              <h3 className="text-lg font-medium text-white mb-2">Ongoing Support</h3>
              <p className="text-sm text-white/70">Optional maintenance and small updates to keep your website current and functioning smoothly.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="/" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50">
              Back to Home
            </a>
            <a href="/consultation" className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90">
              Get Free Consultation
            </a>
          </div>
        </div>
      </main>
    </ShaderBackground>
  )
}
