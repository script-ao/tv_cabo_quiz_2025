import questionsData from './data/questionsFile.json';

/**
 * Get all questions from all categories
 * @returns {Array} Array of all questions
 */
export const getAllQuestions = () => {
  const allQuestions = [];
  
  // Loop through each category and add its questions to the allQuestions array
  Object.keys(questionsData.categories).forEach(category => {
    const categoryQuestions = questionsData.categories[category].perguntas;
    categoryQuestions.forEach(question => {
      allQuestions.push({
        ...question,
        category
      });
    });
  });
  
  return allQuestions;
};

/**
 * Get questions for a specific category
 * @param {string} category - The category to get questions for
 * @returns {Array} Array of questions for the specified category
 */
export const getQuestionsByCategory = (category) => {
  if (!questionsData.categories[category]) {
    return [];
  }
  
  return questionsData.categories[category].perguntas.map(question => ({
    ...question,
    category
  }));
};

/**
 * Get all available categories
 * @returns {Array} Array of category names
 */
export const getCategories = () => {
  return Object.keys(questionsData.categories);
};

/**
 * Get a random question from all categories or a specific category
 * @param {string} category - Optional category to get a random question from
 * @returns {Object} A random question
 */
export const getRandomQuestion = (category = null) => {
  let questions;
  
  if (category && questionsData.categories[category]) {
    questions = questionsData.categories[category].perguntas;
  } else {
    questions = getAllQuestions();
  }
  
  if (questions.length === 0) {
    return null;
  }
  
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};