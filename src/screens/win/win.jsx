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
          <p>Parabéns</p>
          <h2>Venceste <br/> O JOGO</h2>

          <div className="win_score">
            <p>Pontuação: {score} de {questions.length}</p>
            <p>Percentagem: {Math.round((score / questions.length) * 100)}%</p>
          </div>

          <div className="win_buttons">
            <Link to="/register">
              <Button text="Reclamar Prémio" className="btn btn_Light" /> 
            </Link>

            <Button 
              text="Jogar Novamente" 
              className="btn btn_secondary" 
              onClick={() => startNewGame()}
            />

            <Button 
              text="Voltar ao Início" 
              className="btn btn_tertiary" 
              onClick={resetGame}
            />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Win };
