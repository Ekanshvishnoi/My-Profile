import { motion } from 'framer-motion'
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si'

// Spheres sit on a true circle: center (50%,50%), radius 40% of the
// container, every 60deg apart. The laptop's half-diagonal is ~27.6% of
// the container, so a 40% radius leaves a verified clearance margin.
const techSpheres = [
  { Icon: SiReact,       color: '#61DAFB', size: 60, top: '10%', left: '50%',   delay: 0 },     // top
  { Icon: SiTailwindcss, color: '#38BDF8', size: 36, top: '30%', left: '84.6%', delay: 0.9 },   // upper right
  { Icon: SiNodedotjs,   color: '#83CD29', size: 46, top: '70%', left: '84.6%', delay: 1.1 },   // lower right
  { Icon: SiPython,      color: '#FFD43B', size: 44, top: '90%', left: '50%',   delay: 0.3 },   // bottom
  { Icon: SiJavascript,  color: '#F7DF1E', size: 50, top: '70%', left: '15.4%', delay: 0.6 },   // lower left
  { Icon: SiTypescript,  color: '#3178C6', size: 40, top: '30%', left: '15.4%', delay: 1.6 },   // upper left
]

function Sphere({ Icon, color, size, top, left, delay }) {
  return (
    // Outer wrapper: STATIC positioning + centering only. Framer Motion
    // never touches this element, so the -50%/-50% centering translate
    // can never be overridden.
    <div
      className="absolute"
      style={{ top, left, width: size, height: size, transform: 'translate(-50%, -50%)' }}
    >
      {/* Inner element: ONLY handles the floating animation. */}
      <motion.div
        className="w-full h-full rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: `0 0 24px -6px ${color}55`,
        }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        <Icon style={{ color, fontSize: size * 0.45 }} />
      </motion.div>
    </div>
  )
}

export default function TechOrbit() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto aspect-square">
      {/* Center laptop / code visual -- same outer/inner split as spheres */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] aspect-[3/2] z-10"
      >
        <motion.div
          className="w-full h-full rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center overflow-hidden"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-[88%] text-[10px] sm:text-[11px] leading-5 font-mono text-accent/70 text-left">
            <div><span className="text-white/30">const</span> dev = {'{'}</div>
            <div className="pl-3 text-white/50">role: <span className="text-accent">"Web Dev"</span>,</div>
            <div className="pl-3 text-white/50">loves: <span className="text-accent">"code"</span></div>
            <div>{'}'}</div>
          </div>
        </motion.div>
      </div>

      {techSpheres.map((s, i) => (
        <Sphere key={i} {...s} />
      ))}
    </div>
  )
}