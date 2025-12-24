"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"
import { Store, Apple, ShoppingCart, Code, Palette, Zap, Users, FolderOpen } from "lucide-react"

export default function Portfolio() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-20 min-h-screen px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div
            className="flex items-center justify-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-8 relative mx-auto"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10 flex items-center">
              <FolderOpen className="w-4 h-4 mr-1" />
              My Portfolio & Work
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl md:leading-16 tracking-tight font-light text-white mb-4">
              <span className="font-medium italic instrument">Real</span> Projects,
              <br />
              <span className="font-light tracking-tight text-white">Real Results</span>
            </h1>
            <p className="text-sm font-light text-white/70 leading-relaxed max-w-2xl mx-auto">
              Here are some of the websites I've built for small businesses like yours. Each project reflects my commitment to quality,
              transparency, and helping businesses succeed online.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Project 1 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <Store className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-medium text-white mb-2">The Yellow Kitchen</h3>
                <p className="text-sm text-white/70 mb-4">Complete business website for The Yellow Kitchen with menu, reservations, and online ordering integration.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Next.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Responsive</span>
                </div>
                <a href="https://the-yellow-kitchen-shaan.vercel.app/" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <Apple className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-medium text-white mb-2">Calorie Tracker Web App</h3>
                <p className="text-sm text-white/70 mb-4">Web application for tracking daily calorie intake, logging meals, analyzing nutrition, and monitoring progress towards fitness goals.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Next.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Database</span>
                </div>
                <a href="https://kalories.vercel.app" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <ShoppingCart className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-medium text-white mb-2">E-commerce Store</h3>
                <p className="text-sm text-white/70 mb-4">Full online store with payment processing, inventory management, and mobile optimization.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Shopify</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Custom Theme</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Analytics</span>
                </div>
                <a href="https://shopcopyright.com" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>


          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-white text-center mb-8">What Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-sm text-white/70 mb-4 italic">
                  "Sapoto Infosys transformed our outdated website into a modern, professional site that actually brings in customers.
                  Their communication was excellent and they delivered exactly what we needed."
                </p>
                <div className="text-sm font-medium text-white">Aarav Sharma</div>
                <div className="text-xs text-white/60">Entrepreneur</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-sm text-white/70 mb-4 italic">
                  "Working with Sapoto Infosys was a great experience. They understood our business needs and created a website
                  that perfectly represents our brand. Highly recommend!"
                </p>
                <div className="text-sm font-medium text-white">Shaan</div>
                <div className="text-xs text-white/60">The Yellow Kitchen Owner</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-white text-center mb-8">My Skills & Expertise</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <Code className="w-8 h-8 mb-4 text-white inline-block" />
                <h3 className="text-lg font-medium text-white mb-2">Frontend Development</h3>
                <p className="text-sm text-white/70">React, Next.js, HTML, CSS, JavaScript</p>
              </div>
              <div className="text-center">
                <Palette className="w-8 h-8 mb-4 text-white inline-block" />
                <h3 className="text-lg font-medium text-white mb-2">UI/UX Design</h3>
                <p className="text-sm text-white/70">User-centered design, responsive layouts</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 mb-4 text-white inline-block" />
                <h3 className="text-lg font-medium text-white mb-2">Performance Optimization</h3>
                <p className="text-sm text-white/70">Fast loading, SEO, accessibility</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mb-4 text-white inline-block" />
                <h3 className="text-lg font-medium text-white mb-2">Client Communication</h3>
                <p className="text-sm text-white/70">Transparent, honest, reliable service</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-medium text-white mb-4">Ready to Work Together?</h2>
            <p className="text-sm text-white/70 mb-8">Let's discuss your project and create something amazing for your business.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="/" className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50">
                Back to Home
              </a>
              <a href="/consultation" className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90 inline-block">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </main>
    </ShaderBackground>
  )
}
