import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function CtaBanner() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div
          className="cta-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2>Let's build reliable, automated infrastructure together</h2>
          <MagneticButton
            as="a"
            className="btn-primary"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch <span className="arrow">→</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
