import React from "react";
import { Link } from "react-router-dom";
function Win() {
  return (
    <React.Fragment>
       <section className="win_wrapper">
        <main className="win_container">
          <p>Parabéns</p>
          <h2>Venceste <br/> O JOGO</h2>
          <Link to="/intro">
                <button> INICIAR</button>
              </Link>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
