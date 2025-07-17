import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { useQuiz } from "../../context/quizContext";

function Win() {
  const { score, questions, resetGame, startNewGame } = useQuiz();

  return (
    <React.Fragment>
      <section className="win_wrapper">
        <main className="win_container">
          <p>PARABÉNS</p>
          <h2>Venceste <br/> O JOGO</h2>

          <div className="win_buttons">
            <Link to="/register">
              <Button text="Receber Prémio" className="btn btn_Light" /> 
            </Link>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
