import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { projects } from "../data";
import "../ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ padding: "60px", color: "#fff" }}>
        <h1>Project Not Found</h1>

        <Link to="/">Go Home</Link>
      </div>
    );
  }

  const handleBack = () => {
    navigate("/", {
      state: {
        scrollTo: "projects",
      },
    });
  };

  return (
  <div className="project-details">

    {/* Back Button */}
    <button className="back-btn" onClick={handleBack}>
      <FaArrowLeft />
      <span>Back to Projects</span>
    </button>

   <section className="detail-card hero-card">

  <h2>📌 Project Title</h2>

  <h1 className="project-title">
    {project.title}
  </h1>

</section>
<section className="detail-card">

  <h2>📝 Project Description</h2>

  <p>{project.description}</p>

</section>

    {/* Overview */}

<section className="detail-card">

  <h2>📖 Overview</h2>

  <p>{project.overview}</p>

</section>

{/* Problem Statement */}

<section className="detail-card">

  <h2>🎯 Problem Statement</h2>

  <p>{project.problemStatement}</p>

</section>
{/* Objectives */}

<section className="detail-card">

  <h2>🎯 Objectives</h2>

  <ul className="feature-list">
    {project.objectives.map((objective, index) => (
      <li key={index}>{objective}</li>
    ))}
  </ul>

</section>
{/* Architecture */}

<section className="detail-card">

  <h2>🏗 Architecture</h2>

  <img
    src={project.architectureImage}
    alt={project.title}
    className="architecture-image"
  />

</section>

{/* Technologies */}

<section className="detail-card">

  <h2>🛠 Technologies Used</h2>

      <div className="tech-grid">

        {project.tags.map((tag) => (
          <span key={tag} className="tech-badge">
            {tag}
          </span>
        ))}

      </div>

    </section>

    {/* Features */}

    <section className="detail-card">

      <h2>✨ Key Features</h2>

      <ul className="feature-list">

        {project.features.map((feature, index) => (
          <li key={index}>
            {feature}
          </li>
        ))}

      </ul>

    </section>
    {/* My Role */}

<section className="detail-card">

  <h2>👩‍💻 My Role</h2>

  <ul className="feature-list">
    {project.myRole.map((role, index) => (
      <li key={index}>{role}</li>
    ))}
  </ul>

</section>

   {/* Challenges */}

<section className="detail-card">

  <h2>⚡ Challenges & Solutions</h2>

  {project.challenges.map((item, index) => (
    <div key={index} className="challenge-card">
      <h4>Challenge {index + 1}</h4>
      <p><strong>Challenge:</strong> {item.challenge}</p>
      <p><strong>Solution:</strong> {item.solution}</p>
    </div>
  ))}

</section>
{/* Project Output */}

<section className="detail-card">

  <h2>📄 Project Output</h2>

  <p>{project.outputDescription}</p>

  <a
    href={project.outputPdf}
    target="_blank"
    rel="noreferrer"
    className="github-btn"
  >
    View Output PDF
  </a>

</section>
    {/* GitHub */}

    <section className="detail-card github-card">

      <h2>💻 GitHub Repository</h2>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="github-btn"
      >
        <FaGithub />
        View Source Code
      </a>

    </section>

  </div>
);
}