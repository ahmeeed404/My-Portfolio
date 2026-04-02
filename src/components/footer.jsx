export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm">
          <span className="text-blue-400">Ahmed</span>
          <span className="text-purple-400">&lt;Dev/&gt;</span>
        </div>

        <p className="text-slate-500 text-sm font-mono">
          © {year} Ahmed Achoukhan — Built with{' '}
          <span className="text-blue-400">React</span> +{' '}
          <span className="text-purple-400">Tailwind</span>
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/ahmeeed404" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors text-sm">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ahmed-achoukhan" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors text-sm">
            LinkedIn
          </a>
          <a href="mailto:ahmed.achoukhan04@gmail.com" className="text-slate-500 hover:text-purple-400 transition-colors text-sm">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
