import React from "react";
import {Link} from "react-router-dom"
function Intro() {
  return (
    <React.Fragment>
      <section className="i_wrapper">
        <main className="i_container">
          <h2>Bem-vindo ao <br/>universo  da TVCABO</h2>
          <p>Testa os teus conhecimentos.<br/> Mostra que a tua fibra é o teu mundo<br/> e ganha prémios com a TVCABO.</p>
          <Link to="/intro">
                <button> INICIAR</button>
              </Link>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Intro };
