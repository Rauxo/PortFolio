import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <div className="animated-bg">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="orb"></div>
      </div>
      <div className="education-content">
        <h2 className="section-title">Education Journey</h2>
        <div className="timeline">
          <div className="education-entry left">
            <div className="entry-content">
              <h3>2021 - 2023</h3>
              <h4>Higher Secondary (Commerce)</h4>
              <p>Kalpataru Academy, Numaligarh, Assam</p>
            </div>
          </div>
          <div className="education-entry right">
            <div className="entry-content">
              <h3>2023 - Present</h3>
              <h4>Bachelor of Computer Applications (BCA)</h4>
              <p>Debraj Ray College, under Dibrugarh University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;