import  { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  //@ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
    <Navbar/>
     <div className="contact-container">
      {/* Animated background elements */}
      <div className="contact-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="contact-particle" />
        ))}
      </div>
      
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-header">
            <h1>Get In Touch</h1>
            <div className="accent-line"></div>
            <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
          </div>
          
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>rahulsaikia682@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+91 93873 94822</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Assam, India</p>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Connect with me</h3>
            <div className="social-icons">
              <a href="https://github.com/Rauxo" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rahul-saikia-b94a5a29a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form method="POST" action="https://api.web3forms.com/submit">
          <input type="hidden" name="access_key" value="ccec9771-307d-4c38-a256-8a680b82da98"/>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rahul Saikia"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'd like to discuss a project..."
                //@ts-ignore
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <div className="submit-icon">
                <FaEnvelope />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;