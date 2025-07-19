import React from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { useQuiz } from "../../context/quizContext/quizContext";

function Win() {
  const { score, questions, resetGame, startNewGame } = useQuiz();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/register");
  }

  return (
    <React.Fragment>
      <section className="win_wrapper">
        <Confetti width={window.innerWidth} height={window.innerHeight} />
        <main className="win_container">
          <p>PARABÉNS</p>
          <span className="win_highlight">
            Venceste <br /> O JOGO
          </span>

          <div className="win_buttons">
            <Button
              text="Receber Prémio"
              className="btn btn_Light"
              onClick={handleClick}
            />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
