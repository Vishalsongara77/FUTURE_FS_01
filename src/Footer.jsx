

const Footer = () => {

  return (
    <footer className="footer">
      <hr className="footer-hr" />
      <div className="footer-content">
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            &copy; {new Date().getFullYear()} Vishal Songara. All rights reserved.
          </p>
          <div className="footer-bottom-right">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <a href="#contact">Connect with me</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
