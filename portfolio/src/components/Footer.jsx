export default function Footer() {
  return (
    <footer className="flex justify-center gap-6 py-4 border-t border-white/5 text-xs text-white/25">
      <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
      <a href="mailto:your@email.com" className="hover:text-accent transition-colors">Email</a>
    </footer>
  )
}
