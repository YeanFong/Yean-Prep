// src/quizzes/quiz4.jsx
import React, { useState } from "react";

export const quiz4 = {
  id: "quiz4",
  title: "Quiz 4 - Quality assurance",
  questions: [
    {
      id: 1,
      question: "Which tool does the book recommend for linting?",
      code: "",
      options: ["StyleLint", "Prettier", "ESLint", "JSLint"],
      correctIndex: 2,
    },
    {
      id: 2,
      question: "What is Continuous Integration (CI)?",
      code: "",
      options: [
        "A process where developers integrate code into a shared repository frequently, usually verified by automated builds and tests.",
        "A tool that automatically deploys code to production without testing.",
        "The practice of writing code continuously without breaks.",
        "A meeting held every morning to discuss integration.",
      ],
      correctIndex: 0,
    },
    {
      id: 3,
      question:
        "Which of the following is a potential downside of Integration Testing mentioned?",
      code: "",
      options: [
        "They only work on Windows.",
        "They cannot be automated.",
        "They are typically more complicated to set up and maintain than unit tests.",
        "They provide no value.",
      ],
      correctIndex: 2,
    },
    {
      id: 4,
      question:
        "What is the correct npm command to install Jest as a development dependency?",
      code: "",
      options: [
        "npm global install jest",
        "npm install -g jest-cli",
        "npm install --save-dev jest",
        "npm install jest",
      ],
      correctIndex: 2,
    },
    {
      id: 5,
      question: "When writing a unit test, what is an assertion?",
      code: "",
      options: [
        "A comment explaining the code.",
        "An error message returned by a failed test.",
        "The command used to run the test suite.",
        "A statement that declares what the expected outcome of a test should be.",
      ],
      correctIndex: 3,
    },
    {
      id: 6,
      question: "What is the primary purpose of Linting?",
      code: "",
      options: [
        "To compile the code into binary.",
        "To automatically fix all logic bugs.",
        "To identify potential errors and fragile constructs in the code.",
        "To minify the JavaScript code for production.",
      ],
      correctIndex: 2,
    },
    {
      id: 7,
      question: "What does Code Coverage measure?",
      code: "",
      options: [
        "How many browsers the website supports.",
        "The number of bugs found in the code.",
        "The number of tests written per developer.",
        "The percentage of lines of code that are executed during the test suite.",
      ],
      correctIndex: 3,
    },
    {
      id: 8,
      question: "How does Integration Testing differ from Unit Testing?",
      code: "",
      options: [
        "It does not require any tools.",
        "It is faster and easier to set up.",
        "It focuses only on the visual design of the website.",
        "It tests the interaction between multiple components or the whole system.",
      ],
      correctIndex: 3,
    },
    {
      id: 9,
      question: "In the context of Unit Testing, what is mocking?",
      code: "",
      options: [
        "Making fun of bad code to encourage improvements.",
        "Creating fake versions of external dependencies (like databases) to isolate the code being tested.",
        "Copying code from production to development.",
        "Running tests in a virtual machine.",
      ],
      correctIndex: 1,
    },
    {
      id: 10,
      question:
        "Why might you need to refactor an application for testability?",
      code: "",
      options: [
        "Because logic and presentation are too tightly coupled, making it hard to test logic in isolation.",
        "Because the file names are incorrect.",
        "Because Jest only works with modern JavaScript.",
        "Because the code is too old.",
      ],
      correctIndex: 0,
    },
    {
      id: 11,
      question:
        'Which statement best describes the difference between "Logic" and "Presentation" as defined in the text?',
      code: "",
      options: [
        'Logic is the "pure intellectual domain" (business rules), while Presentation is how it is displayed to the user.',
        "Logic involves HTML/CSS, while Presentation involves JavaScript.",
        "Logic and Presentation should always be mixed in the same file for efficiency.",
        "Presentation is easier to test than Logic.",
      ],
      correctIndex: 0,
    },
    {
      id: 12,
      question:
        "Which testing tool is primarily used in this book for Integration Testing?",
      code: "",
      options: ["Travis CI", "Mocha", "Puppeteer", "ESLint"],
      correctIndex: 2,
    },
    {
      id: 13,
      question:
        "What is the primary argument the author makes regarding the value of Quality Assurance (QA)?",
      code: "",
      options: [
        "It prevents the need for future maintenance.",
        "It ensures the project is completed under budget.",
        "It is only necessary for large enterprise teams.",
        '"Practice makes permanent," so practicing proper QA builds good habits.',
      ],
      correctIndex: 3,
    },
    {
      id: 14,
      question:
        "Why does the author recommend delineating Logic from Presentation?",
      code: "",
      options: [
        "It prevents the need for integration testing.",
        "It allows designers to write backend code.",
        "It allows logic to be tested more easily with unit tests.",
        "It makes the website load faster.",
      ],
      correctIndex: 2,
    },
    {
      id: 15,
      question:
        "Why did the author choose Jest over other frameworks like Mocha or Jasmine?",
      code: "",
      options: [
        "It is the only framework that supports React.",
        "It offers the best overall experience and is an excellent general-purpose framework.",
        "It is the oldest and most stable framework.",
        "It is built directly into Node.js.",
      ],
      correctIndex: 1,
    },
    {
      id: 16,
      question:
        'What is the "ultimate" integration test for a web application described in the book?',
      code: "",
      options: [
        "Rendering the app in a browser, manipulating it, and verifying behavior.",
        "Checking if the server starts without crashing.",
        "Validating the database schema.",
        "Reading the source code line-by-line.",
      ],
      correctIndex: 0,
    },
    {
      id: 17,
      question:
        'Which type of test is described as "very fine-grained," testing single components to ensure they function properly?',
      code: "",
      options: [
        "Integration Testing",
        "Acceptance Testing",
        "Unit Testing",
        "System Testing",
      ],
      correctIndex: 2,
    },
    {
      id: 18,
      question:
        "According to the chapter, which of the following is NOT one of the four key dimensions of a comprehensive QA plan?",
      code: "",
      options: [
        "Aesthetics",
        "SEO (Search Engine Optimization)",
        "Functionality",
        "Code Complexity",
      ],
      correctIndex: 3,
    },
    {
      id: 19,
      question: "What is Test-Driven Development (TDD)?",
      code: "",
      options: [
        "Writing tests before writing the code that satisfies them.",
        "Using only automated tools to generate code.",
        "Letting the QA team write all the code.",
        "Writing tests after the code is fully deployed.",
      ],
      correctIndex: 0,
    },
    {
      id: 20,
      question:
        "Which principle of maintenance is closely related to Continuous Integration?",
      code: "",
      options: [
        "Monitor Analytics.",
        'Prevent "Invisible" Failures.',
        "Use an Issue Tracker.",
        "Don't Procrastinate.",
      ],
      correctIndex: 1,
    },
  ],
};

function Quiz4() {
  const questions = quiz4.questions;
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
      <h2>{quiz4.title}</h2>

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
                {" "}{option}
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

export default Quiz4;