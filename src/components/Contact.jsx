import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import MagneticButton from './MagneticButton';
import { profile } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1400);
  };

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Contact</div>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-sub">
            Open to full-time DevOps / Cloud roles and collaborations. Drop a message and I'll get
            back to you.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="field">
              <label>Name</label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell me a bit more..." />
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  className="success-box"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span className="check-circle">✓</span> Message sent — thank you! I'll reply soon.
                </motion.div>
              ) : (
                <MagneticButton as="button" type="submit" className="btn-primary submit-btn">
                  {status === 'sending' ? <span className="spinner" /> : <>Send Message <span className="arrow">→</span></>}
                </MagneticButton>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            className="contact-info-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-info-item">
              <div className="contact-icon-box"><FaEnvelope /></div>
              <div>
                <h5>Email</h5>
                <p>{profile.email}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon-box"><FaPhone /></div>
              <div>
                <h5>Phone</h5>
                <p>{profile.phone}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon-box"><FaMapMarkerAlt /></div>
              <div>
                <h5>Location</h5>
                <p>{profile.location}</p>
              </div>
            </div>
            <div className="badge" style={{ marginBottom: 24 }}>
              <span className="badge-dot" /> Open to opportunities
            </div>
            <div className="hero-socials">
              <a className="social-icon" href={profile.github} target="_blank" rel="noreferrer"><FaGithub /></a>
              <a className="social-icon" href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
