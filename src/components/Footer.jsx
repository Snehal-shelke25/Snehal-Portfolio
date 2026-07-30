import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo gradient-text">
              Snehal Shelke
            </div>

            <p>
              Aspiring DevOps & Cloud Engineer passionate about building secure,
              scalable, and automated cloud solutions using AWS, Docker,
              Jenkins, and modern DevOps practices.
            </p>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
          </div>

          <div className="footer-col">
            <h5>Connect</h5>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume (PDF)
            </a>

            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {year} Snehal Shelke • Built with React & Framer Motion
        </div>
      </div>
    </footer>
  );
}