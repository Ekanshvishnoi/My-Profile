import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

// variant: "large" (spotlight hero card), "medium" (spotlight side card), "grid" (default grid card)
export default function ProjectCard({ project, variant = 'grid', index = 0 }) {
  const imgHeight = variant === 'large' ? 'h-[160px]' : variant === 'medium' ? 'h-[80px]' : 'h-[70px]'
  const titleSize = variant === 'large' ? 'text-[15px]' : 'text-[13px]'
  const padding = variant === 'large' ? 'p-4' : 'p-3'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02] hover:border-accent/40 transition-colors"
    >
      <div className={`${imgHeight} border-b border-white/5 flex items-center justify-center text-[11px] text-white/20 overflow-hidden`}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          'screenshot'
        )}
      </div>

      <div className={padding}>
        <h3 className={`${titleSize} font-medium text-white mb-1.5`}>{project.title}</h3>

        {variant === 'large' && (
          <p className="text-xs text-white/40 leading-relaxed mb-3">{project.description}</p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.slice(0, variant === 'large' ? 4 : 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-accent flex items-center gap-1 hover:underline"
          >
            <FiExternalLink size={12} /> Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-white/40 flex items-center gap-1 hover:text-white"
          >
            <FiGithub size={12} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}