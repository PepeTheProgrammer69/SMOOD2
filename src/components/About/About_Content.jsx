import React from 'react';
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons'
import { fab, faFacebook, faXTwitter, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import "../../../public/About.css"

const About_Content = () => {
  return (
    <>
      <div className="d-flex align-items-center container-fluid intro-container my-3">
        <div className="spy-logo mx-4"><h1>S&P 500</h1></div>
        <div className="spy-introduction align-content-center">
          <div className="spy-introduction-text">
            <p className="spi-text-p">
              The S&P 500 is a stock market index that measures the stock performance of 500 large companies listed on
              stock exchanges in the United States. The S&P 500 is a capitalization-weighted index. Each security's
              contribution to the index is equal to its market capitalization.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center container-fluid intro-container my-3">
        <div className="spy-logo mx-4"><h1 className="meatTheBeat">Meet the Developers of SMOOOD</h1></div>
        <div className="dev-introduction align-content-center">
          <div className="dev-introduction-text">
            <div id="SameerKhan"><img className="SAM" src="../../../images/Sameer%20Khan%20CC.png" alt="Sameer Khan" />
              <figcaption className="intro-caption" style={{ textAlign: "center" }}>Sameer Khan</figcaption>
            </div>
            <div id="ShahmirKhan"><img className="Shahmir" src="../../../images/image.png" alt="Shahmir Khan" />
              <figcaption className="intro-caption" style={{ textAlign: "center" }}>Shahmir Khan</figcaption>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center container-fluid intro-container my-3">
        <div className="spy-logo mx-4"><img className="SAM-P" src="../../../images/Sameer%20Khan%20CC.png"
                                            alt="Sameer Khan" />
        <figcaption className="intro-caption" style={{textAlign: "center"}}>Sameer Khan</figcaption>
        </div>
        <div className="spy-introduction align-content-center">
          <div className="spy-introduction-text">
            <ul className="spi-text-p">
              <li className="li-items-intro">A Web-developer aspiring to become a DevOps engineer.</li>
              <li className="li-items-intro">Climbing the ladder of full-stack development.</li>
              <li className="li-items-intro">The man behind the SMOOD project.</li>
            </ul>
            <div className="d-flex social-links"><span className="linkUp"> Link with Sameer Khan </span>
              <div className="d-flex link-icons ">
                <a style={{ paddingRight: "10px" }}
                   href="https://www.facebook.com/profile.php?id=100025016447926&mibextid=ZbWKwL">
                  <FontAwesomeIcon className="resize-icons" icon={faFacebook} inverse/></a>

                <a style={{ paddingRight: "10px" }} href="https://x.com/TheUninvited444?t=m_53ocll8UJQJCIQa0bbVQ&s=08">
                  <FontAwesomeIcon className="resize-icons" icon={faXTwitter} inverse/>
                </a>

                <a style={{ paddingRight: "10px" }} href="https://github.com/PepeTheProgrammer69"><FontAwesomeIcon className="resize-icons"
                  icon={faGithub} inverse/></a>

                <a style={{ paddingRight: "5px" }}
                   href="www.linkedin.com/in/muhammad-sameer-ali-842a98271"><FontAwesomeIcon className="resize-icons" icon={faLinkedin} inverse/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center container-fluid intro-container my-3">
        <div className="spy-logo mx-4"><img className="Shahmir-P" src="../../../images/image.png"
                                            alt="Shahmir Khan" />
          <figcaption className="intro-caption" style={{ textAlign: "center" }}>Shahmir Khan</figcaption>
        </div>
        <div className="spy-introduction align-content-center">
          <div className="spy-introduction-text">
            <ul className="spi-text-p">
              <li className="li-items-intro">Aspiring Data Scientist in Finance Domain.</li>
              <li className="li-items-intro">Passionate about storytelling with data.</li>
              <li className="li-items-intro">Good with numbers.</li>
            </ul>
            <div className="d-flex social-links"><span className="linkUp"> Link with Shahmir Khan </span>
              <div className="d-flex link-icons ">
                <a style={{ paddingRight: "10px" }}
                   href="https://www.facebook.com/profile.php?id=100025016447926&mibextid=ZbWKwL">
                  <FontAwesomeIcon className="resize-icons" icon={faFacebook} inverse/></a>

                <a style={{ paddingRight: "10px" }} href="https://x.com/TheUninvited444?t=m_53ocll8UJQJCIQa0bbVQ&s=08">
                  <FontAwesomeIcon className="resize-icons" icon={faXTwitter} inverse/>
                </a>

                <a style={{ paddingRight: "10px" }} href="https://github.com/PepeTheProgrammer69"><FontAwesomeIcon
                  className="resize-icons"
                  icon={faGithub} inverse/></a>

                <a style={{ paddingRight: "5px" }}
                   href="www.linkedin.com/in/muhammad-sameer-ali-842a98271"><FontAwesomeIcon className="resize-icons"
                                                                                             icon={faLinkedin} inverse/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default About_Content;