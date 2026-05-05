// src/quizzes/quiz12.jsx
import React, { useState } from "react";

export const quiz12 = {
  id: "quiz12",
  title: "Quiz 12 - Route Management",
  questions: [
    {
      id: 1,
      question:
        "If a sub-router is mounted at /admin and has a route .get('/users'), what is the full URL?",
      code: "",
      options: ["/users/admin", "/admin/users", "/users", "/admin"],
      correctIndex: 1,
    },
    {
      id: 2,
      question:
        "How do you access the query string (e.g., ?sort=asc) in a route handler?",
      code: "",
      options: ["req.params", "req.search", "req.body", "req.query"],
      correctIndex: 3,
    },
    {
      id: 3,
      question: "Can route parameters contain hyphens (-) or dots (.)?",
      code: "",
      options: [
        "Yes, they are interpreted literally between parameters",
        "Only if escaped with a backslash",
        "No, they break the URL",
        "No, only letters",
      ],
      correctIndex: 0,
    },
    {
      id: 4,
      question:
        "Chapter 14 discusses using Regular Expressions in routes. How are they passed to app.get?",
      code: "",
      options: [
        "As a RegExp literal (e.g., /^\\/user$/)",
        "As a string inside quotes",
        "Inside a JSON object",
        "They cannot be used directly",
      ],
      correctIndex: 0,
    },
    {
      id: 5,
      question:
        "Where are route parameters stored in the Express request object?",
      code: "",
      options: ["req.headers", "req.query", "req.params", "req.body"],
      correctIndex: 2,
    },
    {
      id: 6,
      question:
        "According to Chapter 14, what is the primary benefit of moving route handlers into their own modules?",
      code: "",
      options: [
        "It automatically encrypts the routes",
        "It is required by the Express engine",
        "It improves maintainability and keeps the main file clean",
        "It makes the application run faster",
      ],
      correctIndex: 2,
    },
    {
      id: 7,
      question:
        'Why might you use express.Router() to create a "sub-router"?',
      code: "",
      options: [
        "To replace the main app object",
        "To increase server security",
        "To group related routes (like an admin section) under a common prefix",
        "To handle database connections",
      ],
      correctIndex: 2,
    },
    {
      id: 8,
      question: 'What is a "sluggified" URL?',
      code: "",
      options: [
        "A URL that only works on mobile",
        "A URL containing binary data",
        "A URL that is very slow",
        "A human-readable string used in a URL (e.g., /post/my-new-post)",
      ],
      correctIndex: 3,
    },
    {
      id: 9,
      question:
        "Why is it important to place the 404 handler after all other routes?",
      code: "",
      options: [
        "Because Express sorts routes by name",
        "It doesn't matter where it is placed",
        "So it only executes if no other route matches",
        "It makes the 404 page load faster",
      ],
      correctIndex: 2,
    },
    {
      id: 10,
      question:
        'In the example of "Route Groups," what is the suggested way to link a "staff" module to the main app?',
      code: "",
      options: [
        "Hardcoding the IP address",
        "Using require('./lib/handlers') and passing the app to a function",
        "Copy-pasting the code",
        "Importing the CSS file",
      ],
      correctIndex: 1,
    },
    {
      id: 11,
      question: "How does Express handle a route defined with a wildcard *?",
      code: "",
      options: [
        "It matches exactly one character",
        "It matches any character sequence",
        "It causes a syntax error",
        "It only matches file extensions",
      ],
      correctIndex: 1,
    },
    {
      id: 12,
      question: "What does the + character signify in an Express route path?",
      code: "",
      options: [
        "Matches the preceding character one or more times",
        "It is a mathematical addition operator",
        "Matches the preceding character zero or more times",
        "It ends the route",
      ],
      correctIndex: 0,
    },
    {
      id: 13,
      question:
        "If you define a route /user(name)?, which URLs will match?",
      code: "",
      options: [
        "Neither",
        "Both /user and /username",
        "Only /username",
        "Only /user",
      ],
      correctIndex: 1,
    },
    {
      id: 14,
      question:
        "In a route path like /staff/:city/:name, what represents a route parameter?",
      code: "",
      options: ["Only the slashes", ":city and :name", "/staff/", "The whole string"],
      correctIndex: 1,
    },
    {
      id: 15,
      question: "What is the purpose of the app.route() method?",
      code: "",
      options: [
        "To list all active routes",
        "To define a physical path on the disk",
        "To create chainable route handlers for a single route path",
        "To restart the routing engine",
      ],
      correctIndex: 2,
    },
    {
      id: 16,
      question:
        "Which of these is a valid way to handle a POST request to /signup?",
      code: "",
      options: [
        "app.post('/signup', ...)",
        "app.use('/signup', ...)",
        "app.get('/signup', ...)",
        "app.put('/signup', ...)",
      ],
      correctIndex: 0,
    },
    {
      id: 17,
      question:
        'Chapter 14 mentions "Automatic Views." What does this concept refer to?',
      code: "",
      options: [
        "A pattern where routes are automatically generated based on view file names",
        "CSS that changes based on the user",
        "Views that write themselves",
        "Views that update in real-time",
      ],
      correctIndex: 0,
    },
    {
      id: 18,
      question:
        'What is the "Redirection" status code typically used for a permanent move?',
      code: "",
      options: ["500", "302", "301", "404"],
      correctIndex: 2,
    },
    {
      id: 19,
      question:
        "When using res.render('profile', { name: 'Node' }), what is the second argument?",
      code: "",
      options: [
        "The status code",
        "The context object (data passed to the view)",
        "The callback function",
        "The layout file",
      ],
      correctIndex: 1,
    },
    {
      id: 20,
      question:
        "Which character is used in an Express route path to make the preceding character optional?",
      code: "",
      options: ["+", "$", "?", "*"],
      correctIndex: 2,
    },
  ],
};

function Quiz12() {
  const questions = quiz12.questions;
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
      <h2>{quiz12.title}</h2>

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

export default Quiz12;