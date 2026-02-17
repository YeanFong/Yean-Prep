// src/quizzes/quiz2.js
import React, { useState } from "react";
import { checkAnswers } from "../utils/checkAnswers"; // keep same import style as template

export const quiz2 = {
  id: "quiz2",
  title: "Quiz 2 - Express + Handlebars",
  questions: [
    {
      id: 1,
      question: "What file contains project metadata and dependencies in Node?",
      code: "",
      options: ["node_modules", "package-lock.json", "package.json", ".gitignore"],
      correctIndex: 2,
      explanation: "package.json stores metadata, dependencies, and scripts.",
    },
    {
      id: 2,
      question: "When must you explicitly set the status code in Express routes?",
      code: "",
      options: [
        "Only when serving static files",
        "When serving HTML files",
        "When redirecting users",
        "For custom 404 and 500 error pages",
      ],
      correctIndex: 3,
      explanation:
        "Successful routes default to 200, but custom error handlers should set 404/500.",
    },
    {
      id: 3,
      question: "What HTTP status code does Express default to for responses?",
      code: "",
      options: ["400 Bad Request", "200 OK", "204 No Content", "201 Created"],
      correctIndex: 1,
      explanation: "Express defaults to 200 OK unless you set a different status.",
    },
    {
      id: 4,
      question: "What is the purpose of the layout in Handlebars templates?",
      code: "",
      options: [
        "To create responsive web design",
        "To provide a common framework for pages",
        "To reuse common HTML across multiple pages",
        "To replace HTML code repetition",
      ],
      correctIndex: 1,
      explanation: "Layouts provide a shared page “shell” used by multiple views.",
    },
    {
      id: 5,
      question: "What does static middleware do in Express?",
      code: "",
      options: [
        "Delivers static resources to the client without special handling",
        "Serves files dynamically generated on every request",
        "Prevents unauthorized access to resources",
        "Creates custom errors for missing files",
      ],
      correctIndex: 0,
      explanation: "Static middleware serves files like CSS, images, and JS.",
    },
    {
      id: 6,
      question: "Which method renders a view in Express?",
      code: "",
      options: ["res.json()", "res.render()", "res.set()", "res.send()"],
      correctIndex: 1,
      explanation: "res.render() renders a template/view and sends HTML.",
    },
    {
      id: 7,
      question: "What npm package provides Handlebars support for Express?",
      code: "",
      options: ["express-templates", "handlebars-express", "handlebars", "express-handlebars"],
      correctIndex: 3,
      explanation: "express-handlebars is the common Express integration package.",
    },
    {
      id: 8,
      question: "Which method is used to add routes for GET requests in Express?",
      code: "",
      options: ["app.get()", "app.all()", "app.post()", "app.listen()"],
      correctIndex: 0,
      explanation: "GET routes are defined with app.get(path, handler).",
    },
    {
      id: 9,
      question: "What is the purpose of app.use() in Express?",
      code: "",
      options: [
        "To handle GET requests",
        "To add middleware to the application",
        "To configure environment variables",
        "To set HTTP headers",
      ],
      correctIndex: 1,
      explanation: "app.use() mounts middleware functions.",
    },
    {
      id: 10,
      question: "Which tool does Express provide to automatically generate scaffolding?",
      code: "",
      options: ["scaffold-express", "express-init", "express-setup", "express-generator"],
      correctIndex: 3,
      explanation: "express-generator scaffolds a starter Express app structure.",
    },
    {
      id: 11,
      question: "How should you configure the Handlebars view engine in Express?",
      code: "",
      options: [
        "app.setView('handlebars')",
        "app.set('view engine', 'html')",
        "app.engine('handlebars', engine({ defaultLayout: 'main' })); app.set('view engine', 'handlebars')",
        "app.engine('html', express.templates())",
      ],
      correctIndex: 2,
      explanation:
        "Use app.engine(...) to register Handlebars, then set the view engine to 'handlebars'.",
    },
    {
      id: 12,
      question: "What does the expression {{body}} represent in Handlebars?",
      code: "",
      options: [
        "The placeholder where view content is inserted",
        "The main content area of the layout",
        "A comment in the template",
        "The CSS styling section",
      ],
      correctIndex: 0,
      explanation: "{{body}} is where the rendered view content is injected in the layout.",
    },
    {
      id: 13,
      question: "What order matters when adding routes and middleware in Express?",
      code: "",
      options: [
        "Order is not important in Express",
        "Order is significant, catch-all handlers must be last",
        "Catch-all handlers should be placed first",
        "Routes at the top take priority",
      ],
      correctIndex: 1,
      explanation: "Express matches in the order you define things; catch-all should go last.",
    },
    {
      id: 14,
      question: "Which templating engine abstracts HTML away completely?",
      code: "",
      options: ["Handlebars", "Express", "Mustache", "Pug"],
      correctIndex: 3,
      explanation: "Pug uses its own syntax instead of writing HTML directly.",
    },
    {
      id: 15,
      question: "Why does the textbook recommend Handlebars over Pug?",
      code: "",
      options: [
        "Because Handlebars uses abstract syntax",
        "Because it's faster than all other engines",
        "Because frontend developers prefer to write actual HTML",
        "Because it provides the least abstraction",
      ],
      correctIndex: 2,
      explanation: "Handlebars keeps you close to HTML, which many frontend devs prefer.",
    },
    {
      id: 16,
      question: "What is the primary purpose of scaffolding in Express?",
      code: "",
      options: [
        "To add fancy graphics to web pages",
        "To create boilerplate code for new projects",
        "To remove unnecessary code from projects",
        "To organize code into smaller functions",
      ],
      correctIndex: 1,
      explanation: "Scaffolding generates a starter structure and boilerplate.",
    },
    {
      id: 17,
      question: "Where should you create a views directory in an Express project?",
      code: "",
      options: [
        "In a 'templates' directory",
        "In the app root directory",
        "In the root directory alongside meadowlark.js",
        "In the 'html' directory",
      ],
      correctIndex: 1,
      explanation: "Views typically live in a /views folder at the project root.",
    },
    {
      id: 18,
      question: "What is the default layout parameter when configuring Handlebars?",
      code: "",
      options: ["default", "layout", "main", "root"],
      correctIndex: 2,
      explanation: "defaultLayout is commonly set to 'main'.",
    },
    {
      id: 19,
      question: "What does middleware provide in Express?",
      code: "",
      options: [
        "Modular separation of concerns",
        "Error handling exclusively",
        "Dynamic content routing",
        "Modularization of request handling",
      ],
      correctIndex: 0,
      explanation: "Middleware helps split logic into reusable, modular pieces.",
    },
    {
      id: 20,
      question: "What does res.type() do in Express?",
      code: "",
      options: [
        "Sets up response headers",
        "Sets the Content-Type header",
        "Removes the Content-Type header",
        "Renders views within layouts",
      ],
      correctIndex: 1,
      explanation: "res.type() sets the Content-Type (e.g., 'text/plain', 'application/json').",
    },
    {
      id: 21,
      question: "What is the difference between static files and views?",
      code: "",
      options: [
        "Static files use templates, views don't",
        "Static files are always cached, views are not",
        "Static files never change, views may be dynamic",
        "Static files are served with special processing, views are not",
      ],
      correctIndex: 2,
      explanation:
        "Static files are fixed assets (images, CSS, JS). Views are HTML pages that can be rendered dynamically.",
    },
    {
      id: 22,
      question: "How does Express handle querystrings in route matching?",
      code: "",
      options: [
        "Querystrings add security to the route",
        "Querystrings must always be specified",
        "By default, trailing slashes don't affect routing",
        "By default, querystrings are ignored in routing",
      ],
      correctIndex: 3,
      explanation:
        "Express matches routes by path; querystrings do not affect route matching by default.",
    },
    {
      id: 23,
      question: "How does Express handle route matching by default?",
      code: "",
      options: [
        "It normalizes paths automatically",
        "It requires manual normalization like Node",
        "It always considers querystrings",
        "It ignores querystrings, trailing slashes, and case",
      ],
      correctIndex: 3,
      explanation:
        "Express matches routes by path, ignoring querystrings, treating trailing slashes as optional, and matching case-insensitively by default.",
    },

  ],
};

