// src/quizzes/quiz13.jsx
import React, { useState } from "react";

export const quiz13 = {
  id: "quiz13",
  title: "Quiz 13 - API Request",
  questions: [
    {
      id: 1,
      question:
        "What HTTP header is used by the client to indicate what media types it is willing to receive from the API?",
      code: "",
      options: ["Allow-Media", "Accept", "Content-Type", "Receive-Type"],
      correctIndex: 1,
    },
    {
      id: 2,
      question:
        "What is the recommended naming convention for resource URIs in a REST API?",
      code: "",
      options: [
        "Use plural nouns for resource collections (e.g., /api/users).",
        "Append the file extension to the endpoint (e.g., /api/users.json).",
        "Use verbs indicating actions (e.g., /api/getUsers).",
        "Use singular nouns exclusively (e.g., /api/user).",
      ],
      correctIndex: 0,
    },
    {
      id: 3,
      question: "What does the acronym REST stand for in the context of web APIs?",
      code: "",
      options: [
        "Representational State Transfer",
        "Remote Execution System Tool",
        "Resource Evaluation State Test",
        "Relational Endpoint Service Transmission",
      ],
      correctIndex: 0,
    },
    {
      id: 4,
      question: 'What is meant by the "stateless" constraint in REST?',
      code: "",
      options: [
        "The client must reconnect to the server continuously.",
        "The server does not store any database records permanently.",
        "No client context is stored on the server between requests.",
        "The API does not require authentication.",
      ],
      correctIndex: 2,
    },
    {
      id: 5,
      question:
        "In an Express route handling API errors, what is the default status code if none is explicitly set before sending the response?",
      code: "",
      options: [
        "204 No Content",
        "404 Not Found",
        "200 OK",
        "500 Internal Server Error",
      ],
      correctIndex: 2,
    },
    {
      id: 6,
      question:
        "What is a common practice for maintaining backward compatibility when updating an API's structure?",
      code: "",
      options: [
        "Deleting the old endpoints immediately to force upgrades.",
        "Switching from JSON to XML payloads.",
        "Versioning the API, typically in the URL path (e.g., /api/v1/).",
        "Returning a 301 redirect to all outdated applications.",
      ],
      correctIndex: 2,
    },
    {
      id: 7,
      question: "What is the purpose of CORS in web development?",
      code: "",
      options: [
        "To secure the database from SQL injection attacks.",
        "To allow restricted resources on a web page to be requested from another domain.",
        "To route traffic between multiple Express servers.",
        "To compress JSON payloads for faster API response times.",
      ],
      correctIndex: 1,
    },
    {
      id: 8,
      question:
        "What HTTP status code is typically returned upon successfully creating a resource via a POST request?",
      code: "",
      options: [
        "201 Created",
        "301 Moved Permanently",
        "200 OK",
        "204 No Content",
      ],
      correctIndex: 0,
    },
    {
      id: 9,
      question: "What is the role of the Content-Type header in an API request?",
      code: "",
      options: [
        "It indicates the media type of the resource being sent to the server.",
        "It dictates the maximum payload size the server can accept.",
        "It tells the server what authentication token format is being used.",
        "It tells the client what type of data the server is returning.",
      ],
      correctIndex: 0,
    },
    {
      id: 10,
      question: 'What does it mean for an HTTP method to be "idempotent"?',
      code: "",
      options: [
        "It automatically parses JSON bodies.",
        "It always returns a 200 status code.",
        "Performing it multiple times has the same effect as performing it once.",
        "It cannot modify server data.",
      ],
      correctIndex: 2,
    },
    {
      id: 11,
      question:
        "Which HTTP method is conventionally used to retrieve an existing resource from a REST API?",
      code: "",
      options: ["DELETE", "POST", "GET", "PUT"],
      correctIndex: 2,
    },
    {
      id: 12,
      question:
        "Which HTTP method is standard for creating a new resource on the server?",
      code: "",
      options: ["DELETE", "GET", "POST", "PATCH"],
      correctIndex: 2,
    },
    {
      id: 13,
      question:
        "In an Express application, which method is explicitly used to send a JSON response to the client?",
      code: "",
      options: [
        "res.sendJSON(data)",
        "res.render(data, { json: true })",
        "res.json(data)",
        "req.send(data, 'json')",
      ],
      correctIndex: 2,
    },
    {
      id: 14,
      question:
        "When accessing the parsed data of a POST request, which Express object property is used?",
      code: "",
      options: ["req.data", "req.payload", "req.content", "req.body"],
      correctIndex: 3,
    },
    {
      id: 15,
      question:
        "How do you access route parameters (e.g., the id in /api/users/:id) in an Express API route?",
      code: "",
      options: ["req.body.id", "req.params.id", "req.query.id", "req.url.id"],
      correctIndex: 1,
    },
    {
      id: 16,
      question:
        "Which built-in middleware is required in modern Express to parse incoming requests with JSON payloads?",
      code: "",
      options: [
        "app.use(express.parseJSON())",
        "app.use(body.json())",
        "app.use(express.payload())",
        "app.use(express.json())",
      ],
      correctIndex: 3,
    },
    {
      id: 17,
      question:
        "What HTTP status code is appropriate when a user attempts an action they are not authenticated to perform?",
      code: "",
      options: [
        "405 Method Not Allowed",
        "400 Bad Request",
        "401 Unauthorized",
        "404 Not Found",
      ],
      correctIndex: 2,
    },
    {
      id: 18,
      question:
        "How do you access query string parameters (e.g., ?sort=asc) in an Express GET request?",
      code: "",
      options: [
        "req.params.sort",
        "req.search.sort",
        "req.url.sort",
        "req.query.sort",
      ],
      correctIndex: 3,
    },
    {
      id: 19,
      question: "Why might an API endpoint return a 204 No Content status code?",
      code: "",
      options: [
        "The request was successful, but there is no payload body to return.",
        "The database is empty and has no records to return.",
        "The client forgot to include a request body.",
        "The server crashed before it could compile the response body.",
      ],
      correctIndex: 0,
    },
    {
      id: 20,
      question:
        "When an Express server encounters an unhandled exception during an API request, what status code should ideally be returned by the error-handling middleware?",
      code: "",
      options: [
        "503 Service Unavailable",
        "400 Bad Request",
        "500 Internal Server Error",
        "404 Not Found",
      ],
      correctIndex: 2,
    },
    {
      id: 21,
      question:
        "How does res.json() differ from res.send() when passing an object or array?",
      code: "",
      options: [
        "There is absolutely no difference; they are aliases.",
        "res.send() throws an error if passed an object.",
        "res.send() converts the data to XML instead of JSON.",
        "res.json() sets the Content-Type header to application/json explicitly.",
      ],
      correctIndex: 3,
    },
    {
      id: 22,
      question:
        "Which HTTP status code should an API return if a requested resource, like a specific user ID, cannot be found?",
      code: "",
      options: [
        "400 Bad Request",
        "404 Not Found",
        "401 Unauthorized",
        "500 Internal Server Error",
      ],
      correctIndex: 1,
    },
    {
      id: 23,
      question:
        "Which HTTP method is specifically designed for applying partial modifications to a resource?",
      code: "",
      options: ["POST", "PUT", "UPDATE", "PATCH"],
      correctIndex: 3,
    },
    {
      id: 24,
      question:
        "Which HTTP status code indicates a generic client-side error, such as malformed JSON syntax in the request body?",
      code: "",
      options: [
        "403 Forbidden",
        "400 Bad Request",
        "500 Internal Server Error",
        "502 Bad Gateway",
      ],
      correctIndex: 1,
    },
  ],
};

function Quiz13() {
  const questions = quiz13.questions;
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
      <h2>{quiz13.title}</h2>

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

export default Quiz13;