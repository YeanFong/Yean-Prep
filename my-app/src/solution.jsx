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
  {
    quiz: "Quiz 8 - Cookies and Sessions",
    questions: [
      {
        question: "How do you clear or delete a cookie in Express?",
        correctAnswers: ["res.clearCookie('name')"],
      },
      {
        question:
          "What happens to a session if the session ID cookie is deleted by the user?",
        correctAnswers: [
          "The user is no longer associated with their session data",
        ],
      },
      {
        question: "What is the purpose of the maxAge option in a cookie?",
        correctAnswers: [
          "To determine how long the cookie lasts in milliseconds",
        ],
      },
      {
        question: "What is the main difference between a cookie and a session?",
        correctAnswers: [
          "Cookies are stored on the client; session data is stored on the server",
        ],
      },
      {
        question:
          "In Express, where can you access the parsed cookies from an incoming request?",
        correctAnswers: ["req.cookies"],
      },
      {
        question:
          "Which of these is a recommended production-ready session store?",
        correctAnswers: ["Redis or MongoDB"],
      },
      {
        question:
          "Which property should be set to true to ensure a cookie is only sent over encrypted connections?",
        correctAnswers: ["secure"],
      },
      {
        question: 'What is the "path" option used for when setting a cookie?',
        correctAnswers: ["The URL path for which the cookie is valid"],
      },
      {
        question:
          "Which header is used by the browser to send cookies back to the server?",
        correctAnswers: ["Cookie"],
      },
      {
        question: "What does the httpOnly flag on a cookie prevent?",
        correctAnswers: ["Access via client-side JavaScript (XSS)"],
      },
      {
        question:
          "Why is the default MemoryStore for sessions discouraged for production?",
        correctAnswers: [
          "It causes memory leaks and doesn't support multiple server instances",
        ],
      },
      {
        question:
          "To use signed cookies, what must be provided to the cookie-parser middleware?",
        correctAnswers: ["A secret string"],
      },
      {
        question: "Where are cookies actually stored?",
        correctAnswers: ["On the client's browser/computer"],
      },
      {
        question:
          "Why is session-based authentication often preferred over sending raw credentials with every request?",
        correctAnswers: [
          "It is more secure than re-sending passwords and reduces server load",
        ],
      },
      {
        question: 'What is a "signed" cookie in the context of Express?',
        correctAnswers: [
          "A cookie that is digitally signed to detect client-side tampering",
        ],
      },
      {
        question:
          "By default, Express's express-session uses which type of storage?",
        correctAnswers: ["MemoryStore"],
      },
      {
        question:
          "In Express, which middleware is typically used to handle cookies?",
        correctAnswers: ["cookie-parser"],
      },
      {
        question: 'What is a "Flash Message" typically used for?',
        correctAnswers: [
          'One-time notifications (e.g., "Success!") that disappear after being viewed',
        ],
      },
      {
        question:
          "When using cookie-parser, what is the functional difference between req.cookies and req.signedCookies?",
        correctAnswers: [
          "req.cookies contains unsigned cookies; req.signedCookies contains cookies verified against a secret",
        ],
      },
      {
        question:
          "Which method is used to set a cookie in an Express response?",
        correctAnswers: ["res.cookie()"],
      },
    ],
  },
  {
    quiz: "Quiz 9 - Middleware",
    questions: [
      {
        question: "Why might you use express.Router in an application?",
        correctAnswers: ["To partition routes"],
      },
      {
        question:
          "Order matters in middleware. If a 404 handler is placed before a valid route, what happens?",
        correctAnswers: ["The 404 is triggered"],
      },
      {
        question:
          "The express.static middleware is used for what purpose?",
        correctAnswers: ["Serving files like CSS/JS"],
      },
      {
        question: "Which of these can middleware NOT do?",
        correctAnswers: ["Delete the database"],
      },
      {
        question:
          "In Express, route handlers (like app.get) are considered what?",
        correctAnswers: ["Middleware"],
      },
      {
        question:
          "Which middleware is commonly used to parse URL-encoded form data?",
        correctAnswers: ["body-parser"],
      },
      {
        question:
          "Error-handling middleware in Express is unique because it takes how many arguments?",
        correctAnswers: ["4"],
      },
      {
        question: "Which middleware would you use to handle browser cookies?",
        correctAnswers: ["cookie-parser"],
      },
      {
        question:
          "If you want a middleware to run on every request, how should you add it?",
        correctAnswers: ["app.use()"],
      },
      {
        question:
          'Which of these is a "third-party" middleware mentioned in the text?',
        correctAnswers: ["cors"],
      },
      {
        question: "Why is next() crucial for modularity?",
        correctAnswers: ["It allows chainability"],
      },
      {
        question:
          "What happens if a middleware function does not call next() or send a response?",
        correctAnswers: ["The request hangs"],
      },
      {
        question:
          'In the middleware pipeline, what is the "catch-all" handler usually used for?',
        correctAnswers: ["404 Not Found"],
      },
      {
        question: "What is the purpose of the next() function in middleware?",
        correctAnswers: ["To pass control to the next middleware"],
      },
      {
        question:
          "Which middleware provides protection against Cross-Site Request Forgery?",
        correctAnswers: ["csurf"],
      },
      {
        question: 'What does the term "middleware principle" refer to?',
        correctAnswers: ["The pipeline pattern"],
      },
      {
        question:
          "What is the fundamental definition of middleware in the context of Express?",
        correctAnswers: ["A function that handles requests and responses"],
      },
      {
        question:
          "What is the primary difference between a route handler and general middleware?",
        correctAnswers: ["Routes have paths"],
      },
      {
        question:
          "Which middleware is typically used for logging requests in Express?",
        correctAnswers: ["morgan"],
      },
      {
        question:
          "Where is the body-parser data typically made available in the request?",
        correctAnswers: ["req.body"],
      },
    ],
  },
  {
    quiz: "Quiz 10 - Sending Email",
    questions: [
      {
        question: "What is recommended for bulk email sending?",
        correctAnswers: ["Specialized bulk email services"],
      },
      {
        question: "What layout technique is commonly used in HTML email?",
        correctAnswers: ["Tables"],
      },
      {
        question:
          "Nodemailer eliminates the need to understand complex email encoding details.",
        correctAnswers: ["True"],
      },
      {
        question:
          "What feature allows sending emails to multiple recipients?",
        correctAnswers: ["Nodemailer capability"],
      },
      {
        question: "What is the role of middleware in email sending?",
        correctAnswers: ["Encapsulating email functionality"],
      },
      {
        question: "What does Nodemailer help simplify?",
        correctAnswers: ["Email encoding and formatting"],
      },
      {
        question:
          'Email headers like the "from" address cannot be changed by the sender.',
        correctAnswers: ["False"],
      },
      {
        question: "Which library is used in Node.js for sending emails?",
        correctAnswers: ["Nodemailer"],
      },
      {
        question: "Why is HTML email difficult to implement?",
        correctAnswers: ["Limited client support and outdated standards"],
      },
      {
        question: "Which protocol is primarily used for sending email?",
        correctAnswers: ["SMTP"],
      },
      {
        question: "What is required in every email message?",
        correctAnswers: ["From address"],
      },
      {
        question:
          "HTML email is universally consistent across all email clients.",
        correctAnswers: ["False"],
      },
      {
        question:
          "What is recommended when writing HTML email for compatibility?",
        correctAnswers: ["Write simple, old-style HTML"],
      },
      {
        question:
          "What is a common practice for automated email addresses?",
        correctAnswers: ["do-not-reply@domain.com"],
      },
      {
        question: "What are the two main formats for email content?",
        correctAnswers: ["Plain text and HTML"],
      },
      {
        question:
          "Why is it recommended to include both HTML and text email versions?",
        correctAnswers: ["For compatibility with all users"],
      },
      {
        question: "What is one challenge with email compatibility?",
        correctAnswers: ["Different email client support"],
      },
      {
        question: 'What is "spoofing" in email?',
        correctAnswers: ['Setting a fake "from" address'],
      },
      {
        question: "What does MTA stand for?",
        correctAnswers: ["Mail Transfer Agent"],
      },
      {
        question: "What can be included in HTML emails?",
        correctAnswers: ["Images and formatted content"],
      },
    ],
  },
  {
    quiz: "Quiz 11 - Persistence",
    questions: [
      {
        question:
          'Which database type is characterized by a "schema-less" nature and stores data in documents?',
        correctAnswers: ["NoSQL (e.g., MongoDB)"],
      },
      {
        question:
          "Which property is typically used in a Mongoose schema to ensure a field must be provided?",
        correctAnswers: ["required: true"],
      },
      {
        question:
          "Why is it recommended to use environment variables for database credentials?",
        correctAnswers: ["To keep sensitive information out of source control"],
      },
      {
        question:
          "Which term refers to the ability of a database to handle growth by adding more machines to a cluster?",
        correctAnswers: ["Horizontal Scaling"],
      },
      {
        question: "What is the purpose of mongoose.connect()?",
        correctAnswers: [
          "To establish a connection between Node.js and MongoDB",
        ],
      },
      {
        question:
          'In a "One-to-Many" relationship in MongoDB, what is the most common way to represent the "Many" side?',
        correctAnswers: [
          "Nesting an array of subdocuments or using references",
        ],
      },
      {
        question: 'What is a "sharded" database?',
        correctAnswers: [
          "A database where data is partitioned across multiple servers",
        ],
      },
      {
        question:
          "How does MongoDB handle document identifiers by default?",
        correctAnswers: ["It generates a unique _id field (ObjectId)"],
      },
      {
        question:
          'What is a "Connection String" (URI) in the context of MongoDB?',
        correctAnswers: [
          "A URL that tells the application where and how to connect to the database",
        ],
      },
      {
        question: 'What is a "Seeder" script used for in development?',
        correctAnswers: [
          "To populate a database with initial or dummy data",
        ],
      },
      {
        question:
          'What is the main benefit of "Normalization" in relational databases?',
        correctAnswers: ["Reduced data redundancy and improved integrity"],
      },
      {
        question:
          "Which Node.js package is widely used as an Object Data Modeling (ODM) library for MongoDB?",
        correctAnswers: ["Mongoose"],
      },
      {
        question:
          "Which of the following is a reason to choose a Relational Database (like PostgreSQL) over a NoSQL database?",
        correctAnswers: [
          "Requirement for complex joins and strict data integrity",
        ],
      },
      {
        question: "What does the Lean option do in a Mongoose query?",
        correctAnswers: [
          "It returns plain JavaScript objects instead of full Mongoose documents",
        ],
      },
      {
        question:
          'What does "ACID" stand for in relational database management systems?',
        correctAnswers: [
          "Atomicity, Consistency, Isolation, Durability",
        ],
      },
      {
        question:
          "What happens if you try to save a Mongoose document that fails schema validation?",
        correctAnswers: [
          "The save() method returns an error or rejects the promise",
        ],
      },
      {
        question:
          'When using MongoDB, what is a "collection" roughly equivalent to in a relational database?',
        correctAnswers: ["A Table"],
      },
      {
        question:
          "In Mongoose, what is the difference between a Schema and a Model?",
        correctAnswers: [
          "A Schema defines structure; a Model is a constructor compiled from the Schema",
        ],
      },
      {
        question:
          "Which Mongoose method is used to retrieve a single document by its ID?",
        correctAnswers: ["Model.findById()"],
      },
      {
        question:
          "Which of the following is NOT a valid Mongoose SchemaType?",
        correctAnswers: ["ArrayList"],
      },
    ],
  },
  {
    quiz: "Quiz 12 - Route Management",
    questions: [
      {
        question:
          "If a sub-router is mounted at /admin and has a route .get('/users'), what is the full URL?",
        correctAnswers: ["/admin/users"],
      },
      {
        question:
          "How do you access the query string (e.g., ?sort=asc) in a route handler?",
        correctAnswers: ["req.query"],
      },
      {
        question:
          "Can route parameters contain hyphens (-) or dots (.)?",
        correctAnswers: [
          "Yes, they are interpreted literally between parameters",
        ],
      },
      {
        question:
          "Chapter 14 discusses using Regular Expressions in routes. How are they passed to app.get?",
        correctAnswers: ["As a RegExp literal (e.g., /^\\/user$/)"],
      },
      {
        question:
          "Where are route parameters stored in the Express request object?",
        correctAnswers: ["req.params"],
      },
      {
        question:
          "According to Chapter 14, what is the primary benefit of moving route handlers into their own modules?",
        correctAnswers: [
          "It improves maintainability and keeps the main file clean",
        ],
      },
      {
        question:
          'Why might you use express.Router() to create a "sub-router"?',
        correctAnswers: [
          "To group related routes (like an admin section) under a common prefix",
        ],
      },
      {
        question: 'What is a "sluggified" URL?',
        correctAnswers: [
          "A human-readable string used in a URL (e.g., /post/my-new-post)",
        ],
      },
      {
        question:
          "Why is it important to place the 404 handler after all other routes?",
        correctAnswers: [
          "So it only executes if no other route matches",
        ],
      },
      {
        question:
          'In the example of "Route Groups," what is the suggested way to link a "staff" module to the main app?',
        correctAnswers: [
          "Using require('./lib/handlers') and passing the app to a function",
        ],
      },
      {
        question:
          "How does Express handle a route defined with a wildcard *?",
        correctAnswers: ["It matches any character sequence"],
      },
      {
        question:
          "What does the + character signify in an Express route path?",
        correctAnswers: [
          "Matches the preceding character one or more times",
        ],
      },
      {
        question:
          "If you define a route /user(name)?, which URLs will match?",
        correctAnswers: ["Both /user and /username"],
      },
      {
        question:
          "In a route path like /staff/:city/:name, what represents a route parameter?",
        correctAnswers: [":city and :name"],
      },
      {
        question: "What is the purpose of the app.route() method?",
        correctAnswers: [
          "To create chainable route handlers for a single route path",
        ],
      },
      {
        question:
          "Which of these is a valid way to handle a POST request to /signup?",
        correctAnswers: ["app.post('/signup', ...)"],
      },
      {
        question:
          'Chapter 14 mentions "Automatic Views." What does this concept refer to?',
        correctAnswers: [
          "A pattern where routes are automatically generated based on view file names",
        ],
      },
      {
        question:
          'What is the "Redirection" status code typically used for a permanent move?',
        correctAnswers: ["301"],
      },
      {
        question:
          "When using res.render('profile', { name: 'Node' }), what is the second argument?",
        correctAnswers: [
          "The context object (data passed to the view)",
        ],
      },
      {
        question:
          "Which character is used in an Express route path to make the preceding character optional?",
        correctAnswers: ["?"],
      },
    ],
  },
  {
    quiz: "Quiz 13 - API Request",
    questions: [
      {
        question:
          "What HTTP header is used by the client to indicate what media types it is willing to receive from the API?",
        correctAnswers: ["Accept"],
      },
      {
        question:
          "What is the recommended naming convention for resource URIs in a REST API?",
        correctAnswers: [
          "Use plural nouns for resource collections (e.g., /api/users).",
        ],
      },
      {
        question:
          "What does the acronym REST stand for in the context of web APIs?",
        correctAnswers: ["Representational State Transfer"],
      },
      {
        question: 'What is meant by the "stateless" constraint in REST?',
        correctAnswers: [
          "No client context is stored on the server between requests.",
        ],
      },
      {
        question:
          "In an Express route handling API errors, what is the default status code if none is explicitly set before sending the response?",
        correctAnswers: ["200 OK"],
      },
      {
        question:
          "What is a common practice for maintaining backward compatibility when updating an API's structure?",
        correctAnswers: [
          "Versioning the API, typically in the URL path (e.g., /api/v1/).",
        ],
      },
      {
        question: "What is the purpose of CORS in web development?",
        correctAnswers: [
          "To allow restricted resources on a web page to be requested from another domain.",
        ],
      },
      {
        question:
          "What HTTP status code is typically returned upon successfully creating a resource via a POST request?",
        correctAnswers: ["201 Created"],
      },
      {
        question: "What is the role of the Content-Type header in an API request?",
        correctAnswers: [
          "It indicates the media type of the resource being sent to the server.",
        ],
      },
      {
        question: 'What does it mean for an HTTP method to be "idempotent"?',
        correctAnswers: [
          "Performing it multiple times has the same effect as performing it once.",
        ],
      },
      {
        question:
          "Which HTTP method is conventionally used to retrieve an existing resource from a REST API?",
        correctAnswers: ["GET"],
      },
      {
        question:
          "Which HTTP method is standard for creating a new resource on the server?",
        correctAnswers: ["POST"],
      },
      {
        question:
          "In an Express application, which method is explicitly used to send a JSON response to the client?",
        correctAnswers: ["res.json(data)"],
      },
      {
        question:
          "When accessing the parsed data of a POST request, which Express object property is used?",
        correctAnswers: ["req.body"],
      },
      {
        question:
          "How do you access route parameters (e.g., the id in /api/users/:id) in an Express API route?",
        correctAnswers: ["req.params.id"],
      },
      {
        question:
          "Which built-in middleware is required in modern Express to parse incoming requests with JSON payloads?",
        correctAnswers: ["app.use(express.json())"],
      },
      {
        question:
          "What HTTP status code is appropriate when a user attempts an action they are not authenticated to perform?",
        correctAnswers: ["401 Unauthorized"],
      },
      {
        question:
          "How do you access query string parameters (e.g., ?sort=asc) in an Express GET request?",
        correctAnswers: ["req.query.sort"],
      },
      {
        question:
          "Why might an API endpoint return a 204 No Content status code?",
        correctAnswers: [
          "The request was successful, but there is no payload body to return.",
        ],
      },
      {
        question:
          "When an Express server encounters an unhandled exception during an API request, what status code should ideally be returned by the error-handling middleware?",
        correctAnswers: ["500 Internal Server Error"],
      },
      {
        question:
          "How does res.json() differ from res.send() when passing an object or array?",
        correctAnswers: [
          "res.json() sets the Content-Type header to application/json explicitly.",
        ],
      },
      {
        question:
          "Which HTTP status code should an API return if a requested resource, like a specific user ID, cannot be found?",
        correctAnswers: ["404 Not Found"],
      },
      {
        question:
          "Which HTTP method is specifically designed for applying partial modifications to a resource?",
        correctAnswers: ["PATCH"],
      },
      {
        question:
          "Which HTTP status code indicates a generic client-side error, such as malformed JSON syntax in the request body?",
        correctAnswers: ["400 Bad Request"],
      },
    ],
  },
  {
    quiz: "Quiz 14 - Express and SPA",
    questions: [
      {
        question: 'Why are "Loading Spinners" more common in SPAs?',
        correctAnswers: [
          "To indicate that data is being fetched asynchronously behind the scenes",
        ],
      },
      {
        question:
          'What is "Session Authentication" in the context of an SPA and Node.js?',
        correctAnswers: [
          "The server stores session data in memory or a database and tracks the user via a Session ID cookie",
        ],
      },
      {
        question:
          "Which architectural pattern is often used by SPAs to interact with the server?",
        correctAnswers: ["REST or GraphQL APIs"],
      },
      {
        question: 'What is "Client-Side Routing" in an SPA?',
        correctAnswers: [
          "Managing the URL and navigation within the browser via JavaScript",
        ],
      },
      {
        question:
          "Why is an SPA potentially more vulnerable to CSRF when using session-based authentication?",
        correctAnswers: [
          "Because the browser automatically attaches session cookies to all API requests, even if initiated from a different site",
        ],
      },
      {
        question: "What is Cross-Site Request Forgery (CSRF)?",
        correctAnswers: [
          "An attack that tricks a logged-in user's browser into sending a malicious request to a web app",
        ],
      },
      {
        question:
          "Which JavaScript framework is NOT primarily used for building SPAs?",
        correctAnswers: ["Express"],
      },
      {
        question:
          "How does an SPA handle a 404 error if the user types an invalid URL?",
        correctAnswers: [
          'The client-side router detects the mismatch and renders a "Not Found" component',
        ],
      },
      {
        question:
          "In an SPA, what does the server usually send in response to the very first request?",
        correctAnswers: [
          "A minimal HTML file, CSS, and a large JavaScript bundle",
        ],
      },
      {
        question:
          "Why might a developer choose JWT (JSON Web Tokens) over Sessions for an SPA?",
        correctAnswers: [
          "JWT is stateless, meaning the server doesn't need to store session data in a database",
        ],
      },
      {
        question:
          "What is the fundamental difference between a traditional web app and a Single-Page Application (SPA)?",
        correctAnswers: [
          "SPAs load a single HTML page and dynamically update content without full page reloads",
        ],
      },
      {
        question: 'Why is "State Management" more complex in an SPA?',
        correctAnswers: [
          "Because the app lives for a long time and must track data across many interactions",
        ],
      },
      {
        question:
          "In an SPA-Backend architecture, how is a CSRF token typically provided to the frontend?",
        correctAnswers: [
          "It is often sent in a cookie or as a custom header during the initial load or a login request",
        ],
      },
      {
        question:
          "Which of the following is a common challenge for SPAs mentioned in Chapter 16?",
        correctAnswers: [
          "Search Engine Optimization (SEO) for content rendered only via JS",
        ],
      },
      {
        question:
          'What is a "Preflight Request" (OPTIONS) in the context of SPA security?',
        correctAnswers: [
          "A request sent by the browser to check if the server allows a cross-origin request before sending the actual data",
        ],
      },
      {
        question:
          'What is the main advantage of an SPA regarding "Perceived Performance"?',
        correctAnswers: [
          'The UI feels more responsive because transitions happen immediately without "white flashes"',
        ],
      },
      {
        question:
          'Why should "state-changing" API methods (POST, PUT, DELETE) always require a CSRF token?',
        correctAnswers: [
          "Because GET requests are generally considered safe and shouldn't change data, whereas these methods modify server state",
        ],
      },
      {
        question:
          "Which browser API is primarily responsible for allowing SPAs to change the URL without a page reload?",
        correctAnswers: ["The History API (pushState)"],
      },
      {
        question:
          "What is the most common defense against CSRF mentioned in the context of Node/Express?",
        correctAnswers: [
          'Using CSRF tokens that the client must include in "state-changing" requests (POST, PUT, DELETE)',
        ],
      },
      {
        question: "What is the purpose of the HttpOnly flag on a session cookie?",
        correctAnswers: [
          "It prevents client-side JavaScript from accessing the cookie, reducing the risk of XSS attacks",
        ],
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