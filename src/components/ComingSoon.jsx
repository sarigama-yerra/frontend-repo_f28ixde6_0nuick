import { motion } from 'framer-motion'

export default function ComingSoon({ title, subtitle }) {
  return (
    <section className="relative py-24 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-black"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-black/60"
        >
          {subtitle}
        </motion.p>
        <div className="mt-10">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/10 text-black/80">
            Coming Soon
            <span className="inline-block animate-pulse">•</span>
          </div>
        </div>
      </div>
    </section>
  )
}
