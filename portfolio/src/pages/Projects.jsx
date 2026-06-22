import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const categories = ['All', 'Frontend', 'Full Stack', 'Backend', 'Open Source']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  // Spotlight only makes sense when viewing everything
  const showSpotlight = activeFilter === 'All'
  const featured = projects.filter((p) => p.featured)
  const [spotlightMain, ...spotlightSide] = featured
  const restProjects = showSpotlight
    ? filteredProjects.filter((p) => !p.featured)
    : filteredProjects

  return (
    <main className="min-h-screen px-5 sm:px-7 py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1.5">
          My Projects
        </h1>
        <p className="text-sm text-white/35">A collection of things I've built</p>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mt-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${
              activeFilter === cat
                ? 'bg-accent text-white border-accent'
                : 'bg-transparent text-white/45 border-white/15 hover:border-accent/40 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Spotlight section -- only shown for "All" */}
      <AnimatePresence>
        {showSpotlight && spotlightMain && (
          <motion.div
            key="spotlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[11px] tracking-wider uppercase text-white/30 mb-3">Featured</p>
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 mb-10">
              <ProjectCard project={spotlightMain} variant="large" />
              <div className="flex flex-col gap-4">
                {spotlightSide.slice(0, 2).map((project) => (
                  <ProjectCard key={project.id} project={project} variant="medium" />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid section */}
      <p className="text-[11px] tracking-wider uppercase text-white/30 mb-3">
        {showSpotlight ? 'All projects' : `${activeFilter} projects`}
      </p>

      {restProjects.length === 0 ? (
        <p className="text-sm text-white/30 py-8">No projects in this category yet.</p>
      ) : (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {restProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="grid" />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </main>
  )
}