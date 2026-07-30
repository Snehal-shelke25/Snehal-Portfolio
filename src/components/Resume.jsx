import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="section-tag">RESUME</p>

<h2 className="section-title">
  Explore My Professional Journey
</h2>

<p className="section-description">
  Explore my education, AWS & DevOps skills,
  projects, certifications and technical expertise.
</p>

<div className="resume-content">

  <div className="resume-left">

    <h3>📚 What's Inside?</h3>

    <ul>
      <li>✔ Education</li>
      <li>✔ DevOps & Cloud Skills</li>
      <li>✔ Technical Skills</li>
      <li>✔ Projects</li>
      <li>✔ Certifications</li>
    </ul>

  </div>

  <div className="resume-right">

    <a
      href="/resume/snehal_cv.pdf"
      download
      className="resume-download-btn"
    >
      📄 Download My Resume
    </a>

  </div>

</div>
          
        </motion.div>

      </div>
    </section>
  );
}