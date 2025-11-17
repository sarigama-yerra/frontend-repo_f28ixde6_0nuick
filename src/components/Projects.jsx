import { motion } from 'framer-motion'

const projects = [
  { title: 'Café Hagens', img: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200&auto=format&fit=crop', desc: 'Minimalistische Website mit Fokus auf Atmosphäre.' },
  { title: 'Studio Kraftwerk', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop', desc: 'Portfolio mit subtilen Parallax-Effekten.' },
  { title: 'Hagen Bikes', img: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43f?q=80&w=1200&auto=format&fit=crop', desc: 'Produkt-Showcase, schnell und performant.' },
]

export default function Projects() {
  return (
    <section id="projekte" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-black"
        >
          Projekte
        </motion.h2>
        <p className="mt-3 text-black/60 max-w-2xl">Ein Auszug unserer Arbeiten – mit Liebe zum Detail und klarer Linie.</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-black">{p.title}</h3>
                <p className="text-black/60 mt-1">{p.desc}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
