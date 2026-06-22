import { motion } from 'framer-motion'
import { FiMapPin, FiBriefcase, FiMail, FiGithub } from 'react-icons/fi'
import { skills } from '../data/skills'
import { education } from '../data/education'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45 },
}

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Top hero: photo + quick info | bio */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 px-5 sm:px-7 pt-10 sm:pt-12 pb-10 border-b border-white/5">
        <motion.div {...fadeUp} className="flex flex-col items-center gap-4 text-center">
          <div className="w-32 h-32 rounded-full border-2 border-accent flex items-center justify-center text-xs text-white/20 bg-white/[0.02]">
            Photo
          </div>
          <div>
            <h2 className="text-base font-medium text-white">Ekansh Vishnoi</h2>
            <p className="text-xs text-accent mt-0.5">Web Developer</p>
          </div>
          <div className="w-full max-w-[220px] flex flex-col gap-2.5 text-left mt-2">
            <div className="flex items-center gap-2.5 text-xs text-white/40">
              <FiMapPin size={14} className="text-accent shrink-0" /> Moradabad, India
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/40">
              <FiBriefcase size={14} className="text-accent shrink-0" /> Open to work
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/40">
              <FiMail size={14} className="text-accent shrink-0" /> ekanshvishnoi6@email.com
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/40">
              <FiGithub size={14} className="text-accent shrink-0" /> https://github.com/Ekanshvishnoi
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.45, delay: 0.1 }}>
          <p className="text-[11px] tracking-wider uppercase text-white/30 mb-3">About me</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
            Passionate about building for the web
          </h1>
          <p className="text-sm text-white/45 leading-relaxed mb-3">
            I'm Ekansh Vishnoi, a computer science student passionate about building useful 
            and digital websites. I enjoy solving problems, learning new technologies, and
            turning ideas into real world projects.
          </p>
          <p className="text-sm text-white/45 leading-relaxed">
            Currently, I'm focused on web development, machine learning and cloud computing.
            I enjoy writing clean code, experimenting new ideas and continuosly improving my
            skills as a developer.
          </p>
          <div className="inline-flex items-center gap-2.5 mt-5 px-3.5 py-2 rounded-full border border-accent/30 bg-accent/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs text-white/45">Currently learning: <span className="text-white/70">ExpressJs</span></span>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="px-5 sm:px-7 py-10 border-b border-white/5">
        <motion.h2 {...fadeUp} className="text-xl sm:text-2xl font-bold text-white mb-6">
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {Object.entries(skills).map(([group, items], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="text-[11px] tracking-wider uppercase text-white/30 mb-2.5">{group}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill, idx) => (
                  <span
                    key={skill}
                    className={`text-[11px] px-2.5 py-1 rounded-md border ${
                      idx < 2
                        ? 'bg-accent/10 border-accent/25 text-accent'
                        : 'bg-white/[0.03] border-white/10 text-white/50'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="px-5 sm:px-7 py-10">
        <motion.h2 {...fadeUp} className="text-xl sm:text-2xl font-bold text-white mb-6">
          Education
        </motion.h2>
        <div className="max-w-xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 pb-6 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 mt-1" />
                {i < education.length - 1 && <span className="w-px flex-1 bg-accent/20 mt-1" />}
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-1">{edu.degree}</h3>
                <p className="text-xs text-accent mb-1">{edu.school}</p>
                <p className="text-[11px] text-white/30">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}