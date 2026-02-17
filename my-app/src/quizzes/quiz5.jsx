// src/quizzes/quiz5.js
import React, { useState } from "react";

export const quiz5 = {
  id: "quiz5",
  title: "Quiz 5 - Request and Response",
  questions: [
    {
      id: 1,
      question: "Which method is used to render a view using Express's configured templating engine?",
      code: "",
      options: ["res.view()", "res.display()", "res.render()", "res.template()"],
      correctIndex: 2,
      explanation: "res.render() renders a template using the configured view engine.",
    },
    {
      id: 2,
      question: "In a URL like http://localhost:3000/vacations?sort=price#details, what is #details called?",
      code: "",
      options: ["Parameter", "Fragment", "Path", "Querystring"],
      correctIndex: 1,
      explanation: "The fragment (hash) is used by the browser and is not sent to the server.",
    },
    {
      id: 3,
      question: "Which convenience property checks if a connection is secure (HTTPS)?",
      code: "",
      options: ["req.encrypted", "req.secure", "req.ssl", "req.https"],
      correctIndex: 1,
      explanation: "req.secure returns true if the request uses HTTPS.",
    },
    {
      id: 4,
      question: "What are the two main objects that Express uses to handle HTTP communication?",
      code: "",
      options: [
        "Input and Output objects",
        "Server and Client objects",
        "Request and Response objects",
        "Session and Cookie objects",
      ],
      correctIndex: 2,
      explanation: "Express handles HTTP using the request (req) and response (res) objects.",
    },
    {
      id: 5,
      question: "What does MIME stand for in the context of internet media types?",
      code: "",
      options: [
        "Media Internet Markup Engine",
        "Multipurpose Internet Mail Extensions",
        "Multiple Input Message Exchange",
        "Modern Internet Messaging Environment",
      ],
      correctIndex: 1,
      explanation: "MIME stands for Multipurpose Internet Mail Extensions.",
    },
    {
      id: 6,
      question: "Which property distinguishes between a regular request and an Ajax request?",
      code: "",
      options: ["req.async", "req.type", "req.ajax", "req.xhr"],
      correctIndex: 3,
      explanation: "req.xhr returns true if the request originated from an Ajax call.",
    },
    {
      id: 7,
      question: "What internet media type format is most common for POST request bodies?",
      code: "",
      options: [
        "multipart/form-data",
        "application/x-www-form-urlencoded",
        "text/plain",
        "application/json",
      ],
      correctIndex: 1,
      explanation:
        "application/x-www-form-urlencoded is the most common media type for POST form submissions.",
    },
    {
      id: 8,
      question: "Which method sets the HTTP status code in Express?",
      code: "",
      options: ["res.httpStatus()", "res.status()", "res.code()", "res.setStatus()"],
      correctIndex: 1,
      explanation: "res.status() sets the HTTP status code and allows chaining.",
    },
    {
      id: 9,
      question: "Which method redirects the browser to a different URL?",
      code: "",
      options: ["res.route()", "res.send()", "res.redirect()", "res.navigate()"],
      correctIndex: 2,
      explanation: "res.redirect() sends a redirect response (default 302).",
    },
    {
      id: 10,
      question: "What is the relationship between req.url and req.originalUrl?",
      code: "",
      options: [
        "req.url is deprecated",
        "req.url can be rewritten for routing, but req.originalUrl remains unchanged",
        "req.originalUrl includes the protocol and host",
        "They are identical in all cases",
      ],
      correctIndex: 1,
      explanation:
        "req.url may be modified internally, but req.originalUrl preserves the original request path.",
    },
    {
      id: 11,
      question: "What does the Content-Type header indicate?",
      code: "",
      options: [
        "What kind of content is being transmitted",
        "The server's IP address",
        "The size of the response",
        "The authentication status",
      ],
      correctIndex: 0,
      explanation:
        "Content-Type tells the client what type of data is being sent (HTML, JSON, CSS, etc.).",
    },
    {
      id: 12,
      question:
        "Which property provides information about the currently matched route, primarily useful for debugging?",
      code: "",
      options: ["req.params", "req.url", "req.route", "req.path"],
      correctIndex: 2,
      explanation: "req.route contains information about the currently matched route.",
    },
    {
      id: 13,
      question:
        "Which HTTP method is most commonly used when a user types a URL into a browser?",
      code: "",
      options: ["PUT", "DELETE", "POST", "GET"],
      correctIndex: 3,
      explanation:
        "Typing a URL in a browser sends an HTTP GET request.",
    },
    {
      id: 14,
      question: "Which property would you use to access querystring parameters in Express?",
      code: "",
      options: ["req.body", "req.search", "req.params", "req.query"],
      correctIndex: 3,
      explanation:
        "req.query contains querystring parameters as key-value pairs.",
    },
    {
      id: 15,
      question: "What Node object does the Express request object extend?",
      code: "",
      options: ["stream.Readable", "net.Socket", "http.Request", "http.IncomingMessage"],
      correctIndex: 3,
      explanation:
        "Express extends Node's http.IncomingMessage for the request object.",
    },
    {
      id: 16,
      question:
        "How do you disable Express's default X-Powered-By header for security?",
      code: "",
      options: [
        "app.remove('x-powered-by')",
        "app.disable('x-powered-by')",
        "app.secure('x-powered-by')",
        "app.hide('x-powered-by')",
      ],
      correctIndex: 1,
      explanation:
        "app.disable('x-powered-by') removes the header for security reasons.",
    },
    {
      id: 17,
      question: "Where are POST parameters typically passed?",
      code: "",
      options: [
        "In the request body",
        "In the request headers",
        "In the fragment",
        "In the URL querystring",
      ],
      correctIndex: 0,
      explanation:
        "POST parameters are sent in the request body.",
    },
    {
      id: 18,
      question: "Which response method is used to send JSON data to the client?",
      code: "",
      options: ["res.render()", "res.json()", "res.send()", "res.write()"],
      correctIndex: 1,
      explanation:
        "res.json() explicitly sends JSON data to the client.",
    },
    {
      id: 19,
      question:
        "What is the default HTTP status code that Express returns for successful responses?",
      code: "",
      options: ["202", "200", "204", "201"],
      correctIndex: 1,
      explanation:
        "Express defaults to status 200 unless changed with res.status().",
    },
    {
      id: 20,
      question:
        "What port is assumed by default for HTTPS connections if no port is specified in the URL?",
      code: "",
      options: ["443", "3000", "80", "8080"],
      correctIndex: 0,
      explanation:
        "Port 443 is the default for HTTPS connections.",
    },
  ],
};

function Quiz5() {
  const questions = quiz5.questions;
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
      <h2>{quiz5.title}</h2>

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
export default Quiz5;