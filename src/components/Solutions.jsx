import { motion } from 'framer-motion'
import { Monitor, Sparkles, MapPin } from 'lucide-react'

const cards = [
  {
    icon: Monitor,
    title: 'Moderne Websites',
    desc: 'Schnell, responsiv und suchmaschinenfreundlich – perfekt für lokale Unternehmen.',
  },
  {
    icon: Sparkles,
    title: 'Animationen',
    desc: 'Feine Microinteractions und Scroll-Effekte, die Leben in Ihre Marke bringen.',
  },
  {
    icon: MapPin,
    title: 'Lokales Branding',
    desc: 'Starke, klare Auftritte für Hagen und Umgebung – präzise auf Ihre Zielgruppe.',
  },
]

export default function Solutions() {
  return (
    <section id="loesungen" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-black"
        >
          Lösungen
        </motion.h2>
        <p className="mt-3 text-black/60 max-w-2xl">Klar strukturiert, verständlich erklärt und auf Wirkung optimiert.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition" />
              <c.icon className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-semibold text-black">{c.title}</h3>
              <p className="mt-2 text-black/60">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
