import React from "react";
import { Link } from "react-router-dom";
import {Button} from "../../components"
function Win() {
  return (
    <React.Fragment>
       <section className="win_wrapper">
        <main className="win_container">
          <p>Parabéns</p>
          <h2>Venceste <br/> O JOGO</h2>
          <Link to="/register">
              <Button text="Premio" className="btn btn_Light" /> 
              </Link>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
