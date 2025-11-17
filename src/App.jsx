import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Projects from './components/Projects'
import ComingSoon from './components/ComingSoon'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Projects />
        <ComingSoon title="Events" subtitle="Bald gibt es hier spannende Formate rund um Web, Design und Tech." />
        <ComingSoon title="Shop" subtitle="Ausgewählte digitale Produkte und Templates – in Kürze verfügbar." />
        <footer className="py-12 border-t border-black/10">
          <div className="max-w-6xl mx-auto px-6 text-sm text-black/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} CWAZY. Alle Rechte vorbehalten.</div>
            <div className="flex items-center gap-4">
              <a href="#loesungen" className="hover:text-black transition-colors">Lösungen</a>
              <a href="#projekte" className="hover:text-black transition-colors">Projekte</a>
              <a href="#" className="hover:text-black transition-colors">Kontakt</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
