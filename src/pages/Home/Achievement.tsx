import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import './Achievement.css';

function Achievement() {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = React.useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Stop confetti after 8 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="achievement-page">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          numberOfPieces={200}
          gravity={0.1}
          colors={['#ffd700', '#ffa500', '#ff8c00', '#ff6347', '#7b4ae2']}
        />
      )}
      
      <div className="celebration-ribbon top-ribbon">
        <div className="ribbon-text">WINNER</div>
      </div>
      
      <div className="achievement-container">
        <div className="trophy-container">
          <div className="trophy">
            <div className="cup"></div>
            <div className="base"></div>
          </div>
          <div className="trophy-glow"></div>
        </div>
        
        <div className="achievement-content">
          <h1 className="title">Hackathon Winner</h1>
          <h2 className="subtitle">Anganwadi Smart Digital Solution</h2>
          <p className="event">Dhemaji Engineering College Hackathon 2025</p>
          
          <div className="badge">1st Place</div>
          
          <div className="achievement-card">
            <div className="section">
              <h3>🏆 Achievement</h3>
              <p>1st Place Winner at Dhemaji Engineering College Hackathon 2025</p>
              <p>Recognized for offline capability, real-time efficiency, and practical use in rural India</p>
            </div>
            
            <div className="section">
              <h3>🧾 Overview</h3>
              <p>A mobile-first solution to digitally empower Anganwadi Centres for better management of attendance, ration distribution, and supervisor-level reporting — even in remote or low-connectivity areas.</p>
            </div>
            
            <div className="section">
              <h3>🚀 Purpose</h3>
              <p>To streamline the manual processes in Anganwadi centers by introducing facial recognition-based attendance, smart ration tracking, and real-time supervisor monitoring using a unified digital system.</p>
            </div>
            
            <div className="section">
              <h3>📱 Key Features</h3>
              <ul>
                <li><span className="feature-icon">👩‍👧‍👦</span> Facial Recognition Attendance</li>
                <li><span className="feature-icon">🍛</span> Smart Ration Distribution</li>
                <li><span className="feature-icon">📊</span> Supervisor Reporting Module</li>
                <li><span className="feature-icon">📴</span> Offline Functionality</li>
                <li><span className="feature-icon">🔔</span> Real-Time Alerts & Notifications</li>
                <li><span className="feature-icon">📍</span> GPS Location Capture</li>
              </ul>
            </div>
            
            <div className="section">
              <h3>💻 Tech Stack</h3>
              <div className="tech-stack">
                <div className="tech-pill">Frontend: React Native</div>
                <div className="tech-pill">Backend: FastAPI (Python)</div>
                <div className="tech-pill">Facial Recognition: OpenCV</div>
                <div className="tech-pill">Database: PostgreSQL</div>
                <div className="tech-pill">Other: JWT Auth, REST APIs</div>
              </div>
            </div>
            
            <div className="section">
              <h3>🧑‍💻 Team</h3>
              <div className="team-members">
                <div className="member">
                  <div className="member-icon">👤</div>
                  <div>
                    <div className="member-name">Rahul Saikia</div>
                    <div className="member-role">Full Stack Developer (React Native, Backend API)</div>
                  </div>
                </div>
                <div className="member">
                  <div className="member-icon">👤</div>
                  <div>
                    <div className="member-name">Uday</div>
                    <div className="member-role">Backend & DevOps</div>
                  </div>
                </div>
                <div className="member">
                  <div className="member-icon">👤</div>
                  <div>
                    <div className="member-name">Ranjit</div>
                    <div className="member-role">UI/UX & Data Logic</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="section">
              <h3>🎯 Impact</h3>
              <ul>
                <li>Designed to support real-world Anganwadi centers</li>
                <li>Can scale to hundreds of centers across districts</li>
                <li>Solves manual errors, corruption, and inefficiencies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="celebration-ribbon bottom-ribbon">
        <div className="ribbon-text">CHAMPIONS</div>
      </div>
    </div>
  );
}

export default Achievement;