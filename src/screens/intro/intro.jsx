import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
function Intro() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/world");
  }
  return (
    <React.Fragment>
      <section className="i_wrapper">
        <main className="i_container">
          <span className="i_highlight">
            Bem-vindo ao
            <br />
            universo da TVCABO
          </span>
          <p>
            Testa os teus conhecimentos.
            <br />
            Mostra que a tua fibra é o teu mundo
            <br />e ganha prémios com a TVCABO.
          </p>

          <Button
            text="AVANÇAR"
            className="btn btn_Light" 
            onClick={handleClick}
          />
        </main>
      </section>
    </React.Fragment>
  );
}

export { Intro };
