import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


const SocialFollow = () => {
    return (
        <div className='social-container'>

            <a href="https://www.facebook.com/c215stencils/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/christianguemy" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/christianguemy/?hl=fr"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
            <h5>Site crée par Marion , Sylvanie, Alexandre et Cédric</h5>

        </div>
    );
};

export default SocialFollow;

