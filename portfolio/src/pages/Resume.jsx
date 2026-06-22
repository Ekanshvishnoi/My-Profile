import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiCopy, FiCheck, FiAward, FiStar } from 'react-icons/fi'
import { GiTrophyCup } from 'react-icons/gi'
import { certifications, achievements } from '../data/certifications'
import { education } from '../data/education'
import { topSkills } from '../data/topSkills'

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
}

const achievementIcons = [GiTrophyCup, FiAward, FiStar]

function SectionLabel({ children }) {
  return (
    <p className="flex items-center gap-3 text-[11px] tracking-wider uppercase text-white/30 mb-4">
      {children}
      <span className="flex-1 h-px bg-white/10" />
    </p>
  )
}

export default function Resume() {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/resume.pdf`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API may be unavailable -- fail silently
    }
  }

  return (
    <main className="min-h-screen px-5 sm:px-7 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-6 border-b border-white/5">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1.5">My Resume</h1>
          <p className="text-sm text-white/35">Interactive view — or grab the PDF below</p>
        </motion.div>
        <a href="/resume.pdf" download className="shrink-0">
          <button className="flex items-center justify-center gap-2 bg-accent text-white rounded-md px-5 py-2.5 text-sm hover:opacity-90 transition-opacity w-full sm:w-auto">
            <FiDownload size={15} />
            Download PDF
          </button>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
        {/* Left column */}
        <div className="flex flex-col gap-10">

          {/* Certifications */}
          <div>
            <SectionLabel>Certifications & Courses</SectionLabel>
            <div>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title + i}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 pb-5 last:pb-0"
                >
                  <div className="flex flex-col items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 mt-1" />
                    {i < certifications.length - 1 && <span className="w-px flex-1 bg-accent/20 mt-1" />}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white mb-1">{cert.title}</h3>
                    <p className="text-xs text-accent mb-1">{cert.platform}</p>
                    <p className="text-[11px] text-white/30">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <SectionLabel>Achievements</SectionLabel>
            <div className="flex flex-col gap-4">
              {achievements.map((ach, i) => {
                const Icon = achievementIcons[i % achievementIcons.length]
                return (
                  <motion.div
                    key={ach.title + i}
                    {...fadeUp}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="w-9 h-9 min-w-[36px] rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center mt-0.5">
                      <Icon size={15} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1">{ach.title}</h3>
                      <p className="text-xs text-white/35 mb-1.5">{ach.event} · {ach.year}</p>
                      <span className="inline-block text-[10px] px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">
                        {ach.tag}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionLabel>Education</SectionLabel>
            <div>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4 pb-5 last:pb-0"
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
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-8">
          <motion.div {...fadeUp}>
            <SectionLabel>PDF Preview</SectionLabel>
            <div className="border border-white/10 rounded-lg overflow-hidden mb-4 bg-white" style={{ height: 360 }}>
              <object data="/resume.pdf" type="application/pdf" className="w-full h-full">
                {/* Fallback shown only if the browser can't render PDFs inline,
                    or if resume.pdf hasn't been added to /public yet */}
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-center p-6 bg-dark">
                  <p className="text-xs text-white/40">
                    Preview unavailable — make sure <code className="text-accent">resume.pdf</code> is in your <code className="text-accent">public/</code> folder.
                  </p>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-xs text-accent underline">
                    Try opening it directly
                  </a>
                </div>
              </object>
            </div>

            <a href="/resume.pdf" download className="block mb-2.5">
              <button className="w-full flex items-center justify-center gap-2 bg-accent text-white rounded-md py-2.5 text-sm hover:opacity-90 transition-opacity">
                <FiDownload size={14} />
                Download PDF
              </button>
            </a>
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-center gap-2 bg-transparent text-white/45 border border-white/10 rounded-md py-2.5 text-sm hover:text-white hover:border-white/25 transition-colors"
            >
              {copied ? <FiCheck size={14} className="text-accent" /> : <FiCopy size={14} />}
              {copied ? 'Link copied!' : 'Copy resume link'}
            </button>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.4, delay: 0.1 }}>
            <SectionLabel>Top skills</SectionLabel>
            <div className="flex flex-col gap-3.5">
              {topSkills.map((skill) => (
                <div key={skill.name}>
                  <p className="text-xs text-white/50 mb-1.5">{skill.name}</p>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}