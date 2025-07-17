import React from 'react';
import { useQuiz } from '../../context/quizContext';

function Timer() {
  const { timeLeft } = useQuiz();

  // A duração total do temporizador em segundos (ex: 30 segundos)
  const totalDuration = 30;

  // Calcula a percentagem de tempo restante
  const percentageLeft = (timeLeft / totalDuration) * 100;

  // Define a cor da barra com base no tempo restante
  const getBarColor = () => {
    if (percentageLeft <= 25) {
      return '#ff4d4d'; // Vermelho para os últimos 25%
    }
    if (percentageLeft <= 50) {
      return '#ffa500'; // Laranja para 50% ou menos
    }
    return '#4caf50'; // Verde para mais de 50%
  };

  return (
    <div className="timer-container">
      <div
        className="timer-progress-bar"
        style={{
          width: `${percentageLeft}%`,
          backgroundColor: getBarColor(),
        }}
      />
    </div>
  );
}

export { Timer };