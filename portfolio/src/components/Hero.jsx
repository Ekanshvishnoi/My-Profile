import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import useTypewriter from '../hooks/useTypewriter'
import TechOrbit from './TechOrbit'

const roles = ['Web Developer', 'React Developer', 'Frontend Engineer', 'Freelancer']

export default function Hero() {
  const typedRole = useTypewriter(roles)

  return (
    <section className="flex flex-col lg:flex-row items-center gap-6 px-7 pt-12 pb-10 lg:pt-16">
      {/* Left: text content */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl sm:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-4">
          EKANSH <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; VISHNOI
        </h1>

        <p className="text-sm text-white/50 mb-6 h-5">
          I'm a <span className="text-accent">{typedRole}</span>
          <span className="inline-block w-[2px] h-4 bg-accent ml-0.5 animate-pulse align-middle" />
          {' '}with X years of experience.
        </p>

        <a href="/contact">
          <button className="flex items-center gap-2 bg-accent text-white rounded-md px-5 py-2.5 text-sm mb-6 hover:opacity-90 transition-opacity">
            <FiSend size={14} />
            CONTACT ME
          </button>
        </a>

        <div className="flex gap-2.5">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-[34px] h-[34px] border border-white/20 rounded-md flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-colors">
            <FaInstagram size={15} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-[34px] h-[34px] border border-white/20 rounded-md flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-colors">
            <FaLinkedin size={15} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-[34px] h-[34px] border border-white/20 rounded-md flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-colors">
            <FaGithub size={15} />
          </a>
        </div>
      </motion.div>

      {/* Right: floating tech orbit visual */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <TechOrbit />
      </motion.div>
    </section>
  )
}