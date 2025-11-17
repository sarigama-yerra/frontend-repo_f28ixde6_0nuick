import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-black"
          >
            CWAZY – kreative Websites für Hagen und Umgebung
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-black/70"
          >
            Modern, schnell und mit Liebe zum Detail. Wir bauen Webauftritte, die hängen bleiben.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#loesungen" className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white hover:-translate-y-0.5 transition transform">
              <span>Unsere Lösungen</span>
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="#projekte" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 hover:bg-black/5 transition">
              Referenzen ansehen
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
