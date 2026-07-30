import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <motion.div
      className="project-card"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ transition: 'transform 0.25s ease-out' }}
    >
      <div className="project-thumb">
        <span className="project-thumb-icon">{project.icon}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.tagline}</p>
        <div className="tag-row">
          {project.tags.map((t) => (
            <span className="tag-pill" key={t}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a className="project-link-btn" href={project.github} target="_blank" rel="noreferrer">
            <FaGithub /> Code
          </a>
         <Link
          className="project-link-btn"
          to={`/project/${project.id}`}
          state={{ from: "projects" }}
         >
  <FaExternalLinkAlt /> Details
</Link>
        </div>
        </div>
       </motion.div>
       );
       }
