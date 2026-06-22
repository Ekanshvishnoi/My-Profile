import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu automatically whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const linkClass = ({ isActive }) =>
    isActive ? 'text-white border-b border-accent pb-0.5' : 'hover:text-white transition-colors'

  const mobileLinkClass = ({ isActive }) =>
    `block w-full py-2.5 text-sm ${isActive ? 'text-white' : 'text-white/55 hover:text-white'} transition-colors`

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-dark/80 border-b border-white/10">
      <div className="flex justify-between items-center px-5 sm:px-7 py-4">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 border-2 border-accent rounded-md flex items-center justify-center text-accent text-sm font-bold">&lt;/&gt;</div>
          <span className="text-accent font-medium tracking-wide text-sm">Ekansh Vishnoi</span>
        </NavLink>

        {/* Desktop nav links -- hidden below lg */}
        <div className="hidden lg:flex gap-7 text-sm text-white/55">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/about" className={linkClass}>About me</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <NavLink to="/resume" className="hidden lg:block">
          <button className="border border-accent text-accent rounded-md px-4 py-1.5 text-sm hover:bg-accent hover:text-white transition-all duration-300">
            HIRE ME
          </button>
        </NavLink>

        {/* Hamburger -- only visible below lg */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden text-white/70 hover:text-white p-1 -mr-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col px-5 py-3">
              <NavLink to="/" end className={mobileLinkClass}>Home</NavLink>
              <NavLink to="/projects" className={mobileLinkClass}>Projects</NavLink>
              <NavLink to="/about" className={mobileLinkClass}>About me</NavLink>
              <NavLink to="/contact" className={mobileLinkClass}>Contact</NavLink>
              <NavLink to="/resume" className="mt-3 mb-1">
                <button className="w-full border border-accent text-accent rounded-md py-2.5 text-sm hover:bg-accent hover:text-white transition-all duration-300">
                  HIRE ME
                </button>
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}