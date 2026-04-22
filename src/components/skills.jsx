import { useEffect, useRef, useState } from 'react'
// import icons 
import { FaReact } from "react-icons/fa6";
import { BsJavascript } from "react-icons/bs";
import { BsTypescript } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { GiElephant } from "react-icons/gi";
import { FaLaravel } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiGnubash } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";




const skills = [
  // Frontend
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" />, category: 'Frontend' },
  { name: 'JavaScript', icon: <BsJavascript className="text-[#F7DF1E]" />, category: 'Frontend' },
  { name: 'TypeScript', icon: <BsTypescript className="text-[#3178C6]" />, category: 'Frontend' },
  { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" />, category: 'Frontend' },
  { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: <IoLogoNodejs className="text-[#339933]" />, category: 'Backend' },
  { name: 'PHP', icon: <GiElephant className="text-[#777BB4]" />, category: 'Backend' },
  { name: 'Laravel', icon: <FaLaravel className="text-[#FF2D20]" />, category: 'Backend' },
  { name: 'Java', icon: <FaJava className="text-[#ED8B00]" />, category: 'Backend' },
  { name: 'Python', icon: <FaPython className="text-[#3776AB]" />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, category: 'Backend' },
  { name: 'MySql', icon: <GrMysql className="text-[#4479A1]" />, category: 'Backend' },

  // Tools
  { name: 'Git Bash', icon: <SiGnubash className="text-[#4EAA25]" />, category: 'Tools' },
  { name: 'GitHub', icon: <FaGithub className="text-[#ffffff]" />, category: 'Tools' },
  { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" />, category: 'Tools' },
]

const categories = ['All', 'Frontend', 'Backend', 'Tools']

const colors = {
  Frontend: 'from-blue-500 to-cyan-400',
  Backend: 'from-purple-500 to-pink-400',
  Tools: 'from-orange-500 to-yellow-400',
}

export default function Skills() {
  const [filter, setFilter] = useState('All')
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const filtered = filter === 'All' ? skills : skills.filter(s => s.category === filter)

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-purple-400 text-sm mb-2">// tech_stack</p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Tools</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white glow-purple'
                  : 'glass border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={`glass rounded-2xl p-5 border border-white/5 card-hover transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <div className="text-white font-semibold text-sm mb-3">{skill.name}</div>
              {/* Progress bar */}
              {/* <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${colors[skill.category]} transition-all duration-1000`}
                  style={{ width: visible ? `${skill.level}%` : '0%', transitionDelay: `${i * 60 + 300}ms` }}
                />
              </div> */}
              {/* <div className="text-right mt-1">
                <span className="text-slate-500 text-xs font-mono">{skill.level}%</span>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
