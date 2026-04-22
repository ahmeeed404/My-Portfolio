import { useState } from 'react'

const contactLinks = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'ahmed.achoukhan04@gmail.com',
    href: 'mailto:ahmed.achoukhan04@gmail.com',
    color: 'from-blue-500 to-cyan-400',
    hoverBorder: 'hover:border-blue-500/50',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/ahmeeed404',
    href: 'https://github.com/ahmeeed404',
    color: 'from-slate-400 to-slate-200',
    hoverBorder: 'hover:border-slate-400/50',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Ahmed Achoukhan',
    href: 'https://www.linkedin.com/in/ahmed-achoukhan-b8a413180/',
    color: 'from-blue-600 to-blue-400',
    hoverBorder: 'hover:border-blue-600/50',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('ahmed.achoukhan04@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-pink-400 text-sm mb-2">// get_in_touch</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Main contact card */}
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 animate-pulse-glow text-center mb-10">
          <div className="text-5xl mb-6">👋</div>
          <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            I'm currently open to new opportunities. Whether you have a project in mind,
            a question, or just want to say hi — my inbox is always open!
          </p>

          {/* Copy email button */}
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 px-6 py-3.5 glass rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:glow-blue mb-10"
          >
            <span className="font-mono text-blue-400 text-sm">ahmed.achoukhan04@gmail.com</span>
            <span className="text-slate-400 group-hover:text-white transition-colors text-sm">
              {copied ? '✅ Copied!' : '📋 Copy'}
            </span>
          </button>

          {/* Social links grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                className={`glass rounded-2xl p-5 border border-white/5 ${link.hoverBorder} card-hover transition-all duration-300 flex flex-col items-center gap-3 group`}
              >
                <span className="text-3xl">{link.icon}</span>
                <div>
                  <div className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${link.color} text-sm`}>
                    {link.label}
                  </div>
                  <div className="text-slate-400 text-xs mt-1 font-mono">{link.value}</div>
                </div>
                <span className="text-slate-600 text-xs group-hover:text-slate-400 transition-colors">
                  → Open
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
