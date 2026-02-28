// src/quizzes/quiz6.js
import React, { useState } from "react";

export const quiz6 = {
  id: "quiz6",
  title: "Quiz 6 - Handlebar Templating",
  questions: [
    {
      id: 1,
      question: "What is the context object in Handlebars templating?",
      code: "",
      options: [
        "The middleware function stack",
        "The HTTP request object",
        "The configuration settings for Handlebars",
        "The object passed to the templating engine containing data for replacements",
      ],
      correctIndex: 3,
    },
    {
      id: 2,
      question: "Which order does the templating engine render content when using layouts?",
      code: "",
      options: ["Layout first, then view", "View first, then layout", "Randomly", "Simultaneously"],
      correctIndex: 1,
    },
    {
      id: 3,
      question: "In Handlebars, how many curly brackets should you use to render HTML content without escaping it?",
      code: "",
      options: [
        "Two brackets: {{content}}",
        "One bracket: {content}",
        "Three brackets: {{{content}}}",
        "Four brackets: {{{{content}}}}",
      ],
      correctIndex: 2,
    },
    {
      id: 4,
      question: "Which comment syntax in Handlebars will NOT be sent to the browser?",
      code: "",
      options: ["/* comment */", "{{! comment }}", "// comment", "<!-- comment -->"],
      correctIndex: 1,
    },
    {
      id: 5,
      question: "What does the {{#each}} helper do in Handlebars?",
      code: "",
      options: [
        "Creates conditional statements",
        "Defines a function",
        "Iterates over an array",
        "Loops through object properties only",
      ],
      correctIndex: 2,
    },
    {
      id: 6,
      question: "What is a common use case for partials in web development?",
      code: "",
      options: [
        "Database connections",
        "API endpoints",
        "User authentication",
        "Reusable components (widgets) across different pages",
      ],
      correctIndex: 3,
    },
    {
      id: 7,
      question: "What placeholder is used in a layout file to indicate where the view content should be rendered?",
      code: "",
      options: ["{{view}}", "{{{body}}}", "{{page}}", "{{content}}"],
      correctIndex: 1,
    },
    {
      id: 8,
      question: "How do you render a view without a layout in Express?",
      code: "",
      options: [
        "res.render('view', { noLayout: true })",
        "res.renderNoLayout('view')",
        "res.render('view', { layout: false })",
        "res.render('view', { layout: null })",
      ],
      correctIndex: 3,
    },
    {
      id: 9,
      question: 'What is the purpose of "sections" in Handlebars templates?',
      code: "",
      options: [
        "To create multiple layouts",
        "To organize CSS files",
        "To allow views to inject content into different parts of the layout",
        "To handle form validation",
      ],
      correctIndex: 2,
    },
    {
      id: 10,
      question: "Can express-handlebars support subdirectories for organizing partials?",
      code: "",
      options: [
        "Only in production mode",
        "Yes, you can organize partials in subdirectories",
        "No, all partials must be in the root partials directory",
        "Only with additional plugins",
      ],
      correctIndex: 1,
    },
    {
      id: 11,
      question: "What is the advantage of using HTML5 Boilerplate for templates?",
      code: "",
      options: [
        "It offers a well-crafted starting point with cross-browser compatibility",
        "It includes server-side logic",
        "It automatically generates content",
        "It provides database integration",
      ],
      correctIndex: 0,
    },
    {
      id: 12,
      question:
        "What is the primary advantage of using templating engines over writing HTML in JavaScript using document.write()?",
      code: "",
      options: [
        "Works better with older browsers",
        "Faster page loading times",
        "Requires less server resources",
        "Avoids context switching and escaping issues",
      ],
      correctIndex: 3,
    },
    {
      id: 13,
      question: "What npm package is used to add Handlebars support to Express?",
      code: "",
      options: ["hbs-express", "express-handlebars", "handlebars", "node-handlebars"],
      correctIndex: 1,
    },
    {
      id: 14,
      question: "What is the purpose of the {{#unless}} helper in Handlebars?",
      code: "",
      options: [
        "It executes code only when the argument is false",
        "It executes code when a condition is true",
        "It creates a loop",
        "It prevents code execution",
      ],
      correctIndex: 0,
    },
    {
      id: 15,
      question: 'How do you include a partial named "weather" in a Handlebars view?',
      code: "",
      options: ["{{weather}}", "{{include weather}}", "{{>weather}}", "{{partial weather}}"],
      correctIndex: 2,
    },
    {
      id: 16,
      question: "What is the default behavior of view caching in Express?",
      code: "",
      options: [
        "Always enabled",
        "Disabled in development, enabled in production",
        "Enabled in development, disabled in production",
        "Always disabled",
      ],
      correctIndex: 1,
    },
    {
      id: 17,
      question: "What is the purpose of a layout in Handlebars?",
      code: "",
      options: [
        "To style the page with CSS",
        "To serve as a template for templates with common page structure",
        "To process form data",
        "To handle routing",
      ],
      correctIndex: 1,
    },
    {
      id: 18,
      question: "How do you access a parent context property when inside a nested block in Handlebars?",
      code: "",
      options: ["../property", "@property", "parent.property", "^property"],
      correctIndex: 0,
    },
    {
      id: 19,
      question: "Where does Express look for partials by default?",
      code: "",
      options: ["/templates/partials", "/views/components", "/views/partials", "/public/partials"],
      correctIndex: 2,
    },
    {
      id: 20,
      question: "By default, where does Express look for views?",
      code: "",
      options: ["/views subdirectory", "/pages subdirectory", "/public subdirectory", "/templates subdirectory"],
      correctIndex: 0,
    },
  ],
};

function Quiz6() {
  const questions = quiz6.questions;
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
      <h2>{quiz6.title}</h2>

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

export default Quiz6;