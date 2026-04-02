export default function Projects() {
  const placeholders = [
    { title: 'Project Alpha', desc: 'Full stack web application', tags: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Project Beta', desc: 'API-driven platform', tags: ['Express', 'PostgreSQL', 'REST'] },
    { title: 'Project Gamma', desc: 'Modern UI/UX experience', tags: ['Next.js', 'Tailwind', 'TypeScript'] },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-blue-400 text-sm mb-2">// my_work</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm mt-4 font-mono">
            <span className="text-yellow-400">⚠</span> Projects will be added soon
          </p>
        </div>

        {/* Placeholder grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((p, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden border border-white/5 card-hover group"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-dark-800 to-dark-700 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-10 font-bold font-mono gradient-text">{`0${i + 1}`}</div>
                </div>
                {/* Animated grid */}
                <div className="absolute inset-0 opacity-5"
                  style={{ backgroundImage: 'linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                />
                {/* Coming soon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="font-mono text-sm text-slate-400 border border-slate-600 px-3 py-1 rounded-full">
                    🔒 Coming Soon
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links placeholder */}
                <div className="flex gap-3">
                  <span className="flex items-center gap-1 text-xs text-slate-600 cursor-not-allowed">
                    <span>⬛</span> GitHub
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-600 cursor-not-allowed">
                    <span>🔗</span> Live Demo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
