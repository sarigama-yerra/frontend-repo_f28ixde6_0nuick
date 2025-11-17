import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { to: '/', label: 'Startseite' },
  { to: '/loesungen', label: 'Lösungen' },
  { to: '/projekte', label: 'Projekte' },
  { to: '/events', label: 'Events' },
  { to: '/shop', label: 'Shop' }
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all ${scrolled ? 'scale-100' : 'scale-100'}`}>
      <div className="backdrop-blur-xl bg-white/70 dark:bg-black/50 border border-black/10 dark:border-white/10 shadow-lg rounded-full px-4 sm:px-5 py-2 flex items-center gap-2">
        <button className="sm:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition" onClick={() => setOpen(v => !v)} aria-label="Menü">
          <Menu size={18} />
        </button>
        <div className={`flex-1 items-center gap-1 sm:gap-2 ${open ? 'flex' : 'hidden sm:flex'}`}>
          {navItems.map(item => {
            const active = pathname === item.to
            return (
              <Link key={item.to} to={item.to} className={`text-sm sm:text-[15px] px-3 py-1.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${active ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
