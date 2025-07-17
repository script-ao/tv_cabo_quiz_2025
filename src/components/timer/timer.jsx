import React from 'react';
import { useQuiz } from '../../context/quizContext';

function Timer() {
  const { timeLeft, isAnswered, gameOver } = useQuiz();

  // Calculate the width of the progress bar based on time left (30 seconds total)
  const progressWidth = (timeLeft / 30) * 100;

  return (
    <div className="timer_container">
      <div 
        className="timer_progress-bar"
        style={{ 
          width: `${progressWidth}%`,
          backgroundColor: progressWidth < 30 ? '#ff4d4d' : '#4caf50'
        }}
      />
    </div>
  );
}

export { Timer };
