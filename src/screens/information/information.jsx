import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import person from "../../assets/images/pessoa2.svg";
import master from "../../assets/images/svgs/logo/tvcabo.svg";

function Infomation() {
  const navigate = useNavigate();

  // Effect to redirect to certificate page after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/certificate');
    }, 8000); // 8 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <React.Fragment>
      <section className="inf_wrapper">
        <main className="inf_container">
          <div className="inf_content">
            <div className="inf_container_image">
              <img src={master} alt="" />
            </div>

            <div className="inf_description">
              <p>
                Faz uma selfie com o teu
                <br /> Diploma e prova que
                <br />
                <span>A tua Fibra é o Teu Mundo!</span>
              </p>
            </div>
          </div>

          <div className="inf_person_img">
            <img src={person} alt="" />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Infomation };
