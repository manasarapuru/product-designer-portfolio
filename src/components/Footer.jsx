import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
 {/*      <p className="footer__text">Let's build something meaningful together.</p>
      <a
        href="https://linkedin.com/in/manasarapuru"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__linkedin"
        aria-label="LinkedIn profile"
      >
        <LinkedInIcon />
        Connect on LinkedIn
      </a> */}
      <div className="footer__bottom">
        <p className="footer__copy">© {new Date().getFullYear()} Manasa Rapuru</p>
      </div>
    </footer>
  );
}

