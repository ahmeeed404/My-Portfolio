import { useState, useEffect } from 'react'

// Import YallaTrip images
import yalla1 from '../assets/yallatrip1.png'
import yalla2 from '../assets/yallatrip2.png'
import yalla3 from '../assets/yallatrip3.png'
import yalla4 from '../assets/yallatrip4.png'
import yalla5 from '../assets/yallatrip5.png'
import yalla6 from '../assets/yallatrip6.png'

// Import Movie App and TodoList images
import movie1 from '../assets/movieapp1.png'
import movie2 from '../assets/movieapp2.png'
import todo1 from '../assets/todolist1.png'

const projects = [
  {
    title: 'YallaTrip',
    desc: 'A collaborative travel planning platform designed to streamline itinerary creation and team coordination.',
    images: [yalla1, yalla2, yalla3, yalla4, yalla5, yalla6],
    tags: ['React', 'Collaboration', 'Travel', 'UX/UI'],
    link: 'https://github.com/ImyMek1/TeamProject_YallaTrip'
  },
  {
    title: 'IMOVIE-APP',
    desc: 'A modern movie exploration application that provides real-time data on latest releases and cinematic trends.',
    images: [movie1, movie2],
    tags: ['React', 'API Integration', 'Mobile Responsive'],
    link: 'https://github.com/ahmeeed404/IMOVIE-APP'
  },
  {
    title: 'TodoList',
    desc: 'A super clean and efficient task management application with a focus on simplicity and user experience.',
    images: [todo1],
    tags: ['React', 'productivity', 'Clean UI'],
    link: 'https://github.com/ahmeeed404/todo_list'
  },
  {
    title: 'Final Project',
    desc: 'A robust React-based application demonstrating advanced UI patterns and sophisticated state management.',
    tags: ['React', 'Professional', 'Responsive'],
    link: 'https://github.com/ahmeeed404/Ahmed_Achoukhan_Final_Project_React'
  }
]

function ProjectCard({ project, index }) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % project.images.length)
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [project.images])

  const hasImages = project.images && project.images.length > 0

  return (
    <div
      className="glass rounded-2xl overflow-hidden border border-white/5 card-hover group"
    >
      {/* Project Image Section */}
      <div className="h-56 bg-gradient-to-br from-dark-800 to-dark-700 relative overflow-hidden">
        {hasImages ? (
          <div className="relative w-full h-full">
            {project.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            {/* Image Indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {project.images.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      i === currentImage ? 'bg-blue-400 w-4' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <div className="text-6xl opacity-5 font-bold font-mono gradient-text absolute right-0 top-0 leading-none pointer-events-none select-none">{`0${index + 1}`}</div>
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-4 group-hover:scale-110 transition-transform duration-500">
              <span className="text-2xl">⚡</span>
            </div>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
          {project.title}
          <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">→</span>
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{project.desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-md bg-blue-500/5 border border-blue-500/10 text-blue-400/80 text-[10px] uppercase tracking-wider font-bold">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group/link"
          >
            <svg className="w-5 h-5 fill-current opacity-70 group-hover/link:opacity-100 transition-opacity" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span className="font-mono text-xs">View Code</span>
          </a>
          
          <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <p className="font-mono text-blue-400 text-sm mb-4 tracking-widest uppercase animate-pulse">// My Creations</p>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Featured Work</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}

          {/* Decorative Placeholder for future expansion */}
          <div className="rounded-2xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-12 text-slate-600 bg-white/[0.01]">
            <div className="w-12 h-12 rounded-full border border-dashed border-slate-700 flex items-center justify-center mb-4">
              <span className="text-xl">+</span>
            </div>
            <p className="font-mono text-xs uppercase tracking-widest">Expansion in Progress</p>
          </div>
        </div>
      </div>
    </section>
  )
}
