import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

import { vectorImages, images } from "../../assets";

function Start() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/lead");
  }

  return (
    <React.Fragment>
      <section className="st_wrapper">
        <main className="st_container">
          <div className="st_content">
            <div>
              <div className="st_title-container">
                <span className="st_h1">EXPLORA</span>
                <span className="st_h2">O TEU MUNDO</span>
              </div>
              <div className="st_container_subtitle">
                <div className="st_image_subtitle">
                  <img src={vectorImages.logos.random.by_tvcabo} alt="" />
                </div>
              </div>
            </div>
            <div className="st_btn">
              <Button
                text="INICIAR"
                className="btn btn_Light"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="st_person_img">
            <img src={images.characters.character_1} alt="" />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Start };
