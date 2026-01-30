
import HTMLFlipBook from "react-pageflip";
import myPic from "../assets/me.jpg";

import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp } from "react-icons/fa";

// import "./Book.css";

function Book() {
  const pages = [
   
    {
      content: (
        <div className="profile-section">
          <img src={myPic} alt="Profile" className="profile-pic" />

          <h2 className="profile-name">Piyush Kumar</h2>
          <h3 className="profile-role">Frontend Developer</h3>

          <div className="social-icons">
            <a href="https://www.facebook.com/piyush.kumar.904/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/piyush-kumar-176001263/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/kumarPiyush91" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a
              href="https://wa.me/916201718719?text=Hi%20Piyush,%20I%20found%20your%20portfolio!"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>
          <a href="/cv.pdf" download className="cv-button">
            Download CV
          </a>
        </div>
      ),
    },

    
    {
      title: "About Me",
      content: (
        <p>
          I’m Piyush Kumar, a self-taught Software Engineer and Author with 5+ years of hands-on industry experience in software development. I learned web development using freely available online resources, which stands as proof that with the right mindset, consistency, and curiosity, anyone can build strong technical skills.

I have authored 10 globally recognized books and actively contribute to various open-source platforms worldwide. I enjoy simplifying complex concepts through coding and writing, making them engaging, practical, and scalable.

Let’s connect and create something worthwhile.
        </p>
      )
    },


    
    {
      title: "Education",
      content: (
        <ul className="edu-list">
          <li>
            <strong>Diploma:</strong> Electronics & Communication Engineering
            <br />
            Ranchi University, India (2009–2012)
            <br />
            First Class with 62%
          </li>

          <li>
            <strong>Degree:</strong> History (Honors)
            <br />
            Vinoba Bhave University, India (2016–2019)
            <br />
            First Class with 64%
          </li>
        </ul>
      ),
    },

  
   {
  title: "Skills",
  content: (
    <div className="skills-wrapper">
      <p>
        <strong>• Frontend:</strong> React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS 
      </p>
      <p>
        <strong>• State & Data:</strong> Redux, Context API, REST API, GraphQL 
      </p>
      <p>
        <strong>• Backend & Database:</strong> Node.js, Express.js, MongoDB, MySQL
      </p>
      <p>
        <strong>• Performance & Accessibility:</strong> WCAG Guidelines, Lighthouse Audits, Code Splitting, Lazy Loading 
      </p>
      <p>
        <strong>• Testing & Tools:</strong> Jest, React Testing Library, Chrome DevTools, Vite, npm 
      </p>
      <p>
        <strong>• DevOps:</strong> Git & GitHub, Docker, Netlify, Render 
      </p>
    </div>
  ),
},

    {
      title: "Experience",
      content: (
        <div className="experience-wrapper">
          <p>
            <strong>Company:</strong> Promit & Company <br />
            <strong>GSTIN: 20ABBFP3869L1Z2</strong> <br />
            <strong>ARN: AA201125025773P </strong>
          </p>
          <p>
            <strong>Role:</strong> Frontend Developer
          </p>
          <p>
            <strong>Duration:</strong> 2021 - Present
          </p>
          <p>
            <strong>Responsibilities:</strong> Developing responsive web
            applications, collaborating with design and backend teams,
            implementing new features using modern frontend technologies.
          </p>
        </div>
      ),
    },

  
    {
  title: "Projects",
  content: (
    <div className="projects-list">
      <a href="https://piyush-kumar.store/" className="project-link" target="_blank" rel="noopener noreferrer">
        Project 1 - Personal BookStore: secure PayPal payment integration 
      </a>
      <a href="https://addons.mozilla.org/en-US/firefox/addon/laughy/" className="project-link" target="_blank" rel="noopener noreferrer">
        Project 2 - Laughy: Firefox AddOn 
      </a>
      <a href="https://realtime-wildfire-tracker.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">
        Project 3 - Realtime-wildfire-Tracker
      </a>
      <a href="https://www.npmjs.com/package/funny-error-excuse" className="project-link" target="_blank" rel="noopener noreferrer">
        Project 4 - Funny-error-excuse : npm Package 
      </a>
      <a href="https://mamanourish.netlify.app/" className="project-link" target="_blank" rel="noopener noreferrer">
        Project 5 - MamaNourish: Pregnancy Nutrient Calculator 
      </a>
    </div>
  ),
},

   
    {
      title: "Contact",
      content: (
        <div className="contact-section">
          <p>Mobile: <a href="tel:+916201718719">+916201718719</a></p>
          <p>Email: <a href="mailto:p041991@gmail.com">p041991@gmail.com</a></p>

        </div>
      ),
    },

    {
      content: " Thank You for visiting",
    },

  
    {
      content:
        "“If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.” ― 'Martin Luther King Jr.'",
      className: "quote-page",
    },
  ];

  return (
    <HTMLFlipBook width={350} height={550} showCover={true} size="fixed">
      {/* Cover Page */}
      <div className="page cover">
        <div className="page-content">
          <h1>Portfolio Flipbook</h1>
          <h3>Piyush Kumar</h3>
        </div>
      </div>

      {/* Dynamic Pages */}
      {pages.map((page, index) => (
        <div key={index} className={`page ${page.className || ""}`}>
          <div className="page-content">
            {page.title && <h2>{page.title}</h2>}

            <div className="page-text">{page.content}</div>
          </div>
        </div>
      ))}
    </HTMLFlipBook>
  );
}

export default Book;
