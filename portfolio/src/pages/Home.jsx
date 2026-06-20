import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="h-px bg-white/5 mx-7" />
      <FeaturedProjects />
    </main>
  )
}