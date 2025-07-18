import React from "react";
import { useNavigate } from "react-router-dom";
import person from "../../assets/images/pessoasss1.svg";
import tvcabo from "../../assets/images/svgs/logo/tvcabo.svg";
import { Link } from "react-router-dom";
import { Button } from "../../components";

function Start() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/lead");
  }

  return (
    <React.Fragment>
      <section className="sp_wrapper">
        <main className="sp_container">
          <div className="sp_content">
            <span className="sp_highlight">
              <p>Explora</p>
              <p>O teu mundo</p>
            </span>

            <div className="sp_container_subtitle">
              <p>by</p>
              <div className="sp_img_subtitle">
                <img src={tvcabo} alt="" />
                <span className="sp_subtitle">sempre ligado</span>
              </div>
            </div>

            <div className="sp_btn">
              <Button
                text="INICIAR"
                className="btn btn_Light"
                onClick={handleClick}
              />
            </div>
          </div>

          <div className="sp_person_img">
            <img src={person} alt="" />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Start };
