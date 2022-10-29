import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="main">
      <p>Made with ♡.</p>
      <p>© {year} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
