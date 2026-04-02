import { useEffect, useRef, useState } from 'react'

const terminalLines = [
  { prefix: '$ ', text: 'whoami', delay: 200 },
  { prefix: '> ', text: 'Ahmed Achoukhan', delay: 600, color: 'text-green-400' },
  { prefix: '$ ', text: 'cat role.txt', delay: 1100 },
  { prefix: '> ', text: 'Full Stack Developer', delay: 1500, color: 'text-blue-400' },
  { prefix: '$ ', text: 'echo $languages', delay: 2000 },
  { prefix: '> ', text: 'JavaScript · Python · TypeScript', delay: 2400, color: 'text-purple-400' },
  { prefix: '$ ', text: 'cat status.txt', delay: 2900 },
  { prefix: '> ', text: '🟢 Open to new opportunities', delay: 3300, color: 'text-yellow-400' },
]

export default function About() {
  const [visibleLines, setVisibleLines] = useState([])
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        terminalLines.forEach((line, i) => {
          setTimeout(() => {
            setVisibleLines(prev => [...prev, i])
          }, line.delay)
        })
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-mono text-blue-400 text-sm mb-2">// about_me</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Hey! I'm <span className="text-white font-semibold">Ahmed</span>, a passionate{' '}
              <span className="text-blue-400 font-semibold">Full Stack Developer</span> who loves building
              end-to-end web applications that are fast, clean, and user-friendly.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I work with modern technologies across the stack — from crafting responsive UIs with{' '}
              <span className="text-purple-400">React</span> to building robust APIs with{' '}
              <span className="text-blue-400">Node.js</span>. I'm always eager to learn, grow, and tackle new challenges.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to projects,
              or sipping coffee while debugging a stubborn bug at midnight ☕
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Coffee/day', value: '∞' },
              ].map(stat => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center border border-white/5 card-hover">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal card */}
          <div className="glass rounded-2xl overflow-hidden border border-blue-500/20 animate-pulse-glow">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 font-mono text-xs text-slate-500">terminal — zsh</span>
            </div>
            {/* Terminal body */}
            <div className="p-6 font-mono text-sm space-y-2 min-h-64">
              {terminalLines.map((line, i) => (
                <div key={i} className={`transition-all duration-300 ${visibleLines.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <span className="text-slate-500">{line.prefix}</span>
                  <span className={line.color || 'text-slate-300'}>{line.text}</span>
                </div>
              ))}
              {visibleLines.length === terminalLines.length && (
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-slate-500">$ </span>
                  <span className="w-2 h-4 bg-blue-400 animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
