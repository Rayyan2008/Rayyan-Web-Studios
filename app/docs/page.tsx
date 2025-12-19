"use client"

import Header from "@/components/header"
import ShaderBackground from "@/components/shader-background"

export default function Portfolio() {
  return (
    <ShaderBackground>
      <Header />
      <main className="relative z-20 min-h-screen px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-8 relative mx-auto"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            <span className="text-white/90 text-xs font-light relative z-10">📂 My Portfolio & Work</span>
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
                <div className="text-3xl mb-4">🏪</div>
                <h3 className="text-lg font-medium text-white mb-2">Local Restaurant Website</h3>
                <p className="text-sm text-white/70 mb-4">Complete business website with menu, reservations, and online ordering integration.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Next.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Responsive</span>
                </div>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-lg font-medium text-white mb-2">Consulting Firm Landing Page</h3>
                <p className="text-sm text-white/70 mb-4">High-converting landing page that increased client inquiries by 150%.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">HTML/CSS</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">JavaScript</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">SEO</span>
                </div>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="text-3xl mb-4">🛍️</div>
                <h3 className="text-lg font-medium text-white mb-2">E-commerce Store</h3>
                <p className="text-sm text-white/70 mb-4">Full online store with payment processing, inventory management, and mobile optimization.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Shopify</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Custom Theme</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Analytics</span>
                </div>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-lg font-medium text-white mb-2">Medical Practice Website</h3>
                <p className="text-sm text-white/70 mb-4">Professional healthcare website with appointment booking and patient portal.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">WordPress</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">PHP</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">HIPAA Compliant</span>
                </div>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-lg font-medium text-white mb-2">Educational Platform</h3>
                <p className="text-sm text-white/70 mb-4">Learning management system with course content, progress tracking, and certifications.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">React</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Node.js</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Database</span>
                </div>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-lg font-medium text-white mb-2">Website Redesign</h3>
                <p className="text-sm text-white/70 mb-4">Complete overhaul of outdated site, improving user experience and conversion rates by 200%.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">UI/UX Design</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">Performance</span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">SEO</span>
                </div>
                <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">View Project →</a>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-white text-center mb-8">What Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-sm text-white/70 mb-4 italic">
                  "Rayyan transformed our outdated website into a modern, professional site that actually brings in customers.
                  His communication was excellent and he delivered exactly what we needed."
                </p>
                <div className="text-sm font-medium text-white">Sarah Johnson</div>
                <div className="text-xs text-white/60">Restaurant Owner</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-sm text-white/70 mb-4 italic">
                  "Working with Rayyan was a great experience. He understood our business needs and created a website
                  that perfectly represents our brand. Highly recommend!"
                </p>
                <div className="text-sm font-medium text-white">Mike Chen</div>
                <div className="text-xs text-white/60">Consulting Firm Owner</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-2xl font-medium text-white text-center mb-8">My Skills & Expertise</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">💻</div>
                <h3 className="text-lg font-medium text-white mb-2">Frontend Development</h3>
                <p className="text-sm text-white/70">React, Next.js, HTML, CSS, JavaScript</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="text-lg font-medium text-white mb-2">UI/UX Design</h3>
                <p className="text-sm text-white/70">User-centered design, responsive layouts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-lg font-medium text-white mb-2">Performance Optimization</h3>
                <p className="text-sm text-white/70">Fast loading, SEO, accessibility</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
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
              <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-sm transition-all duration-200 hover:bg-white/90">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </main>
    </ShaderBackground>
  )
}
