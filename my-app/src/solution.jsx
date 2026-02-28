// src/solution.jsx
import React from "react";
import './solution.css';

const solutionData = [
  {
    quiz: "Quiz 1 - Introduction to Node.js",
    questions: [
      { question: "What does npm stand for?", correctAnswers: ["npm is not an acronym (recursive abbreviation)"] },
      { question: "Which technology has become the ubiquitous solution for managing dependencies in web applications?", correctAnswers: ["Webpack"] },
      { question: "Which framework inspired the creation of Express?", correctAnswers: ["Sinatra"] },
      { question: "What keyboard combination typically terminates a running Node program in the terminal?", correctAnswers: ["Ctrl-C"] },
      { question: "Which file does npm use to manage project dependencies and metadata?", correctAnswers: ["package.json"] },
      { question: 'What characteristic makes Express "unopinionated"?', correctAnswers: ["It provides an extremely flexible middleware system that makes it easy to use components of your choice"] },
      { question: "What is the core philosophy behind Node?", correctAnswers: ["Event-driven programming"] },
      { question: "What JavaScript engine does Node use?", correctAnswers: ["V8"] },
      { question: "What is the most common license you'll encounter for Node packages?", correctAnswers: ["MIT License"] },
      { question: "What does localhost refer to?", correctAnswers: ["The computer you're currently using"] },
      { question: 'What is the primary characteristic that makes Express a "minimal" framework?', correctAnswers: ["It provides a minimal layer between your brain and the server, allowing you to add functionality as needed"] },
      { question: "What is the default port for HTTP?", correctAnswers: ["80"] },
      { question: "What does the __dirname global variable resolve to in Node?", correctAnswers: ["The directory the executing script resides in"] },
      { question: "What Node method creates a basic HTTP server?", correctAnswers: ["http.createServer()"] },
      { question: "What does the acronym MEAN stand for in the context of the JavaScript stack?", correctAnswers: ["Mongo, Express, Angular, and Node"] },
      { question: "What command installs a package globally using npm?", correctAnswers: ["npm install -g package-name"] },
      { question: "Who created Node.js and in what year?", correctAnswers: ["Ryan Dahl in 2009"] },
      { question: "What method is used to read files asynchronously in Node?", correctAnswers: ["fs.readFile()"] },
      { question: "What does Express extend from Node's core objects?", correctAnswers: ["http.IncomingMessage and http.ServerResponse"] },
      { question: "What is one major architectural difference between Node and traditional web servers like Apache or IIS?", correctAnswers: ["Node is single threaded"] },
    ], 
  },
  {
    quiz: "Quiz 2 - Express + Handlebars",
    questions: [
      {
        question: "What file contains project metadata and dependencies in Node?",
        correctAnswers: ["package.json"],
      },
      {
        question: "When must you explicitly set the status code in Express routes?",
        correctAnswers: ["For custom 404 and 500 error pages"],
      },
      {
        question: "What HTTP status code does Express default to for responses?",
        correctAnswers: ["200 OK"],
      },
      {
        question: "What is the purpose of the layout in Handlebars templates?",
        correctAnswers: ["To provide a common framework for pages"],
      },
      {
        question: "What does static middleware do in Express?",
        correctAnswers: ["Delivers static resources to the client without special handling"],
      },
      {
        question: "Which method renders a view in Express?",
        correctAnswers: ["res.render()"],
      },
      {
        question: "What npm package provides Handlebars support for Express?",
        correctAnswers: ["express-handlebars"],
      },
      {
        question: "Which method is used to add routes for GET requests in Express?",
        correctAnswers: ["app.get()"],
      },
      {
        question: "What is the purpose of app.use() in Express?",
        correctAnswers: ["To add middleware to the application"],
      },
      {
        question: "Which tool does Express provide to automatically generate scaffolding?",
        correctAnswers: ["express-generator"],
      },
      {
        question: "How should you configure the Handlebars view engine in Express?",
        correctAnswers: [
          "app.engine('handlebars', engine({ defaultLayout: 'main' })); app.set('view engine', 'handlebars')"
        ],
      },
      {
        question: "What does the expression {{body}} represent in Handlebars?",
        correctAnswers: ["The placeholder where view content is inserted"],
      },
      {
        question: "What order matters when adding routes and middleware in Express?",
        correctAnswers: ["Order is significant, catch-all handlers must be last"],
      },
      {
        question: "Which templating engine abstracts HTML away completely?",
        correctAnswers: ["Pug"],
      },
      {
        question: "Why does the textbook recommend Handlebars over Pug?",
        correctAnswers: ["Because frontend developers prefer to write actual HTML"],
      },
      {
        question: "What is the primary purpose of scaffolding in Express?",
        correctAnswers: ["To create boilerplate code for new projects"],
      },
      {
        question: "Where should you create a views directory in an Express project?",
        correctAnswers: ["In the app root directory"],
      },
      {
        question: "What is the default layout parameter when configuring Handlebars?",
        correctAnswers: ["main"],
      },
      {
        question: "What does middleware provide in Express?",
        correctAnswers: ["Modular separation of concerns"],
      },
      {
        question: "What does res.type() do in Express?",
        correctAnswers: ["Sets the Content-Type header"],
      },
      {
        question: "What is the difference between static files and views?",
        correctAnswers: ["Static files never change, views may be dynamic"],
      },
      {
        question: "How does Express handle querystrings in route matching?",
        correctAnswers: ["By default, querystrings are ignored in routing"],
      },
      {
        question: "How does Express handle route matching by default?",
        correctAnswers: ["It ignores querystrings, trailing slashes, and case"],
      },      
    ],
  },
  {
    quiz: "Quiz 3 - Version Control",
    questions: [
      {
        question: "What does the caret symbol (^) indicate when placed before a version number in package.json (e.g., ^4.16.4)?",
        correctAnswers: ["It allows updates to any version that does not increment the major version number."],
      },
      {
        question: "According to the author, where do most source code files typically reside in real-world projects to prevent clutter in the project root?",
        correctAnswers: ["src directory"],
      },
      {
        question: "In semantic versioning, what does the \"PATCH\" increment (the last number, e.g., the 5 in 2.0.5) represent?",
        correctAnswers: ["Minor changes or bug fixes that shouldn’t impact compatibility."],
      },
      {
        question: "Which of the following best describes \"Encapsulation\" in the context of Node modules?",
        correctAnswers: ["Hiding implementation details and only exposing necessary functionality."],
      },
      {
        question: "When importing a local module you created (e.g., fortune.js in a lib directory), how should you reference it?",
        correctAnswers: ["require('./lib/fortune')"],
      },
      {
        question: "Why does the author prefer naming the main application file after the project (e.g., meadowlark.js) instead of index.js or app.js?",
        correctAnswers: ["It avoids confusion when multiple editor tabs are open."],
      },
      {
        question: "The phrase \"practice makes permanent\" implies that:",
        correctAnswers: ["Practicing bad habits will make those bad habits automatic."],
      },
      {
        question: "Why does the author recommend adding node_modules to the .gitignore file?",
        correctAnswers: ["It is a derived artifact that can be regenerated with npm install."],
      },
      {
        question: "In the context of Node modules, what is the role of module.exports or exports?",
        correctAnswers: ["To make functionality visible outside of the module."],
      },
      {
        question: "Which of the following is NOT listed as a primary benefit of using version control?",
        correctAnswers: ["Automatic Code Optimization"],
      },
      {
        question: "What markup format is typically used for the README file?",
        correctAnswers: ["Markdown"],
      },
      {
        question: "Which file is typically found in the project root and is used to manage project dependencies and metadata?",
        correctAnswers: ["package.json"],
      },
      {
        question: "What is the purpose of the .gitignore file?",
        correctAnswers: ["To specify files and directories that Git should ignore by default."],
      },
      {
        question: "How does Node know to look for a module in the node_modules directory?",
        correctAnswers: ["When the import path does not contain a directory prefix like ./ or /."],
      },
      {
        question: "What is the purpose of the package-lock.json file created by newer versions of npm?",
        correctAnswers: ["To record the exact versions of dependencies that were installed."],
      },
      {
        question: "What is the correct way to handle a bug in an open-source package your project depends on?",
        correctAnswers: ["Fork the package, fix it, and use your fork (or submit a PR)."],
      },
      {
        question: "What is the purpose of the README.md file?",
        correctAnswers: ["To provide a roadmap, architectural overview, and critical information for the project."],
      },
      {
        question: "Which Git command is recommended to add all current changes (including deletions) to the staging area?",
        correctAnswers: ["git add -A"],
      },
      {
        question: "If you modify code directly inside the node_modules directory, what is the likely outcome?",
        correctAnswers: ["Your changes will be lost the next time npm install is run."],
      },
      {
        question: "What is the \"entry point\" of a Node application?",
        correctAnswers: ["The main JavaScript file that starts the application (e.g., meadowlark.js)."],
      },
    ],
  },
  {
    quiz: "Quiz 4 - Quality Assurance",
    questions: [
      {
        question: "Which tool does the book recommend for linting?",
        correctAnswers: ["ESLint"],
      },
      {
        question: "What is Continuous Integration (CI)?",
        correctAnswers: [
          "A process where developers integrate code into a shared repository frequently, usually verified by automated builds and tests.",
        ],
      },
      {
        question:
          "Which of the following is a potential downside of Integration Testing mentioned?",
        correctAnswers: [
          "They are typically more complicated to set up and maintain than unit tests.",
        ],
      },
      {
        question:
          "What is the correct npm command to install Jest as a development dependency?",
        correctAnswers: ["npm install --save-dev jest"],
      },
      {
        question: "When writing a unit test, what is an assertion?",
        correctAnswers: [
          "A statement that declares what the expected outcome of a test should be.",
        ],
      },
      {
        question: "What is the primary purpose of Linting?",
        correctAnswers: [
          "To identify potential errors and fragile constructs in the code.",
        ],
      },
      {
        question: "What does Code Coverage measure?",
        correctAnswers: [
          "The percentage of lines of code that are executed during the test suite.",
        ],
      },
      {
        question: "How does Integration Testing differ from Unit Testing?",
        correctAnswers: [
          "It tests the interaction between multiple components or the whole system.",
        ],
      },
      {
        question: "In the context of Unit Testing, what is mocking?",
        correctAnswers: [
          "Creating fake versions of external dependencies (like databases) to isolate the code being tested.",
        ],
      },
      {
        question: "Why might you need to refactor an application for testability?",
        correctAnswers: [
          "Because logic and presentation are too tightly coupled, making it hard to test logic in isolation.",
        ],
      },
      {
        question:
          'Which statement best describes the difference between "Logic" and "Presentation" as defined in the text?',
        correctAnswers: [
          'Logic is the "pure intellectual domain" (business rules), while Presentation is how it is displayed to the user.',
        ],
      },
      {
        question:
          "Which testing tool is primarily used in this book for Integration Testing?",
        correctAnswers: ["Puppeteer"],
      },
      {
        question:
          "What is the primary argument the author makes regarding the value of Quality Assurance (QA)?",
        correctAnswers: [
          '"Practice makes permanent," so practicing proper QA builds good habits.',
        ],
      },
      {
        question:
          "Why does the author recommend delineating Logic from Presentation?",
        correctAnswers: ["It allows logic to be tested more easily with unit tests."],
      },
      {
        question:
          "Why did the author choose Jest over other frameworks like Mocha or Jasmine?",
        correctAnswers: [
          "It offers the best overall experience and is an excellent general-purpose framework.",
        ],
      },
      {
        question:
          'What is the "ultimate" integration test for a web application described in the book?',
        correctAnswers: [
          "Rendering the app in a browser, manipulating it, and verifying behavior.",
        ],
      },
      {
        question:
          'Which type of test is described as "very fine-grained," testing single components to ensure they function properly?',
        correctAnswers: ["Unit Testing"],
      },
      {
        question:
          "According to the chapter, which of the following is NOT one of the four key dimensions of a comprehensive QA plan?",
        correctAnswers: ["Code Complexity"],
      },
      {
        question: "What is Test-Driven Development (TDD)?",
        correctAnswers: ["Writing tests before writing the code that satisfies them."],
      },
      {
        question:
          "Which principle of maintenance is closely related to Continuous Integration?",
        correctAnswers: ['Prevent "Invisible" Failures.'],
      },      
    ],
  },
  {
    quiz: "Quiz 5 - Request and Response",
    questions: [
      {
        question: "Which method is used to render a view using Express's configured templating engine?",
        correctAnswers: ["res.render()"],
      },
      {
        question: "In a URL like http://localhost:3000/vacations?sort=price#details, what is #details called?",
        correctAnswers: ["Fragment"],
      },
      {
        question: "Which convenience property checks if a connection is secure (HTTPS)?",
        correctAnswers: ["req.secure"],
      },
      {
        question: "What are the two main objects that Express uses to handle HTTP communication?",
        correctAnswers: ["Request and Response objects"],
      },
      {
        question: "What does MIME stand for in the context of internet media types?",
        correctAnswers: ["Multipurpose Internet Mail Extensions"],
      },
      {
        question: "Which property distinguishes between a regular request and an Ajax request?",
        correctAnswers: ["req.xhr"],
      },
      {
        question: "What internet media type format is most common for POST request bodies?",
        correctAnswers: ["application/x-www-form-urlencoded"],
      },
      {
        question: "Which method sets the HTTP status code in Express?",
        correctAnswers: ["res.status()"],
      },
      {
        question: "Which method redirects the browser to a different URL?",
        correctAnswers: ["res.redirect()"],
      },
      {
        question: "What is the relationship between req.url and req.originalUrl?",
        correctAnswers: [
          "req.url can be rewritten for routing, but req.originalUrl remains unchanged",
        ],
      },
      {
        question: "What does the Content-Type header indicate?",
        correctAnswers: ["What kind of content is being transmitted"],
      },
      {
        question:
          "Which property provides information about the currently matched route, primarily useful for debugging?",
        correctAnswers: ["req.route"],
      },
      {
        question:
          "Which HTTP method is most commonly used when a user types a URL into a browser?",
        correctAnswers: ["GET"],
      },
      {
        question: "Which property would you use to access querystring parameters in Express?",
        correctAnswers: ["req.query"],
      },
      {
        question: "What Node object does the Express request object extend?",
        correctAnswers: ["http.IncomingMessage"],
      },
      {
        question:
          "How do you disable Express's default X-Powered-By header for security?",
        correctAnswers: ["app.disable('x-powered-by')"],
      },
      {
        question: "Where are POST parameters typically passed?",
        correctAnswers: ["In the request body"],
      },
      {
        question: "Which response method is used to send JSON data to the client?",
        correctAnswers: ["res.json()"],
      },
      {
        question:
          "What is the default HTTP status code that Express returns for successful responses?",
        correctAnswers: ["200"],
      },
      {
        question:
          "What port is assumed by default for HTTPS connections if no port is specified in the URL?",
        correctAnswers: ["443"],
      },
    ],
  },
  {
    quiz: "Quiz 6 - Handlebars Templating",
    questions: [
      {
        question: "What is the context object in Handlebars templating?",
        correctAnswers: [
          "The object passed to the templating engine containing data for replacements",
        ],
      },
      {
        question: "Which order does the templating engine render content when using layouts?",
        correctAnswers: ["View first, then layout"],
      },
      {
        question:
          "In Handlebars, how many curly brackets should you use to render HTML content without escaping it?",
        correctAnswers: ["Three brackets: {{{content}}}"],
      },
      {
        question: "Which comment syntax in Handlebars will NOT be sent to the browser?",
        correctAnswers: ["{{! comment }}"],
      },
      {
        question: "What does the {{#each}} helper do in Handlebars?",
        correctAnswers: ["Iterates over an array"],
      },
      {
        question: "What is a common use case for partials in web development?",
        correctAnswers: ["Reusable components (widgets) across different pages"],
      },
      {
        question:
          "What placeholder is used in a layout file to indicate where the view content should be rendered?",
        correctAnswers: ["{{{body}}}"],
      },
      {
        question: "How do you render a view without a layout in Express?",
        correctAnswers: ["res.render('view', { layout: null })"],
      },
      {
        question: 'What is the purpose of "sections" in Handlebars templates?',
        correctAnswers: [
          "To allow views to inject content into different parts of the layout",
        ],
      },
      {
        question:
          "Can express-handlebars support subdirectories for organizing partials?",
        correctAnswers: ["Yes, you can organize partials in subdirectories"],
      },
      {
        question:
          "What is the advantage of using HTML5 Boilerplate for templates?",
        correctAnswers: [
          "It offers a well-crafted starting point with cross-browser compatibility",
        ],
      },
      {
        question:
          "What is the primary advantage of using templating engines over writing HTML in JavaScript using document.write()?",
        correctAnswers: ["Avoids context switching and escaping issues"],
      },
      {
        question:
          "What npm package is used to add Handlebars support to Express?",
        correctAnswers: ["express-handlebars"],
      },
      {
        question: "What is the purpose of the {{#unless}} helper in Handlebars?",
        correctAnswers: ["It executes code only when the argument is false"],
      },
      {
        question:
          'How do you include a partial named "weather" in a Handlebars view?',
        correctAnswers: ["{{>weather}}"],
      },
      {
        question: "What is the default behavior of view caching in Express?",
        correctAnswers: ["Disabled in development, enabled in production"],
      },
      {
        question: "What is the purpose of a layout in Handlebars?",
        correctAnswers: [
          "To serve as a template for templates with common page structure",
        ],
      },
      {
        question:
          "How do you access a parent context property when inside a nested block in Handlebars?",
        correctAnswers: ["../property"],
      },
      {
        question: "Where does Express look for partials by default?",
        correctAnswers: ["/views/partials"],
      },
      {
        question: "By default, where does Express look for views?",
        correctAnswers: ["/views subdirectory"],
      },
    ],
  },
  {
    quiz: "Quiz 7 - Forms",
    questions: [
      {
        question: "What does the req.xhr property (or checking the header) help the server determine?",
        correctAnswers: ["If the request was made via AJAX"],
      },
      {
        question: "If the method attribute is omitted from an HTML <form> tag, what is the default?",
        correctAnswers: ["GET"],
      },
      {
        question: "Which encoding type is required for a form that includes file uploads?",
        correctAnswers: ["multipart/form-data"],
      },
      {
        question: 'What is the standard status code for a "See Other" redirect after a form submission?',
        correctAnswers: ["303"],
      },
      {
        question: "What is the purpose of the id attribute in an HTML input tag?",
        correctAnswers: ["Styling and frontend functionality"],
      },
      {
        question: "What happens if you omit the action attribute in an HTML form?",
        correctAnswers: ["The form is submitted to its own URL"],
      },
      {
        question: "Why is it recommended to redirect after a successful POST request?",
        correctAnswers: ['To prevent "Confirm Form Resubmission" warnings'],
      },
      {
        question: "Which attribute in an <input> field is used by the server to identify the field?",
        correctAnswers: ["name"],
      },
      {
        question: "Which HTTP method is typically associated with the querystring?",
        correctAnswers: ["GET"],
      },
      {
        question: "Why should you not use hidden form fields for secret information?",
        correctAnswers: ["Users can easily see them by viewing the source"],
      },
      {
        question: "What are the two primary options for sending client data to the server?",
        correctAnswers: ["Querystring and Request Body"],
      },
      {
        question: "Which middleware is commonly used in Express to handle URL-encoded form data?",
        correctAnswers: ["body-parser"],
      },
      {
        question: "Which Node package is recommended in the book for handling file uploads?",
        correctAnswers: ["multiparty"],
      },
      {
        question: "In a POST request, where does body-parser make the form data available?",
        correctAnswers: ["req.body"],
      },
      {
        question: 'What is a "honeypot" field in the context of form handling?',
        correctAnswers: ["A hidden field designed to catch bots"],
      },
      {
        question: "When using Fetch, what header is often sent to indicate an AJAX request?",
        correctAnswers: ["X-Requested-With"],
      },
      {
        question: "What is the risk of not specifying a form action?",
        correctAnswers: ["It may lead to data loss or incorrect routing"],
      },
      {
        question: "In modern web development, what is the shift regarding form rendering?",
        correctAnswers: ["Toward Single-Page Applications (SPAs)"],
      },
      {
        question: "What is the main benefit of using AJAX (Fetch) for form submission?",
        correctAnswers: ["It provides a more seamless user experience without page reloads"],
      },
      {
        question: "What is a major disadvantage of using GET for form submissions?",
        correctAnswers: ["Browsers often limit querystring length"],
      },
    ],
  },
];

function Solution() {
  return (
    <div className="quiz">
      {solutionData.map((quiz, quizIndex) => (
        <div key={quizIndex}>
          <h2>{quiz.quiz}</h2>
          {quiz.questions.map((q, qIndex) => (
            <div key={qIndex} className="question-block">
              <h3>{qIndex + 1}. {q.question}</h3>
              <p><strong>Correct Answer(s):</strong> {q.correctAnswers.join(", ")}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Solution;