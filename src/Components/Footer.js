import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import pinterest from "../img/pinterest.png";
import twitter from "../img/twitter.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterSocial">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer">
          <img src={pinterest} alt="pinterest" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <div id="FooterContact"></div>
    </div>
  );
}

export default Footer;
