import React, { useState } from 'react';
import './TechStack.css';

function TechStack() {
  const [activeTech, setActiveTech] = useState(null);
  
  // Tech stack data with proficiency percentages
  const techStacks = [
    { 
      category: "MERN Stack", 
      items: [
        { name: "MongoDB", icon: "M", color: "#4DB33D", proficiency: 85 },
        { name: "Express", icon: "E", color: "#000000", proficiency: 80 },
        { name: "React", icon: "R", color: "#61DAFB", proficiency: 95 },
        { name: "Node.js", icon: "N", color: "#68A063", proficiency: 80 }
      ]
    },
    { 
      category: "Frontend", 
      items: [
        { name: "HTML", icon: "H", color: "#E44D26", proficiency: 99 },
        { name: "CSS", icon: "C", color: "#264DE4", proficiency: 99 },
        { name: "JavaScript", icon: "JS", color: "#F7DF1E", proficiency: 90 },
        { name: "React", icon: "R", color: "#61DAFB", proficiency: 90 }
      ]
    },
    { 
      category: "Backend & Databases", 
      items: [
        { name: "PHP", icon: "P", color: "#777BB4", proficiency: 65 },
        { name: "MySQL", icon: "M", color: "#4479A1", proficiency: 60 },
        { name: "SQL", icon: "S", color: "#336791", proficiency: 60 },
        { name: "MongoDB", icon: "M", color: "#4DB33D", proficiency: 85 }
      ]
    },
    { 
      category: "Languages", 
      items: [
        { name: "C++", icon: "C++", color: "#00599C", proficiency: 80 },
        { name: "JavaScript", icon: "JS", color: "#F7DF1E", proficiency: 90 }
      ]
    }
  ];

  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="section-header">
        <h2 className="section-title">Tech Stack</h2>
        <div className="title-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
        <p className="section-subtitle">Technologies I work with</p>
      </div>
      
      <div className="tech-grid">
        {techStacks.map((category, catIndex) => (
          <div 
            className="tech-category" 
            key={catIndex}
            style={{ animationDelay: `${catIndex * 0.1}s` }}
          >
            <h3 className="category-title">{category.category}</h3>
            <div className="tech-items">
              {category.items.map((tech, techIndex) => (
                <div 
                  className="tech-card" 
                  key={techIndex}
                  style={{ 
                    animationDelay: `${catIndex * 0.2 + techIndex * 0.1}s`,
                    // @ts-ignore
                    '--tech-color': tech.color
                  } as React.CSSProperties & Record<string, any>}
                  // @ts-ignore
                  onMouseEnter={() => setActiveTech(tech)}
                  onMouseLeave={() => setActiveTech(null)}
                >
                  <div className="tech-icon" style={{ backgroundColor: tech.color }}>
                    {tech.icon}
                  </div>
                  <div className="tech-name">{tech.name}</div>
                  
                  <div className="tech-proficiency">
                    <div 
                      className="proficiency-bar" 
                      style={{ width: `${tech.proficiency}%` }}
                    ></div>
                    <div className="proficiency-text">{tech.proficiency}%</div>
                  </div>
                  
                  <div className={`tech-hover ${activeTech === tech ? 'active' : ''}`}>
                    <div className="hover-content">
                      <div className="proficiency-percent">{tech.proficiency}%</div>
                      <div className="proficiency-label">Proficiency</div>
                      <div className="proficiency-graph">
                        <div 
                          className="graph-bar" 
                          style={{ width: `${tech.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="tech-glow-effect"></div>
    </section>
  );
}

export default TechStack;