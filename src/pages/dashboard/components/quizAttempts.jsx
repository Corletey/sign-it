import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnsVid from '../../../assets/videos/beglesson2.mp4'

const QuizAttempts = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Supposed to fetch this data from your backend
    const fetchedQuestions = [
      { 
        id: 1, 
        text: "How do you sign 'Hello'?", 
        videoUrl: AnsVid,
        correctAnswer: "Wave your hand",
      },
      { 
        id: 2, 
        text: "What's the sign for 'Thank you'?", 
        videoUrl: AnsVid,
        correctAnswer: "Touch your chin and move your hand forward",
      },
      // Add more questions as needed
    ];
    setQuestions(fetchedQuestions);
  }, []);

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
      setFeedback({ type: 'success', message: 'Correct! Great job!' });
      setScore(score + 1);
    } else {
      setFeedback({ type: 'error', message: `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}` });
    }
  };

  const nextQuestion = () => {
    setUserAnswer('');
    setFeedback(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz finished
      setFeedback({ type: 'info', message: `Quiz completed! Your score: ${score}/${questions.length}` });
    }
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Do You Remember?</h2>
      
      <motion.div
        key={currentQuestion.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg mb-4">{currentQuestion.text}</p>
        
        <video 
          className="w-full mb-4 rounded-lg" 
          controls
          src={currentQuestion.videoUrl}
        >
          Your browser does not support the video tag.
        </video>

        <textarea
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          rows="3"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer here..."
        />

        {!feedback && (
          <button
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
            onClick={handleSubmit}
          >
            Submit Answer
          </button>
        )}

        {feedback && (
          <div className={`p-4 rounded-md mb-4 ${
            feedback.type === 'success' ? 'bg-green-100 text-green-700' :
            feedback.type === 'error' ? 'bg-red-100 text-red-700' :
            'bg-blue-100 text-blue-700'
          }`}>
            {feedback.message}
          </div>
        )}

        {feedback && currentQuestionIndex < questions.length - 1 && (
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-4"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        )}

        {feedback && currentQuestionIndex === questions.length - 1 && (
          <button
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300 mt-4"
            onClick={() => {/* Handle quiz completion */}}
          >
            Finish Quiz
          </button>
        )}
      </motion.div>

      <div className="mt-6 text-sm text-gray-600">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
    </div>
  );
};

export default QuizAttempts;