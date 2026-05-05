// src/quizzes/quiz14.jsx
import React, { useState } from "react";

export const quiz14 = {
  id: "quiz14",
  title: "Quiz 14 - Express and SPA",
  questions: [
    {
      id: 1,
      question: 'Why are "Loading Spinners" more common in SPAs?',
      code: "",
      options: [
        "It is a requirement of HTML5",
        "To make the site look busy",
        "To indicate that data is being fetched asynchronously behind the scenes",
        "Because SPAs are generally slower than traditional sites",
      ],
      correctIndex: 2,
    },
    {
      id: 2,
      question:
        'What is "Session Authentication" in the context of an SPA and Node.js?',
      code: "",
      options: [
        "The server stores session data in memory or a database and tracks the user via a Session ID cookie",
        "Authenticating the user only once per year",
        "A way to speed up the internet",
        "Storing the user's password in the browser's RAM",
      ],
      correctIndex: 0,
    },
    {
      id: 3,
      question:
        "Which architectural pattern is often used by SPAs to interact with the server?",
      code: "",
      options: [
        "REST or GraphQL APIs",
        "SOAP XML Services",
        "Direct SQL queries from the browser",
        "FTP file transfers",
      ],
      correctIndex: 0,
    },
    {
      id: 4,
      question: 'What is "Client-Side Routing" in an SPA?',
      code: "",
      options: [
        "Routing handled exclusively by Nginx",
        "Managing the URL and navigation within the browser via JavaScript",
        "A way to speed up the internet connection",
        "Routing performed by the physical router in the home",
      ],
      correctIndex: 1,
    },
    {
      id: 5,
      question:
        "Why is an SPA potentially more vulnerable to CSRF when using session-based authentication?",
      code: "",
      options: [
        "Because SPAs don't use encryption",
        "Because SPAs lack a backend",
        "Because the browser automatically attaches session cookies to all API requests, even if initiated from a different site",
        "Because JavaScript is inherently insecure",
      ],
      correctIndex: 2,
    },
    {
      id: 6,
      question: "What is Cross-Site Request Forgery (CSRF)?",
      code: "",
      options: [
        "A way to steal passwords via a fake login page",
        "A type of virus that infects the user's OS",
        "An attack that tricks a logged-in user's browser into sending a malicious request to a web app",
        "An attack where the user's data is deleted by the server",
      ],
      correctIndex: 2,
    },
    {
      id: 7,
      question:
        "Which JavaScript framework is NOT primarily used for building SPAs?",
      code: "",
      options: ["Express", "React", "Vue", "Angular"],
      correctIndex: 0,
    },
    {
      id: 8,
      question:
        "How does an SPA handle a 404 error if the user types an invalid URL?",
      code: "",
      options: [
        "The server sends a 404 page",
        "The website crashes",
        "The browser shows a built-in error",
        'The client-side router detects the mismatch and renders a "Not Found" component',
      ],
      correctIndex: 3,
    },
    {
      id: 9,
      question:
        "In an SPA, what does the server usually send in response to the very first request?",
      code: "",
      options: [
        "A raw CSV file",
        "A complete set of all possible HTML pages",
        "A large PDF document",
        "A minimal HTML file, CSS, and a large JavaScript bundle",
      ],
      correctIndex: 3,
    },
    {
      id: 10,
      question:
        "Why might a developer choose JWT (JSON Web Tokens) over Sessions for an SPA?",
      code: "",
      options: [
        "JWT is easier to read for humans",
        "JWT only works with React",
        "JWT is stateless, meaning the server doesn't need to store session data in a database",
        "JWT is much larger than a cookie",
      ],
      correctIndex: 2,
    },
    {
      id: 11,
      question:
        "What is the fundamental difference between a traditional web app and a Single-Page Application (SPA)?",
      code: "",
      options: [
        "SPAs cannot connect to databases",
        "Traditional apps are faster",
        "SPAs load a single HTML page and dynamically update content without full page reloads",
        "SPAs don't use HTML",
      ],
      correctIndex: 2,
    },
    {
      id: 12,
      question: 'Why is "State Management" more complex in an SPA?',
      code: "",
      options: [
        "Because the app lives for a long time and must track data across many interactions",
        "Because the browser deletes variables frequently",
        "Because of the file system limits",
        "Because JavaScript doesn't support variables",
      ],
      correctIndex: 0,
    },
    {
      id: 13,
      question:
        "In an SPA-Backend architecture, how is a CSRF token typically provided to the frontend?",
      code: "",
      options: [
        "It is hard-coded into the JavaScript bundle",
        "It is often sent in a cookie or as a custom header during the initial load or a login request",
        "It is sent in a plain text email",
        "It is not needed if you use HTTPS",
      ],
      correctIndex: 1,
    },
    {
      id: 14,
      question:
        "Which of the following is a common challenge for SPAs mentioned in Chapter 16?",
      code: "",
      options: [
        "They are incompatible with CSS",
        "Search Engine Optimization (SEO) for content rendered only via JS",
        "They cannot display images",
        "They require a special browser",
      ],
      correctIndex: 1,
    },
    {
      id: 15,
      question:
        'What is a "Preflight Request" (OPTIONS) in the context of SPA security?',
      code: "",
      options: [
        "A way to download CSS before HTML",
        "A request sent by the browser to check if the server allows a cross-origin request before sending the actual data",
        "A request that clears the user's cache",
        "A request to check if the server is online",
      ],
      correctIndex: 1,
    },
    {
      id: 16,
      question:
        'What is the main advantage of an SPA regarding "Perceived Performance"?',
      code: "",
      options: [
        "It doesn't require a web server",
        "It uses less RAM",
        'The UI feels more responsive because transitions happen immediately without "white flashes"',
        "It works without an internet connection",
      ],
      correctIndex: 2,
    },
    {
      id: 17,
      question:
        'Why should "state-changing" API methods (POST, PUT, DELETE) always require a CSRF token?',
      code: "",
      options: [
        "To prevent the database from filling up",
        "To track how many times a user clicks a button",
        "Because GET requests are generally considered safe and shouldn't change data, whereas these methods modify server state",
        "To make the code look more complex",
      ],
      correctIndex: 2,
    },
    {
      id: 18,
      question:
        "Which browser API is primarily responsible for allowing SPAs to change the URL without a page reload?",
      code: "",
      options: [
        "The Canvas API",
        "The History API (pushState)",
        "The Fetch API",
        "The Web Storage API",
      ],
      correctIndex: 1,
    },
    {
      id: 19,
      question:
        "What is the most common defense against CSRF mentioned in the context of Node/Express?",
      code: "",
      options: [
        "Disabling all cookies",
        'Using CSRF tokens that the client must include in "state-changing" requests (POST, PUT, DELETE)',
        "Forcing users to solve a CAPTCHA for every click",
        "Encrypting the entire database",
      ],
      correctIndex: 1,
    },
    {
      id: 20,
      question: "What is the purpose of the HttpOnly flag on a session cookie?",
      code: "",
      options: [
        "It deletes the cookie when the browser closes",
        "It prevents client-side JavaScript from accessing the cookie, reducing the risk of XSS attacks",
        "It makes the cookie work only on mobile phones",
        "It forces the cookie to be sent over HTTP only (no HTTPS)",
      ],
      correctIndex: 1,
    },
  ],
};

function Quiz14() {
  const questions = quiz14.questions;
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
      <h2>{quiz14.title}</h2>

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

export default Quiz14;