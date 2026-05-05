// src/quizzes/quiz10.jsx
import React, { useState } from "react";

export const quiz10 = {
  id: "quiz10",
  title: "Quiz 10 - Sending Email",
  questions: [
    {
      id: 1,
      question: "What is recommended for bulk email sending?",
      code: "",
      options: [
        "Specialized bulk email services",
        "Express middleware",
        "Local SMTP server",
        "Manual sending",
      ],
      correctIndex: 0,
    },
    {
      id: 2,
      question: "What layout technique is commonly used in HTML email?",
      code: "",
      options: ["Div-based layout", "Grid", "Flexbox", "Tables"],
      correctIndex: 3,
    },
    {
      id: 3,
      question:
        "Nodemailer eliminates the need to understand complex email encoding details.",
      code: "",
      options: ["True", "False"],
      correctIndex: 0,
    },
    {
      id: 4,
      question: "What feature allows sending emails to multiple recipients?",
      code: "",
      options: [
        "Express routing",
        "Looping requests",
        "SMTP relay",
        "Nodemailer capability",
      ],
      correctIndex: 3,
    },
    {
      id: 5,
      question: "What is the role of middleware in email sending?",
      code: "",
      options: [
        "Encapsulating email functionality",
        "Handling HTTP requests",
        "Managing sessions",
        "Rendering views",
      ],
      correctIndex: 0,
    },
    {
      id: 6,
      question: "What does Nodemailer help simplify?",
      code: "",
      options: [
        "Database queries",
        "Routing",
        "Email encoding and formatting",
        "Authentication",
      ],
      correctIndex: 2,
    },
    {
      id: 7,
      question:
        'Email headers like the "from" address cannot be changed by the sender.',
      code: "",
      options: ["True", "False"],
      correctIndex: 1,
    },
    {
      id: 8,
      question: "Which library is used in Node.js for sending emails?",
      code: "",
      options: ["SMTP.js", "Nodemailer", "Express-mail", "MailJS"],
      correctIndex: 1,
    },
    {
      id: 9,
      question: "Why is HTML email difficult to implement?",
      code: "",
      options: [
        "Lack of tools",
        "Requires JavaScript",
        "Limited browser support",
        "Limited client support and outdated standards",
      ],
      correctIndex: 3,
    },
    {
      id: 10,
      question: "Which protocol is primarily used for sending email?",
      code: "",
      options: ["FTP", "TCP", "HTTP", "SMTP"],
      correctIndex: 3,
    },
    {
      id: 11,
      question: "What is required in every email message?",
      code: "",
      options: ["HTML body", "Attachment", "Subject line", "From address"],
      correctIndex: 3,
    },
    {
      id: 12,
      question: "HTML email is universally consistent across all email clients.",
      code: "",
      options: ["True", "False"],
      correctIndex: 1,
    },
    {
      id: 13,
      question: "What is recommended when writing HTML email for compatibility?",
      code: "",
      options: [
        "Write simple, old-style HTML",
        "Use modern CSS frameworks",
        "Avoid tables",
        "Use advanced JavaScript",
      ],
      correctIndex: 0,
    },
    {
      id: 14,
      question: "What is a common practice for automated email addresses?",
      code: "",
      options: [
        "support@domain.com",
        "do-not-reply@domain.com",
        "admin@domain.com",
        "user@domain.com",
      ],
      correctIndex: 1,
    },
    {
      id: 15,
      question: "What are the two main formats for email content?",
      code: "",
      options: [
        "CSS and HTML",
        "Plain text and HTML",
        "Text and Binary",
        "JSON and XML",
      ],
      correctIndex: 1,
    },
    {
      id: 16,
      question:
        "Why is it recommended to include both HTML and text email versions?",
      code: "",
      options: [
        "To reduce size",
        "For faster delivery",
        "For compatibility with all users",
        "For encryption",
      ],
      correctIndex: 2,
    },
    {
      id: 17,
      question: "What is one challenge with email compatibility?",
      code: "",
      options: [
        "Different email client support",
        "DNS issues",
        "Different ports",
        "Different browsers",
      ],
      correctIndex: 0,
    },
    {
      id: 18,
      question: 'What is "spoofing" in email?',
      code: "",
      options: [
        "Blocking spam emails",
        "Encrypting email content",
        "Sending bulk emails",
        'Setting a fake "from" address',
      ],
      correctIndex: 3,
    },
    {
      id: 19,
      question: "What does MTA stand for?",
      code: "",
      options: [
        "Message Tracking Agent",
        "Mail Transport API",
        "Mail Transfer Agent",
        "Message Transfer Application",
      ],
      correctIndex: 2,
    },
    {
      id: 20,
      question: "What can be included in HTML emails?",
      code: "",
      options: [
        "Only attachments",
        "Only text",
        "Only JSON",
        "Images and formatted content",
      ],
      correctIndex: 3,
    },
  ],
};

function Quiz10() {
  const questions = quiz10.questions;
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
      <h2>{quiz10.title}</h2>

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

export default Quiz10;