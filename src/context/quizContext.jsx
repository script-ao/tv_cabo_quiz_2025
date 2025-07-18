import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllQuestions, getCategories, getQuestionsByCategory } from '../database';

// Create the context
const QuizContext = createContext();

// Custom hook to use the quiz context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

// Quiz provider component
export const QuizProvider = ({ children }) => {
  const navigate = useNavigate();

  // State variables
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isGameActive, setIsGameActive] = useState(false);

  // Load categories on mount
  useEffect(() => {
    setCategories(getCategories());
  }, []);

  // Load questions when category changes
  useEffect(() => {
    if (selectedCategory) {
      setQuestions(getQuestionsByCategory(selectedCategory));
    } else {
      setQuestions(getAllQuestions());
    }
    setCurrentQuestionIndex(0);
    setGameOver(false);
    setTimeLeft(30);
    setIsAnswered(false);
  }, [selectedCategory]);

  // Timer effect
  useEffect(() => {
    if (gameOver || isAnswered || !isGameActive) return;

    const timer = timeLeft > 0 && setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    if (timeLeft === 0) {
      // If time runs out, end the game and navigate to lose screen
      setGameOver(true);
      navigate('/lose');
    }

    return () => clearInterval(timer);
  }, [timeLeft, gameOver, isAnswered, isGameActive, navigate]);

  // Get current question
  const currentQuestion = questions[currentQuestionIndex];

  // Calculate progress percentage
  const progressPercentage = questions.length > 0 
    ? (currentQuestionIndex / questions.length) * 100 
    : 0;

  // Handle answer selection
  const handleAnswer = (isCorrect, optionIndex) => {
    if (isAnswered) return;

    setIsAnswered(true);
    setSelectedOptionIndex(optionIndex);

    if (isCorrect) {
      // Wait 2 seconds before moving to next question
      setTimeout(() => {
        handleNextQuestion();
      }, 2000);
    } else {
      // If answer is incorrect, navigate to lose screen after 2 seconds
      setTimeout(() => {
        navigate('/lose');
      }, 2000);
    }
  };

  // Handle moving to next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
      setIsAnswered(false);
      setSelectedOptionIndex(null);
    } else {
      // Game over
      setGameOver(true);

      // Navigate to win screen
      navigate('/win');
    }
  };

  // Start a new game
  const startNewGame = (category = null) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setGameOver(false);
    setTimeLeft(30);
    setIsAnswered(false);
    setSelectedOptionIndex(null);
    setIsGameActive(true);
    navigate('/trivia');
  };

  // Reset the game
  const resetGame = () => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setGameOver(false);
    setTimeLeft(30);
    setIsAnswered(false);
    setSelectedOptionIndex(null);
    setIsGameActive(false);
    navigate('/');
  };

  // Context value
  const value = {
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedCategory,
    categories,
    gameOver,
    timeLeft,
    isAnswered,
    selectedOptionIndex,
    progressPercentage,
    isGameActive,
    handleAnswer,
    startNewGame,
    resetGame,
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};
