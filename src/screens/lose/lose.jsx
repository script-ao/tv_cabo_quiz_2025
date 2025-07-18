import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components";
import { useQuiz } from "../../context/quizContext";

function Lose() {
  const { score, questions, resetGame, startNewGame } = useQuiz();

  return (
    <React.Fragment>
      <section className="lo_wrapper">
        <main className="lo_container">
          <h2>
            OPS... NÃO <br /> FOI DESTA!
          </h2>

          <div className="lo_buttons">
            <Button
              text="RECOMEÇAR"
              className="btn btn_Light"
              onClick={resetGame}
            />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Lose };
