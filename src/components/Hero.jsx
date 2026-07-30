import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaDocker, FaLinux, FaJenkins } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import MagneticButton from './MagneticButton';
import { profile } from '../data';

const orbitIcons = [
  { icon: <FaAws />, angle: 0, radius: 210 },
  { icon: <FaDocker />, angle: 72, radius: 210 },
  { icon: <FaJenkins />, angle: 144, radius: 210 },
  { icon: <FaLinux />, angle: 216, radius: 210 },
  { icon: <SiKubernetes />, angle: 288, radius: 210 },
];

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    let timeout;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIdx((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.role);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <motion.div
            className="badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-dot" /> Open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I'm <span className="gradient-text">Snehal Shelke</span>
          </motion.h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {typed}
            <span className="typing-cursor">&nbsp;</span>
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <MagneticButton
              as="a"
              className="btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects <span className="arrow">→</span>
            </MagneticButton>
            <MagneticButton
              as="a"
              className="btn-outline"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a className="social-icon" href={profile.github} target="_blank" rel="noreferrer"><FaGithub /></a>
            <a className="social-icon" href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a className="social-icon" href={`mailto:${profile.email}`}><FaEnvelope /></a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="profile-wrap"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="profile-aura" />
              <div className="profile-ring">
              <div className="profile-photo-inner">
             <img
             src="/images/profile.jpg"
             alt="Snehal Shelke"
             onError={(e) => {
             e.target.style.display = "none";
             e.target.parentElement.innerHTML =
            '<div class="profile-initials-fallback">SS</div>';
           }}
           />
          </div>
          </div>
            </motion.div>
            {orbitIcons.map((o, i) => (
              <motion.div
                key={i}
                className="orbit-badge"
                style={{ color: ['#ff9900', '#2496ed', '#d33833', '#facc15', '#326ce5'][i] }}
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    transform: `rotate(${o.angle}deg) translate(${o.radius}px) rotate(-${o.angle}deg)`,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                >
                  {o.icon}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        
      </div>
    </section>
  );
}
