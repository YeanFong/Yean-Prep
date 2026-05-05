// src/quizzes/quiz11.jsx
import React, { useState } from "react";

export const quiz11 = {
  id: "quiz11",
  title: "Quiz 11 - Persistence",
  questions: [
    {
      id: 1,
      question:
        'Which database type is characterized by a "schema-less" nature and stores data in documents?',
      code: "",
      options: [
        "NoSQL (e.g., MongoDB)",
        "Graph Database",
        "Relational (RDBMS)",
        "Flat-file Database",
      ],
      correctIndex: 0,
    },
    {
      id: 2,
      question:
        "Which property is typically used in a Mongoose schema to ensure a field must be provided?",
      code: "",
      options: ["required: true", "default: true", "unique: true", "index: true"],
      correctIndex: 0,
    },
    {
      id: 3,
      question:
        "Why is it recommended to use environment variables for database credentials?",
      code: "",
      options: [
        "To allow the database to be shared publicly",
        "To keep sensitive information out of source control",
        "Because Node.js requires it for all strings",
        "To make the code run faster",
      ],
      correctIndex: 1,
    },
    {
      id: 4,
      question:
        "Which term refers to the ability of a database to handle growth by adding more machines to a cluster?",
      code: "",
      options: [
        "Horizontal Scaling",
        "Normalization",
        "Vertical Scaling",
        "Virtualization",
      ],
      correctIndex: 0,
    },
    {
      id: 5,
      question: "What is the purpose of mongoose.connect()?",
      code: "",
      options: [
        "To create a new database",
        "To establish a connection between Node.js and MongoDB",
        "To define a data model",
        "To export data to a JSON file",
      ],
      correctIndex: 1,
    },
    {
      id: 6,
      question:
        'In a "One-to-Many" relationship in MongoDB, what is the most common way to represent the "Many" side?',
      code: "",
      options: [
        "Using a CSV file",
        "Hardcoding the values in the application logic",
        "Creating a separate database for each item",
        "Nesting an array of subdocuments or using references",
      ],
      correctIndex: 3,
    },
    {
      id: 7,
      question: 'What is a "sharded" database?',
      code: "",
      options: [
        "A database where data is partitioned across multiple servers",
        "A database split into multiple tables",
        "A database that uses only memory",
        "A database with no primary key",
      ],
      correctIndex: 0,
    },
    {
      id: 8,
      question: "How does MongoDB handle document identifiers by default?",
      code: "",
      options: [
        "It uses the filename as the ID",
        "It uses an auto-incrementing integer",
        "It generates a unique _id field (ObjectId)",
        "It requires the user to provide a GUID",
      ],
      correctIndex: 2,
    },
    {
      id: 9,
      question:
        'What is a "Connection String" (URI) in the context of MongoDB?',
      code: "",
      options: [
        "A list of all collection names",
        "A URL that tells the application where and how to connect to the database",
        "A string of code to encrypt data",
        "A password for the OS",
      ],
      correctIndex: 1,
    },
    {
      id: 10,
      question: 'What is a "Seeder" script used for in development?',
      code: "",
      options: [
        "To encrypt user passwords",
        "To populate a database with initial or dummy data",
        "To optimize database indexes",
        "To delete all production data",
      ],
      correctIndex: 1,
    },
    {
      id: 11,
      question:
        'What is the main benefit of "Normalization" in relational databases?',
      code: "",
      options: [
        "Easier horizontal scaling",
        "Increased data redundancy",
        "Faster read speeds for all queries",
        "Reduced data redundancy and improved integrity",
      ],
      correctIndex: 3,
    },
    {
      id: 12,
      question:
        "Which Node.js package is widely used as an Object Data Modeling (ODM) library for MongoDB?",
      code: "",
      options: ["Knex", "TypeORM", "Sequelize", "Mongoose"],
      correctIndex: 3,
    },
    {
      id: 13,
      question:
        "Which of the following is a reason to choose a Relational Database (like PostgreSQL) over a NoSQL database?",
      code: "",
      options: [
        "Preference for JSON-like storage",
        "Requirement for complex joins and strict data integrity",
        "Need for horizontal scaling",
        "Rapidly changing data structures",
      ],
      correctIndex: 1,
    },
    {
      id: 14,
      question: "What does the Lean option do in a Mongoose query?",
      code: "",
      options: [
        "It deletes the data after reading",
        "It only returns the first letter of every string",
        "It makes the query run slower",
        "It returns plain JavaScript objects instead of full Mongoose documents",
      ],
      correctIndex: 3,
    },
    {
      id: 15,
      question:
        'What does "ACID" stand for in relational database management systems?',
      code: "",
      options: [
        "Allocation, Cache, Instance, Data",
        "Accuracy, Control, Integration, Delivery",
        "Access, Compression, Indexing, Distribution",
        "Atomicity, Consistency, Isolation, Durability",
      ],
      correctIndex: 3,
    },
    {
      id: 16,
      question:
        "What happens if you try to save a Mongoose document that fails schema validation?",
      code: "",
      options: [
        "The save() method returns an error or rejects the promise",
        "It saves anyway but logs a warning",
        "The database creates a new field automatically",
        "The Node.js process crashes immediately",
      ],
      correctIndex: 0,
    },
    {
      id: 17,
      question:
        'When using MongoDB, what is a "collection" roughly equivalent to in a relational database?',
      code: "",
      options: ["A Table", "A Column", "A Database", "A Row"],
      correctIndex: 0,
    },
    {
      id: 18,
      question:
        "In Mongoose, what is the difference between a Schema and a Model?",
      code: "",
      options: [
        "They are identical",
        "A Schema defines structure; a Model is a constructor compiled from the Schema",
        "A Schema is for production; a Model is for testing",
        "A Model is for SQL; a Schema is for NoSQL",
      ],
      correctIndex: 1,
    },
    {
      id: 19,
      question:
        "Which Mongoose method is used to retrieve a single document by its ID?",
      code: "",
      options: [
        "Model.find()",
        "Model.getOne()",
        "Model.select()",
        "Model.findById()",
      ],
      correctIndex: 3,
    },
    {
      id: 20,
      question: "Which of the following is NOT a valid Mongoose SchemaType?",
      code: "",
      options: ["Boolean", "ArrayList", "String", "Number"],
      correctIndex: 1,
    },
  ],
};

function Quiz11() {
  const questions = quiz11.questions;
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
      <h2>{quiz11.title}</h2>

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

export default Quiz11;