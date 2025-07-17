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
          <h2>OPS... NÃO  <br/> FOI DESTA!</h2>

          <div className="lo_score">
            <p>Pontuação: {score} de {questions.length}</p>
            <p>Percentagem: {Math.round((score / questions.length) * 100)}%</p>
            <p>Precisas de pelo menos 60% para ganhar.</p>
          </div>

          <div className="lo_buttons">
            <Button 
              text="TENTAR NOVAMENTE" 
              className="btn btn_Light" 
              onClick={() => startNewGame()}
            />

            <Button 
              text="ESCOLHER OUTRA CATEGORIA" 
              className="btn btn_secondary" 
              onClick={() => {
                resetGame();
                window.location.href = '/world';
              }}
            />

            <Button 
              text="VOLTAR AO INÍCIO" 
              className="btn btn_tertiary" 
              onClick={resetGame}
            />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Lose };
