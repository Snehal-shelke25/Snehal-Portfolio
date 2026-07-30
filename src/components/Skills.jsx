import { motion } from 'framer-motion';
import { skillGroups, skillChips } from '../data';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Skills & Tools</div>
          <h2 className="section-title">What I work with</h2>
          <p className="section-sub">
            A grounded toolkit across cloud infrastructure, automation, and systems — built through
            certifications and hands-on projects.
          </p>
        </motion.div>

        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              className="skill-group-card"
              key={group.title}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: gi * 0.12 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(59,130,246,0.2)' }}
            >
              <div className="skill-group-title">{group.icon} {group.title}</div>
              {group.items.map((item, i) => (
                <div className="skill-item" key={item.name}>
                  <div className="skill-item-top">
                    <span>{item.name}</span>
                    <span>{item.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        <div className="skill-chip-cloud">
          {skillChips.map((chip, i) => (
            <motion.span
              className="skill-chip"
              key={chip}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
