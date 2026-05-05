// src/quizzes/quiz8.jsx
import React, { useState } from "react";

export const quiz8 = {
  id: "quiz8",
  title: "Quiz 8 - Cookies and Sessions",
  questions: [
    {
      id: 1,
      question: "How do you clear or delete a cookie in Express?",
      code: "",
      options: [
        "res.delete('name')",
        "res.remove('name')",
        "res.clearCookie('name')",
        "req.cookies.name = null",
      ],
      correctIndex: 2,
    },
    {
      id: 2,
      question:
        "What happens to a session if the session ID cookie is deleted by the user?",
      code: "",
      options: [
        "The website crashes",
        "The server sends the cookie back automatically",
        "The user is no longer associated with their session data",
        "The server data is also deleted",
      ],
      correctIndex: 2,
    },
    {
      id: 3,
      question: "What is the purpose of the maxAge option in a cookie?",
      code: "",
      options: [
        "To set the server's timeout",
        "To determine how long the cookie lasts in milliseconds",
        "To limit the size of the cookie",
        "To set the user's age",
      ],
      correctIndex: 1,
    },
    {
      id: 4,
      question: "What is the main difference between a cookie and a session?",
      code: "",
      options: [
        "Sessions are only for login; cookies are only for ads",
        "There is no difference",
        "Sessions are stored on the client; cookies on the server",
        "Cookies are stored on the client; session data is stored on the server",
      ],
      correctIndex: 3,
    },
    {
      id: 5,
      question:
        "In Express, where can you access the parsed cookies from an incoming request?",
      code: "",
      options: [
        "res.cookies",
        "req.parsedCookies",
        "app.get('cookies')",
        "req.cookies",
      ],
      correctIndex: 3,
    },
    {
      id: 6,
      question: "Which of these is a recommended production-ready session store?",
      code: "",
      options: ["Redis or MongoDB", "LocalStorage", "Global variables", "MemoryStore"],
      correctIndex: 0,
    },
    {
      id: 7,
      question:
        "Which property should be set to true to ensure a cookie is only sent over encrypted connections?",
      code: "",
      options: ["secure", "httpOnly", "signed", "path"],
      correctIndex: 0,
    },
    {
      id: 8,
      question: 'What is the "path" option used for when setting a cookie?',
      code: "",
      options: [
        "The URL path for which the cookie is valid",
        "The file path of the script",
        "The path to the logo image",
        "The directory on the hard drive",
      ],
      correctIndex: 0,
    },
    {
      id: 9,
      question: "Which header is used by the browser to send cookies back to the server?",
      code: "",
      options: ["Authorization", "Cookie", "Set-Cookie", "X-Auth-Token"],
      correctIndex: 1,
    },
    {
      id: 10,
      question: "What does the httpOnly flag on a cookie prevent?",
      code: "",
      options: [
        "Access via the server",
        "Access via client-side JavaScript (XSS)",
        "Access via the terminal",
        "Access via HTTPS",
      ],
      correctIndex: 1,
    },
    {
      id: 11,
      question:
        "Why is the default MemoryStore for sessions discouraged for production?",
      code: "",
      options: [
        "It is too fast",
        "It only works with Chrome",
        "It causes memory leaks and doesn't support multiple server instances",
        "It is too secure",
      ],
      correctIndex: 2,
    },
    {
      id: 12,
      question:
        "To use signed cookies, what must be provided to the cookie-parser middleware?",
      code: "",
      options: [
        "A secret string",
        "A database URL",
        "An SSL certificate",
        "A username",
      ],
      correctIndex: 0,
    },
    {
      id: 13,
      question: "Where are cookies actually stored?",
      code: "",
      options: [
        "In the server's RAM",
        "In the server's database",
        "In the middleware layer",
        "On the client's browser/computer",
      ],
      correctIndex: 3,
    },
    {
      id: 14,
      question:
        "Why is session-based authentication often preferred over sending raw credentials with every request?",
      code: "",
      options: [
        "It only works on mobile",
        "It is more secure than re-sending passwords and reduces server load",
        "It is required by law",
        "It is slower",
      ],
      correctIndex: 1,
    },
    {
      id: 15,
      question: 'What is a "signed" cookie in the context of Express?',
      code: "",
      options: [
        "A cookie that is digitally signed to detect client-side tampering",
        "A cookie that requires a physical signature",
        "A cookie that only works over HTTPS",
        "A cookie encrypted so the client cannot read it",
      ],
      correctIndex: 0,
    },
    {
      id: 16,
      question:
        "By default, Express's express-session uses which type of storage?",
      code: "",
      options: ["MongoDB", "Filesystem", "Redis", "MemoryStore"],
      correctIndex: 3,
    },
    {
      id: 17,
      question: "In Express, which middleware is typically used to handle cookies?",
      code: "",
      options: ["morgan", "cookie-parser", "body-parser", "express-session"],
      correctIndex: 1,
    },
    {
      id: 18,
      question: 'What is a "Flash Message" typically used for?',
      code: "",
      options: [
        "Background data syncing",
        "Faster page loading",
        "Constant site-wide alerts",
        'One-time notifications (e.g., "Success!") that disappear after being viewed',
      ],
      correctIndex: 3,
    },
    {
      id: 19,
      question:
        "When using cookie-parser, what is the functional difference between req.cookies and req.signedCookies?",
      code: "",
      options: [
        "req.cookies contains unsigned cookies; req.signedCookies contains cookies verified against a secret",
        "There is no difference; they both hold the same data",
        "req.cookies is for session IDs; req.signedCookies is for user data",
        "req.cookies is for HTTPS; req.signedCookies is for HTTP",
      ],
      correctIndex: 0,
    },
    {
      id: 20,
      question: "Which method is used to set a cookie in an Express response?",
      code: "",
      options: ["res.cookie()", "req.cookie()", "app.cookie()", "res.setCookie()"],
      correctIndex: 0,
    },
  ],
};

function Quiz8() {
  const questions = quiz8.questions;
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
      <h2>{quiz8.title}</h2>

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

export default Quiz8;