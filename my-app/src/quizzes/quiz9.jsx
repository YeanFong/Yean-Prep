// src/quizzes/quiz9.jsx
import React, { useState } from "react";

export const quiz9 = {
  id: "quiz9",
  title: "Quiz 9 - Middleware",
  questions: [
    {
      id: 1,
      question: "Why might you use express.Router in an application?",
      code: "",
      options: [
        "To replace Node",
        "To partition routes",
        "To style views",
        "To speed up DB",
      ],
      correctIndex: 1,
    },
    {
      id: 2,
      question:
        "Order matters in middleware. If a 404 handler is placed before a valid route, what happens?",
      code: "",
      options: [
        "The server crashes",
        "The 404 is triggered",
        "The route works",
        "The 404 is ignored",
      ],
      correctIndex: 1,
    },
    {
      id: 3,
      question: "The express.static middleware is used for what purpose?",
      code: "",
      options: [
        "Encrypting passwords",
        "Routing APIs",
        "Serving files like CSS/JS",
        "Database storage",
      ],
      correctIndex: 2,
    },
    {
      id: 4,
      question: "Which of these can middleware NOT do?",
      code: "",
      options: [
        "Change req/res",
        "End the cycle",
        "Delete the database",
        "Execute code",
      ],
      correctIndex: 2,
    },
    {
      id: 5,
      question: "In Express, route handlers (like app.get) are considered what?",
      code: "",
      options: ["Databases", "Middleware", "Operating Systems", "Compilers"],
      correctIndex: 1,
    },
    {
      id: 6,
      question: "Which middleware is commonly used to parse URL-encoded form data?",
      code: "",
      options: ["body-parser", "morgan", "cookie-parser", "express-session"],
      correctIndex: 0,
    },
    {
      id: 7,
      question:
        "Error-handling middleware in Express is unique because it takes how many arguments?",
      code: "",
      options: ["2", "4", "1", "3"],
      correctIndex: 1,
    },
    {
      id: 8,
      question: "Which middleware would you use to handle browser cookies?",
      code: "",
      options: ["express-session", "serve-static", "body-parser", "cookie-parser"],
      correctIndex: 3,
    },
    {
      id: 9,
      question:
        "If you want a middleware to run on every request, how should you add it?",
      code: "",
      options: ["app.post('/')", "app.all('/home')", "app.get('*')", "app.use()"],
      correctIndex: 3,
    },
    {
      id: 10,
      question: 'Which of these is a "third-party" middleware mentioned in the text?',
      code: "",
      options: ["app.use", "req.body", "cors", "res.send"],
      correctIndex: 2,
    },
    {
      id: 11,
      question: "Why is next() crucial for modularity?",
      code: "",
      options: [
        "It allows chainability",
        "It compiles JS",
        "It restarts apps",
        "It connects APIs",
      ],
      correctIndex: 0,
    },
    {
      id: 12,
      question:
        "What happens if a middleware function does not call next() or send a response?",
      code: "",
      options: [
        "It skips to the route",
        "It deletes the request",
        "The server restarts",
        "The request hangs",
      ],
      correctIndex: 3,
    },
    {
      id: 13,
      question:
        'In the middleware pipeline, what is the "catch-all" handler usually used for?',
      code: "",
      options: ["500 Server Error", "Home page", "404 Not Found", "Static files"],
      correctIndex: 2,
    },
    {
      id: 14,
      question: "What is the purpose of the next() function in middleware?",
      code: "",
      options: [
        "To render a view",
        "To connect to a database",
        "To pass control to the next middleware",
        "To stop the server",
      ],
      correctIndex: 2,
    },
    {
      id: 15,
      question:
        "Which middleware provides protection against Cross-Site Request Forgery?",
      code: "",
      options: ["csurf", "morgan", "helmet", "passport"],
      correctIndex: 0,
    },
    {
      id: 16,
      question: 'What does the term "middleware principle" refer to?',
      code: "",
      options: [
        "Database schemas",
        "Hardware design",
        "The pipeline pattern",
        "Front-end UI",
      ],
      correctIndex: 2,
    },
    {
      id: 17,
      question:
        "What is the fundamental definition of middleware in the context of Express?",
      code: "",
      options: [
        "A front-end framework",
        "A function that handles requests and responses",
        "A database query language",
        "A hardware component",
      ],
      correctIndex: 1,
    },
    {
      id: 18,
      question:
        "What is the primary difference between a route handler and general middleware?",
      code: "",
      options: [
        "Routes have paths",
        "Only routes use next",
        "Middleware has paths",
        "Only middleware uses res",
      ],
      correctIndex: 0,
    },
    {
      id: 19,
      question: "Which middleware is typically used for logging requests in Express?",
      code: "",
      options: ["helmet", "csurf", "morgan", "passport"],
      correctIndex: 2,
    },
    {
      id: 20,
      question:
        "Where is the body-parser data typically made available in the request?",
      code: "",
      options: ["req.headers", "req.body", "req.query", "req.params"],
      correctIndex: 1,
    },
  ],
};

function Quiz9() {
  const questions = quiz9.questions;
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIndex, optionIndex) => {
    setChecked(false);
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };

  const handleCheckAnswers = () => {
    let newScore = 0;
    questions.forEach((q, qIndex) => {
      if (Number(answers[qIndex]) === Number(q.correctIndex)) newScore += 1;
    });
    setScore(newScore);
    setChecked(true);
  };

  return (
    <div className="quiz">
      <h2>{quiz9.title}</h2>

      {questions.map((q, qIndex) => {
        const name = `q${qIndex}`;
        return (
          <div key={q.id} className="question-block">
            <h3>
              {qIndex + 1}. <strong>{q.question}</strong>
            </h3>

            {q.options.map((option, optionIndex) => (
              <label key={optionIndex} style={{ display: "block" }}>
                <input
                  type="radio"
                  name={name}
                  checked={answers[qIndex] === optionIndex}
                  onChange={() => handleOptionChange(qIndex, optionIndex)}
                />
                {" "}
                {option}
              </label>
            ))}

            {checked && (
              <p>
                {Number(answers[qIndex]) === Number(q.correctIndex)
                  ? "✅ Correct"
                  : `❌ Correct answer: ${q.options[q.correctIndex]}`}
              </p>
            )}
          </div>
        );
      })}

      <button onClick={handleCheckAnswers}>Check Answers</button>

      {checked && <p>Score: {score} / {questions.length}</p>}
    </div>
  );
}

export default Quiz9;