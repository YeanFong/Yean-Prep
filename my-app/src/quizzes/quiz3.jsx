// src/quizzes/quiz3.js
import React, { useState } from "react";
import { checkAnswers } from "../utils/checkAnswers"; // keep same import style as template

export const quiz3 = {
  id: "quiz3",
  title: "Quiz 3 (Version Control)",
  questions: [
    {
      id: 1,
      question:
        "What does the caret (^) indicate when placed before a version number in package.json (e.g., ^4.16.4)?",
      code: "",
      options: [
        "It locks the dependency to that exact version only",
        "It allows updates to any version that does not increment the major version number",
        "It allows updates to any version that does not increment the minor version number",
        "It marks the package as deprecated",
      ],
      correctIndex: 1,
      explanation:
        "The caret allows updates within the same major version (no major bump).",
    },
    {
      id: 2,
      question:
        "According to the author, where do most source code files typically reside in real-world projects to prevent clutter in the project root?",
      code: "",
      options: ["lib directory", "public directory", "src directory", "bin directory"],
      correctIndex: 2,
      explanation: "Most source code is typically placed in the src directory.",
    },
    {
      id: 3,
      question:
        'In semantic versioning, what does the "PATCH" increment (the last number, e.g., the 5 in 2.0.5) represent?',
      code: "",
      options: [
        "New features that are backward compatible",
        "Minor changes or bug fixes that do not impact compatibility",
        "Major breaking changes",
        "A complete rewrite of the software",
      ],
      correctIndex: 1,
      explanation: "PATCH is for small fixes that should not break compatibility.",
    },
    {
      id: 4,
      question:
        'Which of the following best describes "Encapsulation" in the context of Node modules?',
      code: "",
      options: [
        "Combining all CSS and JavaScript into a single file",
        "Compressing files to save space",
        "Making all variables global so they are easy to access",
        "Hiding implementation details and only exposing necessary functionality",
      ],
      correctIndex: 3,
      explanation:
        "Encapsulation hides details and exposes only what the module needs to share.",
    },
    {
      id: 5,
      question:
        "When importing a local module you created (e.g., fortune.js in a lib directory), how should you reference it?",
      code: "",
      options: [
        "require('fortune')",
        "import fortune from 'npm'",
        "require('./lib/fortune')",
        "require('lib/fortune')",
      ],
      correctIndex: 2,
      explanation: "Local modules should be imported using a relative path.",
    },
    {
      id: 6,
      question:
        "Why does the author prefer naming the main application file after the project (e.g., meadowlark.js) instead of index.js or app.js?",
      code: "",
      options: [
        "It is a requirement for Express scaffolding",
        "It improves application performance",
        "It avoids confusion when multiple editor tabs are open",
        "It is required by npm",
      ],
      correctIndex: 2,
      explanation: "A project-named entry file is easier to identify in open tabs.",
    },
    {
      id: 7,
      question: 'The phrase "practice makes permanent" implies that:',
      code: "",
      options: [
        "Coding speed is more important than code quality",
        "Practicing bad habits will make those bad habits automatic",
        "Repeating an action leads to perfection regardless of quality",
        "You should only practice when you have free time",
      ],
      correctIndex: 1,
      explanation:
        "If you repeatedly practice mistakes, you can hardwire those mistakes.",
    },
    {
      id: 8,
      question:
        "Why does the author recommend adding node_modules to the .gitignore file?",
      code: "",
      options: [
        "Git cannot handle large numbers of files",
        "It contains personal user data",
        "It causes security vulnerabilities in the repository",
        "It is a derived artifact that can be regenerated with npm install",
      ],
      correctIndex: 3,
      explanation:
        "node_modules can be recreated anytime using npm install, so it’s not committed.",
    },
    {
      id: 9,
      question:
        "In the context of Node modules, what is the role of module.exports or exports?",
      code: "",
      options: [
        "To import external libraries",
        "To delete variables from memory",
        "To define global variables for the entire application",
        "To make functionality visible outside of the module",
      ],
      correctIndex: 3,
      explanation: "Exports controls what a module exposes to other files.",
    },
    {
      id: 10,
      question:
        "Which of the following is NOT listed as a primary benefit of using version control?",
      code: "",
      options: ["Experimentation", "Attribution", "Automatic Code Optimization", "Documentation"],
      correctIndex: 2,
      explanation:
        "Version control helps track changes/collaboration, not automatically optimize code.",
    },
    {
      id: 11,
      question: "What markup format is typically used for the README file?",
      code: "",
      options: ["JSON", "XML", "HTML", "Markdown"],
      correctIndex: 3,
      explanation: "README files are commonly written in Markdown (README.md).",
    },
    {
      id: 12,
      question:
        "Which file is typically found in the project root and is used to manage project dependencies and metadata?",
      code: "",
      options: ["index.html", "manifest.json", "config.xml", "package.json"],
      correctIndex: 3,
      explanation: "package.json contains dependencies, scripts, and metadata.",
    },
    {
      id: 13,
      question: "What is the purpose of the .gitignore file?",
      code: "",
      options: [
        "To specify files and directories that Git should ignore by default",
        "To list packages that npm should not install",
        "To list files that should be deleted from the system",
        "To store sensitive passwords and API keys",
      ],
      correctIndex: 0,
      explanation: ".gitignore tells Git what NOT to track.",
    },
    {
      id: 14,
      question:
        "How does Node know to look for a module in the node_modules directory?",
      code: "",
      options: [
        "When the import path does not contain a directory prefix like ./ or /",
        "When the file extension is omitted",
        "When the import path starts with ./",
        "When the import path starts with /",
      ],
      correctIndex: 0,
      explanation:
        "Bare imports (no ./ or /) are resolved from node_modules (and other rules).",
    },
    {
      id: 15,
      question:
        "What is the purpose of the package-lock.json file created by newer versions of npm?",
      code: "",
      options: [
        "To store the project's API keys securely",
        "To prevent other users from installing the package",
        "To lock the project directory from write access",
        "To record the exact versions of dependencies that were installed",
      ],
      correctIndex: 3,
      explanation: "package-lock.json captures exact dependency versions for repeatable installs.",
    },
    {
      id: 16,
      question:
        "What is the correct way to handle a bug in an open-source package your project depends on?",
      code: "",
      options: [
        "Edit the file in node_modules and commit it",
        "Copy the code into your project and rename it",
        "Ignore the bug and write a workaround",
        "Fork the package, fix it, and use your fork (or submit a PR)",
      ],
      correctIndex: 3,
      explanation: "Fix upstream via a fork/PR (and optionally use your fork).",
    },
    {
      id: 17,
      question: "What is the purpose of the README.md file?",
      code: "",
      options: [
        "To list the project's dependencies in JSON format",
        "To configure the database connection",
        "To provide a roadmap, architectural overview, and critical information for the project",
        "To store the project's source code",
      ],
      correctIndex: 2,
      explanation: "README explains how the project works and how to use it.",
    },
    {
      id: 18,
      question:
        "Which Git command is recommended to add all current changes (including deletions) to the staging area?",
      code: "",
      options: ["git stage -all", "git commit -a", "git add .", "git add -A"],
      correctIndex: 3,
      explanation: "git add -A stages all changes (adds/modifies/deletes).",
    },
    {
      id: 19,
      question:
        "If you modify code directly inside the node_modules directory, what is the likely outcome?",
      code: "",
      options: [
        "Your changes will be lost the next time npm install is run",
        "The application will immediately crash",
        "npm will automatically create a fork of the package",
        "Your changes will be permanently saved to the npm registry",
      ],
      correctIndex: 0,
      explanation:
        "node_modules is recreated/updated by installs, so edits there won’t persist reliably.",
    },
    {
      id: 20,
      question: 'What is the "entry point" of a Node application?',
      code: "",
      options: [
        "The first HTML file loaded by the browser",
        "The main JavaScript file that starts the application (e.g., meadowlark.js)",
        "The .gitignore file",
        "The node_modules directory",
      ],
      correctIndex: 1,
      explanation: "The entry point is the main JS file that boots the app.",
    },
  ],
};

function Quiz3() {
  const questions = quiz3.questions;
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
      <h2>{quiz3.title}</h2>

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
                  {" "}
                  {option}
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

      {checked && <p className="score">Score: {score} / {questions.length}</p>}
    </div>
  );
}

export default Quiz3;