// src/quizzes/quiz7.jsx
import React, { useState } from "react";

export const quiz7 = {
  id: "quiz7",
  title: "Quiz 7 - Forms",
  questions: [
    {
      id: 1,
      question:
        "What does the req.xhr property (or checking the header) help the server determine?",
      code: "",
      options: [
        "If the request was made via AJAX",
        "If the user is logged in",
        "The file size of an upload",
        "The user's browser version",
      ],
      correctIndex: 0,
    },
    {
      id: 2,
      question:
        'If the method attribute is omitted from an HTML <form> tag, what is the default?',
      code: "",
      options: ["GET", "POST", "FETCH", "PUT"],
      correctIndex: 0,
    },
    {
      id: 3,
      question:
        "Which encoding type is required for a form that includes file uploads?",
      code: "",
      options: [
        "application/json",
        "multipart/form-data",
        "application/x-www-form-urlencoded",
        "text/plain",
      ],
      correctIndex: 1,
    },
    {
      id: 4,
      question:
        "What is the standard status code for a 'See Other' redirect after a form submission?",
      code: "",
      options: ["302", "404", "303", "200"],
      correctIndex: 2,
    },
    {
      id: 5,
      question: "What is the purpose of the id attribute in an HTML input tag?",
      code: "",
      options: [
        "Styling and frontend functionality",
        "Identification for the server",
        "Defining the data type",
        "Database indexing",
      ],
      correctIndex: 0,
    },
    {
      id: 6,
      question: "What happens if you omit the action attribute in an HTML form?",
      code: "",
      options: [
        "The form is submitted to its own URL",
        "The form is disabled",
        "The browser throws an error",
        "The form is sent to the home page",
      ],
      correctIndex: 0,
    },
    {
      id: 7,
      question:
        "Why is it recommended to redirect after a successful POST request?",
      code: "",
      options: [
        "To improve SEO",
        "To prevent 'Confirm Form Resubmission' warnings",
        "To hide the server IP",
        "To clear the server cache",
      ],
      correctIndex: 1,
    },
    {
      id: 8,
      question:
        "Which attribute in an <input> field is used by the server to identify the field?",
      code: "",
      options: ["name", "class", "value", "id"],
      correctIndex: 0,
    },
    {
      id: 9,
      question: "Which HTTP method is typically associated with the querystring?",
      code: "",
      options: ["POST", "DELETE", "GET", "PUT"],
      correctIndex: 2,
    },
    {
      id: 10,
      question: "Why should you not use hidden form fields for secret information?",
      code: "",
      options: [
        "They are not sent to the server",
        "They slow down the server",
        "They are encrypted automatically",
        "Users can easily see them by viewing the source",
      ],
      correctIndex: 3,
    },
    {
      id: 11,
      question:
        "What are the two primary options for sending client data to the server?",
      code: "",
      options: [
        "LocalStorage and Session",
        "Querystring and Request Body",
        "Headers and Cookies",
        "IP Address and User Agent",
      ],
      correctIndex: 1,
    },
    {
      id: 12,
      question:
        "Which middleware is commonly used in Express to handle URL-encoded form data?",
      code: "",
      options: ["morgan", "session", "body-parser", "cookie-parser"],
      correctIndex: 2,
    },
    {
      id: 13,
      question:
        "Which Node package is recommended in the book for handling file uploads?",
      code: "",
      options: ["multer", "express-formidable", "multiparty", "busboy"],
      correctIndex: 2,
    },
    {
      id: 14,
      question:
        "In a POST request, where does body-parser make the form data available?",
      code: "",
      options: ["req.query", "res.locals", "req.params", "req.body"],
      correctIndex: 3,
    },
    {
      id: 15,
      question: "What is a 'honeypot' field in the context of form handling?",
      code: "",
      options: [
        "A field for high-priority data",
        "A field that uses JSON",
        "A hidden field designed to catch bots",
        "A field that stores passwords",
      ],
      correctIndex: 2,
    },
    {
      id: 16,
      question:
        "When using Fetch, what header is often sent to indicate an AJAX request?",
      code: "",
      options: ["Accept-Language", "X-Requested-With", "User-Agent", "Content-Encoding"],
      correctIndex: 1,
    },
    {
      id: 17,
      question: "What is the risk of not specifying a form action?",
      code: "",
      options: [
        "The form won't submit",
        "JavaScript will be disabled",
        "It may lead to data loss or incorrect routing",
        "The server will crash",
      ],
      correctIndex: 2,
    },
    {
      id: 18,
      question:
        "In modern web development, what is the shift regarding form rendering?",
      code: "",
      options: [
        "Toward XML-based forms",
        "Toward server-only forms",
        "Toward Single-Page Applications (SPAs)",
        "Away from using HTML forms",
      ],
      correctIndex: 2,
    },
    {
      id: 19,
      question:
        "What is the main benefit of using AJAX (Fetch) for form submission?",
      code: "",
      options: [
        "It is required for HTTPS",
        "It is the only way to send POST requests",
        "It provides a more seamless user experience without page reloads",
        "It automatically validates all data",
      ],
      correctIndex: 2,
    },
    {
      id: 20,
      question:
        "What is a major disadvantage of using GET for form submissions?",
      code: "",
      options: [
        "It requires a database connection",
        "Browsers often limit querystring length",
        "It cannot send data to the server",
        "It is never secure even with HTTPS",
      ],
      correctIndex: 1,
    },
  ],
};

function Quiz7() {
  const questions = quiz7.questions;
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
      <h2>{quiz7.title}</h2>

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

export default Quiz7;