import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="px-7 pb-16 pt-4">
      <p className="text-[11px] tracking-wider uppercase text-white/30 mb-4">Featured projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border border-white/10 rounded-lg p-3 bg-white/[0.02] hover:border-accent/40 transition-colors"
          >
            <div className="h-[70px] rounded-md border border-dashed border-white/10 flex items-center justify-center text-[11px] text-white/20 mb-3 overflow-hidden">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                'screenshot'
              )}
            </div>
            <h3 className="text-sm font-medium text-white mb-1">{project.title}</h3>
            <p className="text-xs text-white/40 mb-3 line-clamp-2">{project.description}</p>
            <div className="flex gap-3">
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-xs text-accent flex items-center gap-1 hover:underline">
                <FiExternalLink size={12} /> Live
              </a>
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-xs text-white/40 flex items-center gap-1 hover:text-white">
                <FiGithub size={12} /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}