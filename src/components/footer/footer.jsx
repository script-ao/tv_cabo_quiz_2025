import React from "react";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

import { vectorImages } from "../../assets";

function Footer() {
  return (
    <React.Fragment>
      <footer className="ft_wrapper">
        <section className="ft_container">
          <main className="ft_first-container">
            <div className="ft_logo-container">
              <img src={vectorImages.logos.brand.brand_logo} alt="TVCABO Logo" />
            </div>
          </main>

          <main className="ft_seccond_container">
            <div className="ft_link-container">
              <span>www.tvcabo.ao</span>
            </div>

            <div className="ft_social_icons-container">
              <ul className="ft_icons-list">
                <li className="ft_social-icon">
                  <FaInstagram />
                </li>
                <li className="ft_social-icon">
                  <FaFacebook />
                </li>
                <li className="ft_social-icon">
                  <FaLinkedinIn />
                </li>
                <li className="ft_social-icon">
                  <FaYoutube />
                </li>
              </ul>
            </div>
          </main>
        </section>
      </footer>
    </React.Fragment>
  );
}

export { Footer };
