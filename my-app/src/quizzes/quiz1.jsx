// src/quizzes/quiz1.js
import React, { useState } from "react";

export const quiz1 = {
  id: "quiz1",
  title: "Quiz 1 - Introduction to Node.js",
  questions: [
    {
      id: 1,
      question: "What does npm stand for?",
      code: "",
      options: [
        "New Package Manager",
        "Node Programming Module",
        "Node Package Manager",
        "npm is not an acronym (recursive abbreviation)",
      ],
      correctIndex: 3,
      explanation:
        "npm originally stood for Node Package Manager but is now considered a recursive abbreviation.",
    },
    {
      id: 2,
      question:
        "Which technology has become the ubiquitous solution for managing dependencies in web applications?",
      code: "",
      options: ["Webpack", "Bower", "Gulp", "Grunt"],
      correctIndex: 0, // ✅ Webpack
      explanation:
        "Webpack has become the dominant module bundler and dependency management tool.",
    },
    {
      id: 3,
      question: "Which framework inspired the creation of Express?",
      code: "",
      options: ["Django", "Sinatra", "Laravel", "Ruby on Rails"],
      correctIndex: 1,
      explanation: "Express was inspired by Sinatra, a Ruby web framework.",
    },
    {
      id: 4,
      question:
        "What keyboard combination typically terminates a running Node program in the terminal?",
      code: "",
      options: ["Ctrl-X", "Ctrl-Z", "Ctrl-Q", "Ctrl-C"],
      correctIndex: 3,
      explanation: "Ctrl-C sends SIGINT to terminate the process.",
    },
    {
      id: 5,
      question:
        "Which file does npm use to manage project dependencies and metadata?",
      code: "",
      options: [
        "project.json",
        "package.json",
        "npm.json",
        "dependencies.json",
      ],
      correctIndex: 1,
      explanation: "package.json stores metadata and dependencies.",
    },
    {
      id: 6,
      question: 'What characteristic makes Express "unopinionated"?',
      code: "",
      options: [
        "It doesn't enforce any coding standards",
        "It provides an extremely flexible middleware system that makes it easy to use components of your choice",
        "It works with any programming language",
        "It has no documentation",
      ],
      correctIndex: 1,
      explanation:
        "Express allows developers to structure applications however they prefer.",
    },
    {
      id: 7,
      question: "What is the core philosophy behind Node?",
      code: "",
      options: [
        "Procedural programming",
        "Object-oriented programming",
        "Functional programming",
        "Event-driven programming",
      ],
      correctIndex: 3,
      explanation: "Node uses an event-driven, non-blocking I/O model.",
    },
    {
      id: 8,
      question: "What JavaScript engine does Node use?",
      code: "",
      options: ["SpiderMonkey", "V8", "JavaScriptCore", "Chakra"],
      correctIndex: 1,
      explanation: "Node uses Google's V8 JavaScript engine.",
    },
    {
      id: 9,
      question:
        "What is the most common license you'll encounter for Node packages?",
      code: "",
      options: [
        "Apache 2.0",
        "GPL (GNU General Public License)",
        "MIT License",
        "BSD License",
      ],
      correctIndex: 2,
      explanation: "The MIT license is the most common in npm packages.",
    },
    {
      id: 10,
      question: "What does localhost refer to?",
      code: "",
      options: [
        "The cloud hosting server",
        "The nearest DNS server",
        "Your company's local network",
        "The computer you're currently using",
      ],
      correctIndex: 3,
      explanation: "localhost refers to your own machine (127.0.0.1).",
    },
    {
      id: 11,
      question:
        'What is the primary characteristic that makes Express a "minimal" framework?',
      code: "",
      options: [
        "It requires minimal setup time",
        "It provides a minimal layer between your brain and the server, allowing you to add functionality as needed",
        "It has very few features",
        "It only works with small applications",
      ],
      correctIndex: 1,
      explanation:
        "Express provides only essential features and lets you build on top.",
    },
    {
      id: 12,
      question: "What is the default port for HTTP?",
      code: "",
      options: ["8080", "3000", "443", "80"],
      correctIndex: 3,
      explanation: "Port 80 is the default HTTP port.",
    },
    {
      id: 13,
      question:
        "What does the __dirname global variable resolve to in Node?",
      code: "",
      options: [
        "The root directory of your project",
        "The directory the executing script resides in",
        "The directory where Node is installed",
        "The user's home directory",
      ],
      correctIndex: 1,
      explanation:
        "__dirname returns the directory name of the current module.",
    },
    {
      id: 14,
      question: "What Node method creates a basic HTTP server?",
      code: "",
      options: [
        "http.newServer()",
        "http.makeServer()",
        "http.createServer()",
        "http.initServer()",
      ],
      correctIndex: 2,
      explanation: "http.createServer() creates a basic HTTP server.",
    },
    {
      id: 15,
      question:
        "What does the acronym MEAN stand for in the context of the JavaScript stack?",
      code: "",
      options: [
        "Middleware, Express, Angular, Node",
        "MongoDB, Express, Apache, Node",
        "MySQL, Express, Apache, Next",
        "Mongo, Express, Angular, and Node",
      ],
      correctIndex: 3,
      explanation:
        "MEAN stands for MongoDB, Express, Angular, and Node.",
    },
    {
      id: 16,
      question:
        "What command installs a package globally using npm?",
      code: "",
      options: [
        "npm add -g package-name",
        "npm install package-name",
        "npm install -g package-name",
        "npm global install package-name",
      ],
      correctIndex: 2,
      explanation: "The -g flag installs a package globally.",
    },
    {
      id: 17,
      question: "Who created Node.js and in what year?",
      code: "",
      options: [
        "Douglas Crockford in 2008",
        "TJ Holowaychuk in 2007",
        "Brendan Eich in 1995",
        "Ryan Dahl in 2009",
      ],
      correctIndex: 3,
      explanation: "Node.js was created by Ryan Dahl in 2009.",
    },
    {
      id: 18,
      question:
        "What method is used to read files asynchronously in Node?",
      code: "",
      options: [
        "fs.loadFile()",
        "fs.readAsync()",
        "fs.readFile()",
        "fs.read()",
      ],
      correctIndex: 2,
      explanation:
        "fs.readFile() is the asynchronous method for reading files.",
    },
    {
      id: 19,
      question:
        "What does Express extend from Node's core objects?",
      code: "",
      options: [
        "http.InStream and http.OutStream",
        "http.Client and http.Server",
        "http.IncomingMessage and http.ServerResponse",
        "http.Request and http.Response",
      ],
      correctIndex: 2,
      explanation:
        "Express extends http.IncomingMessage and http.ServerResponse.",
    },
    {
      id: 20,
      question:
        "What is one major architectural difference between Node and traditional web servers like Apache or IIS?",
      code: "",
      options: [
        "Node requires a separate web server",
        "Node is single threaded",
        "Node uses multiple threads",
        "Node cannot handle static files",
      ],
      correctIndex: 1,
      explanation:
        "Node uses a single-threaded event loop architecture.",
    },
  ],
};

