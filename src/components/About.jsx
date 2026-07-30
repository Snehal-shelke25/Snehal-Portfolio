import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { profile, stats, timeline } from '../data';

function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numeric = parseInt(value, 10);
  const suffix = value.replace(/[0-9]/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numeric, { duration: 1.4, ease: 'easeOut' });
      const unsub = rounded.on('change', (v) => setDisplay(v));
      return () => {
        controls.stop();
        unsub();
      };
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">About Me</div>
          <h2 className="section-title">Learning, Building, Growing</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, x: -40, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <img
            src="/images/profile.jpg"
              alt="Snehal Shelke"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>

          <div className="about-text">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              I'm a Computer Engineering graduate from Pune, India, with a strong interest in DevOps
              and cloud computing. I enjoy designing automated, highly-available infrastructure on AWS
              and wiring it together with CI/CD pipelines using Jenkins, Docker, and Git.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              I'm comfortable across the stack that keeps modern applications running — Linux
              administration, MySQL, shell scripting, Docker, Jenkins, GitHub and AWS services like EC2, S3, VPC, and Load
              Balancers. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              I believe every challenge is an opportunity to learn, improve, and build something meaningful. Currently seeking a growth-oriented opportunity where I can apply and grow these skills
              in a real production environment.
            </motion.p>

            <div className="stats-row">
              {stats.map((s, i) => (
                <motion.div
                  className="stat-card"
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="stat-num">
                    <Counter value={s.num} />
                  </div>
                  <div className="stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          style={{ marginTop: 60 }}
        >
          {timeline.map((t, i) => (
            <motion.div
              className="timeline-item"
              key={t.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="timeline-dot" />
              <h4>{t.title}</h4>
              <span>{t.org} · {t.date}</span>
              <p>{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
