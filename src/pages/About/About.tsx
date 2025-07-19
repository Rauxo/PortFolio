import  { useMemo, useEffect, useRef } from 'react';
import './About.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function About() {
  const particles = useMemo(() => {
    //@ts-ignore
    return Array.from({ length: 30 }).map((_, ) => {
      const size = Math.floor(Math.random() * 8) + 2;
      const top = Math.floor(Math.random() * 100);
      const left = Math.floor(Math.random() * 100);
      const delay = Math.floor(Math.random() * 10);
      const duration = Math.floor(Math.random() * 20) + 10;
      const opacity = Math.random() * 0.5 + 0.1;
      return { size, top, left, delay, duration, opacity };
    });
  }, []);
  
  const techStackRef = useRef(null);
  
  useEffect(() => {
    if (!techStackRef.current) return;
    
    const container = techStackRef.current;
    //@ts-ignore
    const items = container.querySelector('.tech-scroll-inner');
    const clone = items.cloneNode(true);
    //@ts-ignore
    container.appendChild(clone);
    //@ts-ignore
    const itemCount = container.querySelectorAll('.tech-item').length / 2;
    const duration = itemCount * 3; // 3s per item
    
    //@ts-ignore
    container.style.setProperty('--duration', `${duration}s`);
    //@ts-ignore
    container.classList.add('animate-scroll');
    
    // Cleanup function
    return () => {
      //@ts-ignore
      container.removeChild(clone);
    };
  }, []);

  return (
  <>
  <Navbar/>
    <div className="about-container">
      <div className="hex-grid">
        <div className="hex-grid-inner"></div>
      </div>
      
      {particles.map((particle, i) => (
        <div 
          key={i}
          className="particle" 
          style={{
            //@ts-ignore
            '--size': `${particle.size}px`,
            '--top': `${particle.top}%`,
            '--left': `${particle.left}%`,
            '--delay': `${particle.delay}s`,
            '--duration': `${particle.duration}s`,
            '--opacity': particle.opacity
          }}
        ></div>
      ))}
      
      {/* Main content */}
      <div className="about-content">
        <div className="profile-header">
          <div className="name-gradient">
            <h1>Rahul Saikia</h1>
            <div className="accent-line"></div>
          </div>
          <h2>Full Stack Developer & Tech Innovator</h2>
        </div>
        
        <div className="bio-grid">
          <div className="bio-card">
            <div className="card-icon">💻</div>
            <h3>Background</h3>
            <p>
              Passionate Full Stack Developer from Assam, India. Currently pursuing BCA with 
              <span className="highlight"> 2+ years experience</span> building professional web/mobile apps using 
              <span className="highlight"> MERN stack</span>. Specialize in PostgreSQL, React Native & cloud deployment.
            </p>
          </div>
          
          <div className="bio-card">
            <div className="card-icon">🚀</div>
            <h3>Key Projects</h3>
            <ul>
              <li>Suraksha - Women's safety app with live tracking</li>
              <li>Smart Anganwadi system - <span className="highlight">1st place</span> at DEC Hackathon</li>
              <li>Founder of <span className="highlight"><a href="https://codeshop.in">Codeshop</a></span> development agency</li>
            </ul>
          </div>
          
          <div className="bio-card">
            <div className="card-icon">🎯</div>
            <h3>Aspirations</h3>
            <p>
              Working toward becoming a Software Engineer at Google. Passionate about creating 
              impactful technology solutions like music apps, social platforms, and tools like 
              <span className="highlight"> Wee'</span> relationship tracker.
            </p>
          </div>
        </div>
        
        <div className="tech-stack">
          <h3>Technical Expertise</h3>
          <div className="tech-scroll-container" ref={techStackRef}>
            <div className="tech-scroll-inner">
              <div className="tech-item">
                <div className="tech-icon">⚛️</div>
                <span>React & React Native</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">🌐</div>
                <span>Node.js & Express</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">🗃️</div>
                <span>MongoDB & PostgreSQL</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">☁️</div>
                <span>Cloud Deployment</span>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon">📱</div>
                <span>Mobile Development</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">🔄</div>
                <span>RESTful APIs</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default About;