import './knowledgebase.css';
import background from './assets/background.jpg';
import { FaBook, FaUsers, FaCode } from 'react-icons/fa'; // Importing icons

const KnowledgeBase = () => {
    return (
      <>
      <div className="kb-container" style={{ backgroundImage: `url(${background})` }}>
        <header className="kb-header">
          <h1 className="kb-logo">TIKIDOCS</h1>
          <nav className="kb-navigation">
            <a href="#" className="kb-nav-link">Knowledge Base</a>
            <a href="#" className="kb-nav-link">Blog</a>
            <a href="#" className="kb-nav-link">Forum</a>
            <a href="#" className="kb-nav-link">Contact Us</a>
            <button className="kb-signin-btn">Sign In</button>
          </nav>
        </header>

        <main className="kb-main">
          <h2 className="kb-title">Knowledge Base</h2>
          <p className="kb-description">
            We’re here to help. Get in touch and we’ll get back to you as soon as we can.
          </p>

          <div className="kb-search-container">
            <input type="text" placeholder="Search Knowledge Base" className="kb-search-input" />
            <button className="kb-search-btn">Search</button>
          </div>

          <div className="kb-section-container">
            <div className="kb-card">
              <FaBook className="kb-icon" />  {/* 📘 Book Icon for Help & Documentation */}
              <h3 className="kb-card-title">Help and Documentation</h3>
              <p className="kb-card-description">Built specifically for WordPress.</p>
              <button className="kb-readmore-btn">Read More</button>
            </div>

            <div className="kb-card">
              <FaUsers className="kb-icon" />  {/* 👥 Users Icon for Community Support */}
              <h3 className="kb-card-title">Community and Support</h3>
              <p className="kb-card-description">Built specifically for WordPress.</p>
              <button className="kb-readmore-btn">Read More</button>
            </div>

            <div className="kb-card">
              <FaCode className="kb-icon" />  {/* 💻 Code Icon for Developer & Resources */}
              <h3 className="kb-card-title">Developer and Resources</h3>
              <p className="kb-card-description">Built specifically for WordPress.</p>
              <button className="kb-readmore-btn">Read More</button>
            </div>
          </div>
        </main>
      </div>
      </>
    );
};

export default KnowledgeBase;
