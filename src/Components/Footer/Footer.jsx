import './Footer.css';
import { ImFacebook, ImBehance } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import { GrLinkedinOption } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Copyright from '../Copyright/Copyright';

const Footer = () => {
  const FootersLinksData = {
    Aboutus: [
      { linkname: 'vision', link: "*" },    
      { linkname: 'articles', link: "*" },    
      { linkname: 'careers', link: "*" },    
      { linkname: 'service terms', link: "*" },    
      { linkname: 'donate', link: "*" },   
    ],    
    Discover: [
      { linkname: 'Home', link: "*" },    
      { linkname: 'articles', link: "*" },    
      { linkname: 'Books', link: "*" },    
      { linkname: 'Authors', link: "*" },    
      { linkname: 'Subjects', link: "*" },   
      { linkname: 'Advanced Search', link: "*" },   
    ],    
    Myaccount: [
      { linkname: 'Sign In', link: "*" },    
      { linkname: 'articles', link: "*" },    
      { linkname: 'View Cart', link: "*" },    
      { linkname: 'My Wishlist', link: "*" },    
      { linkname: 'Track My Order', link: "*" },      
    ],  
    Help: [
      { linkname: 'Help center', link: "*" },    
      { linkname: 'Report a problem', link: "*" },    
      { linkname: 'View Cart', link: "*" },    
      { linkname: 'Suggesting edits', link: "#" },    
      { linkname: 'Contact us', link: "*" },   
    ],  
    socials: [
      { icon: ImFacebook, link: 'https://www.facebook.com' },
      { icon: FiInstagram, link: 'https://www.instagram.com' },
      { icon: GrLinkedinOption, link: 'https://www.linkedin.com' },
      { icon: RiTwitterXLine, link: 'https://www.twitter.com' },
      { icon: ImBehance, link: 'https://www.behance.net' }
    ],    
  };

  return (
    <footer>
      <div className="container footer-container">
        {/* About us */}
        <div>
          <h4>About Us</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Aboutus.map(({ link, linkname }, index) => (
              <li key={index}><Link to={link}>{linkname}</Link></li>
            ))}
          </ul>
        </div>

        {/* Discover */}
        <div>
          <h4>Discover</h4>
          <ul className="discover-params param-links">
            {FootersLinksData.Discover.map(({ link, linkname }, index) => (
              <li key={index}><Link to={link}>{linkname}</Link></li>
            ))}
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h4>My Account</h4>
          <ul className="myAccount-params param-links">
            {FootersLinksData.Myaccount.map(({ link, linkname }, index) => (
              <li key={index}><Link to={link}>{linkname}</Link></li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4>Help</h4>
          <ul className="help-params param-links">
            {FootersLinksData.Help.map(({ link, linkname }, index) => (
              <li key={index}><Link to={link}>{linkname}</Link></li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          {FootersLinksData.socials.map(({ icon: Icon, link }, index) => (
            <a href={link} key={index} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
