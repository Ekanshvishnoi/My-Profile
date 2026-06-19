import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-7 py-4 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-dark/80">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 border-2 border-accent rounded-md flex items-center justify-center text-accent text-sm font-bold">&lt;/&gt;</div>
        <span className="text-accent font-medium tracking-wide text-sm">Ekansh Vishnoi</span>
      </div>
      <div className="flex gap-7 text-sm text-white/55">
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-white border-b border-accent pb-0.5' : 'hover:text-white transition-colors'}>Projects</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white border-b border-accent pb-0.5' : 'hover:text-white transition-colors'}>About me</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-white border-b border-accent pb-0.5' : 'hover:text-white transition-colors'}>Contact</NavLink>
      </div>
      <NavLink to="/resume">
        <button className="border border-accent text-accent rounded-md px-4 py-1.5 text-sm hover:bg-accent hover:text-white transition-all duration-300">
          HIRE ME
        </button>
      </NavLink>
    </nav>
  )
}