function Quiz2() {
  const questions = quiz2.questions;
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIndex, optionIndex) => {
    setChecked(false);
    setAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };

  const handleCheckAnswers = () => {
    // If your project’s checkAnswers supports this format, you can swap to it:
    // const result = checkAnswers(questions, answers);
    // setScore(result.score); setChecked(true);

    let newScore = 0;
    questions.forEach((q, qIndex) => {
      if (Number(answers[qIndex]) === Number(q.correctIndex)) newScore += 1;
    });
    setScore(newScore);
    setChecked(true);
  };

  return (
    <div className="quiz">
      <h2>{quiz2.title}</h2>

      {questions.map((q, qIndex) => {
        const name = `q${qIndex}`;
        return (
          <div key={q.id} className="question-block">
            <h3>
              {qIndex + 1}. <strong>{q.question}</strong>
            </h3>

            {q.code && (
              <pre className="code-block">
                <code>{q.code}</code>
              </pre>
            )}

            {q.options.map((option, optionIndex) => {
              const isChecked = answers[qIndex] === optionIndex;
              return (
                <label
                  key={optionIndex}
                  className="option"
                  style={{ display: "block", margin: "4px 0" }}
                >
                  <input
                    type="radio"
                    name={name}
                    checked={isChecked}
                    onChange={() => handleOptionChange(qIndex, optionIndex)}
                  />
                  {" "}{option}
                </label>
              );
            })}

            {checked && (
              <div className="feedback">
                {(() => {
                  const userAns = answers[qIndex];
                  const isCorrect = Number(userAns) === Number(q.correctIndex);
                  return (
                    <>
                      <p>{isCorrect ? "✅ Correct" : "❌ Incorrect"}</p>
                      <p>
                        <strong>Correct answer: </strong>
                        {q.options[q.correctIndex]}
                      </p>
                      {q.explanation && <p>{q.explanation}</p>}
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        );
      })}

      <button onClick={handleCheckAnswers}>Check Answers</button>

      {checked && (
        <p className="score">
          Score: {score} / {questions.length}
        </p>
      )}
    </div>
  );
}

export default Quiz2;
