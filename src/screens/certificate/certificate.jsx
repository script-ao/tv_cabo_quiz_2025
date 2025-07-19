import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/quizContext/quizContext";

// Images and Vectors
import { vectorImages, images } from "../../assets";

function Certificate() {

  const { userData, resetGame } = useQuiz();
  const navigate = useNavigate();
  const hoje = new Date();
  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const dia = hoje.getDate();
  const mesNome = meses[hoje.getMonth()];
  const ano = hoje.getFullYear();
  const dataFormatada = `${dia} de ${mesNome} de  ${ano}`;

  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData, navigate]);

  // Send user data to webhook when certificate is displayed
  useEffect(() => {
    if (userData) {
      const sendCertificateData = async () => {
        try {
          await fetch("https://platform.bisc8.digital/webhook/last_form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...userData,
              certificate: true,
              date: dataFormatada,
            }),
          });
          console.log("Certificate data sent to webhook");
        } catch (error) {
          console.error("Error sending certificate data:", error);
        }
      };

      sendCertificateData();
    }
  }, [userData, dataFormatada]);

  // Reset game and navigate to home after 10 seconds
  useEffect(() => {
    const time = setTimeout(() => {
      resetGame(); // This will clear userData and navigate to "/"
    }, 10000);

    return () => clearTimeout(time);
  }, [resetGame]);

  return (
    <React.Fragment>
      <section className="ce_wrapper">
        <main className="ce_container">
          <div className="ce_content">
            <div className="ce_container_logo">
              <div className="ce_logo_img">
                <img src={vectorImages.logos.brand.brand_logo} alt="" />
              </div>
              <p>Sempre ligado</p>
            </div>

            <div className="ce_description">
              <span>A TV CABO </span>
              <span>Certifica que o mundo de</span>
            </div>
            <div className="ce_inf">
              <span>{userData ? userData.name : "Jogador"}</span>
            </div>

            <div className="ce_inf_date">
              <h4>TEM FIBRA.</h4>

              <div className="ce_date">
                <span>Data: {dataFormatada}</span>
              </div>
              <div className="ce_assin"></div>
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Certificate };
