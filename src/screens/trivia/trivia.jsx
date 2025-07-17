import React from "react";
import world from "../../assets/images/svgs/icon/mundo.svg";
import { Button, Timer } from "../../components";
import { useQuiz } from "../../context/quizContext";

function Trivia() {
  const { 
    currentQuestion, 
    handleAnswer, 
    progressPercentage, 
    isAnswered,
    selectedOptionIndex
  } = useQuiz();

  // If no current question is available, show loading
  if (!currentQuestion) {
    return (
      <React.Fragment>
        <section className="tr_wrapper">
          <main className="tr_container">
            <div className="tr_container_aw">
              <div className="tr_container_questions">
                <p>Carregando perguntas...</p>
              </div>
            </div>
          </main>
        </section>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <section className="tr_wrapper">
        <main className="tr_container">
          <div className="tr_timer">
            <Timer />
          </div>

          <div className="tr_container_aw">
            <div className="tr_container_questions">
              <div className="tr_word">
                <div className="tr_world_img">
                  <img src={world} alt="" />
                </div>
                <div className="tr_separation"></div>
              </div>

              <div className="tr_questions">
                <p>{currentQuestion.question}</p>
              </div>
            </div>

            <div className="tr_resp">
              {currentQuestion.options.map((option, index) => (
                <Button 
                  className={
                    isAnswered
                      ? option.correct
                        ? 'btn_Light_corect'
                        : index === selectedOptionIndex && !option.correct
                          ? 'btn_Light_incorrect'
                          : 'btn_questions'
                      : 'btn_questions'
                  } 
                  key={index} 
                  text={option.answer}
                  onClick={() => handleAnswer(option.correct, index)}
                  disabled={isAnswered}
                />
              ))}
            </div>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export { Trivia };
