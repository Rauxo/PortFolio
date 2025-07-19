import  { useState, useEffect, useRef } from 'react';
import './HeroSection.css';

function HeroSection() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        heroRef.current.style.setProperty('--cursor-x', `${x}px`);
        heroRef.current.style.setProperty('--cursor-y', `${y}px`);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const handleDownload = () => {
    // In a real app, you would trigger the download here
    alert('Downloading resume...');
  };

  return (
    <div className="hero-container" ref={heroRef}>
      {/* Animated background elements */}
      <div className="animated-bg">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="orb"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content">
        <div className="greeting">Hello, I'm</div>
        <h1 className="name">Rahul Saikia</h1>
        <div className="title-container">
          <div className="title">
            <span>F</span>
            <span>u</span>
            <span>l</span>
            <span>l</span>
            <span>-</span>
            <span>S</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
            <span>&nbsp;</span>
            <span>D</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </div>
          <div className="title-underline"></div>
        </div>
        
        <p className="description">
          Crafting elegant solutions to complex problems with clean, efficient code.
        </p>
        
        <button 
          className={`resume-btn ${isHoveringButton ? 'hover' : ''}`}
          onMouseEnter={() => setIsHoveringButton(true)}
          onMouseLeave={() => setIsHoveringButton(false)}
          onClick={handleDownload}
        >
          <span>Download Resume</span>
          <div className="btn-glow"></div>
        </button>
      </div>
      
      {/* Animated cursor glow effect */}
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px`,
          transform: `scale(${isHoveringButton ? 3 : 1})`
        }}
      ></div>
    </div>
  );
}

export default HeroSection;