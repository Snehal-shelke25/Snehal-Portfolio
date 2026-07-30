import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import MagneticButton from './MagneticButton';
import { useNavigate, useLocation } from 'react-router-dom';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }, 
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 200;
      sections.forEach((sec) => {
        if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
  } else {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
};


  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container nav-inner">
          <div
  className="logo gradient-text"
  style={{ cursor: "pointer" }}
  onClick={() => navigate("/")}
>
  Snehal Shelke
</div>
          <div className="nav-links">
            {links.map((l) => (
              <a
                key={l.id}
                className={`nav-link ${active === l.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.id);
                }}
                href={`#${l.id}`}
              >
                {l.label}
              </a>
            ))}
          </div>
          <MagneticButton
            className="btn-primary nav-cta"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go('contact');
            }}
          >
            Let's Connect <span className="arrow">→</span>
          </MagneticButton>
          <button className="nav-toggle" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <HiMenu />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35 }}
          >
            <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <HiX />
            </button>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(l.id);
                }}
              >
                {l.label}
              </a>
            ))}
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
