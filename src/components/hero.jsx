import { useEffect, useState } from 'react'

const roles = ['Full Stack Developer', 'React Developer', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-2xl" />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      {/* Floating code snippets */}
      <div className="absolute top-24 right-8 md:right-16 opacity-20 font-mono text-xs text-blue-400 rotate-3 select-none hidden md:block">
        <div className="glass rounded-lg p-3 text-left leading-relaxed">
          <span className="text-purple-400">const</span> dev = {'{'}<br />
          &nbsp;&nbsp;name: <span className="text-green-400">"Ahmed"</span>,<br />
          &nbsp;&nbsp;stack: <span className="text-orange-400">["React", "Node"]</span><br />
          {'}'}
        </div>
      </div>

      <div className="absolute bottom-32 left-4 md:left-16 opacity-20 font-mono text-xs text-purple-400 -rotate-2 select-none hidden md:block">
        <div className="glass rounded-lg p-3 text-left leading-relaxed">
          <span className="text-blue-400">function</span> <span className="text-yellow-400">build</span>() {'{'}<br />
          &nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-green-400">"awesome"</span>;<br />
          {'}'}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-sm text-slate-400 border border-blue-500/20">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Greeting */}
        <p className="font-mono text-blue-400 text-lg mb-4 animate-fadeInUp">
          <span className="text-slate-500">// </span>Hello, world! I'm
        </p>

        {/* Name */}
        <h1 className="font-sans text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text">Ahmed Achoukhan</span>
        </h1>

        {/* Typing role */}
        <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-mono font-semibold mb-8 animate-fadeInUp h-10" style={{ animationDelay: '0.2s' }}>
          <span className="text-slate-400">I'm a </span>
          <span className="text-white">{displayed}</span>
          <span className="w-0.5 h-8 bg-blue-400 animate-pulse inline-block" />
        </div>

        {/* Short bio */}
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          I craft modern, performant web applications from front to back.
          Passionate about clean code, great UX, and building things that matter.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 glow-purple hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-blue-500/40 text-blue-400 font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-slate-600 text-xs font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