function Quiz1() {
  const questions = quiz1.questions;
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
      if (Number(answers[qIndex]) === Number(q.correctIndex)) {
        newScore += 1;
      }
    });

    setScore(newScore);
    setChecked(true);
  };

  return (
    <div className="quiz">
      <h2>{quiz1.title}</h2>

      {questions.map((q, qIndex) => (
        <div key={q.id} className="question-block">
          <h3>
            {qIndex + 1}. <strong>{q.question}</strong>
          </h3>

          {q.options.map((option, optionIndex) => (
            <label key={optionIndex} style={{ display: "block" }}>
              <input
                type="radio"
                name={`q${qIndex}`}
                checked={answers[qIndex] === optionIndex}
                onChange={() =>
                  handleOptionChange(qIndex, optionIndex)
                }
              />
              {" "}{option}
            </label>
          ))}

          {checked && (
            <div className="feedback">
              <p>
                {answers[qIndex] === q.correctIndex
                  ? "✅ Correct"
                  : "❌ Incorrect"}
              </p>
              <p>
                <strong>Correct answer: </strong>
                {q.options[q.correctIndex]}
              </p>
              <p>{q.explanation}</p>
            </div>
          )}
        </div>
      ))}

      <button onClick={handleCheckAnswers}>Check Answers</button>

      {checked && (
        <p className="score">
          Score: {score} / {questions.length}
        </p>
      )}
    </div>
  );
}

export default Quiz1;