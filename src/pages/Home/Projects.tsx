import  { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Coaching Center",
      category: "Full Stack",
      description: "A comprehensive coaching platform with course enrollment, progress tracking, and automated certificate generation.",
      features: [
        "Student dashboard with progress tracking",
        "Admin analytics for revenue & expenses",
        "Automated certificate generation",
        "Secure payment processing",
        "Role-based access control"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express","Tailwind CSS","Redux"],
      accentColor: "#7b4ae2",
      demoLink: "https://www.linkedin.com/posts/rahul-saikia-b94a5a29a_mern-webdevelopment-tailwindcss-activity-7334239534894743554-t-7E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEhqNyAB_17HHQSQPAurFVyBAakVlQjbstU",
      codeLink: "#"
    },
    {
      id: 2,
      title: "SafeHer - Women Safety App",
      category: "React Native",
      description: "Mobile application with emergency alert system that shares live location with trusted contacts.",
      features: [
        "One-tap emergency alerts",
        "Live location sharing every 10 seconds",
        "Trusted contacts management",
        "SMS/email notifications"
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
      accentColor: "#ff416c",
      demoLink: "https://www.instagram.com/reel/DHtcOMlyEmg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      codeLink: "#"
    },
    {
      id: 3,
      title: "Wuru Store",
      category: "Full Stack",
      description: "Full-featured online game platform recharge website.",
      features: [
        "Buy and Recharge Game account",
        "Complete Responsive with premium design",
        "Complete Dynamic",
        "Complete Control from Admin Panel"
      ],
      technologies: ["React", "Node.js", "MongoDB","ExpressJS", "Redux","Payment Gateway" ],
      accentColor: "#654ea3",
      demoLink: "https://wurustore.in/",
      codeLink: "#"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % projects.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isHovering, projects.length]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-text">Project Portfolio</span>
          <span className="title-decoration">
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
          </span>
        </h2>
        <p className="section-subtitle">Selected works showcasing my expertise</p>
      </div>
      
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className={`project-card ${index === activeIndex ? 'active' : ''}`}
              key={project.id}
              onMouseEnter={() => {
                if (!isMobile) {
                  setIsHovering(true);
                  setActiveIndex(index);
                }
              }}
              onMouseLeave={() => !isMobile && setIsHovering(false)}
              onClick={() => isMobile && setActiveIndex(index)}
              //@ts-ignore
              style={{ '--accent-color': project.accentColor }}
            >
              <div className="card-glow"></div>
              <div className="card-header">
                <div className="project-number">0{project.id}</div>
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="action-btn"
                >
                  <i className="fas fa-external-link-alt"></i> View Demo
                </a>
                
              </div>
            </div>
          ))}
        </div>
        
        <div className="project-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show project ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Projects;