import React, { useState } from "react";
import Quiz1 from "./quizzes/quiz1";
import Quiz2 from "./quizzes/quiz2";
import Quiz3 from "./quizzes/quiz3";
import Quiz4 from "./quizzes/quiz4";
import Quiz5 from "./quizzes/quiz5";
import Solution from './solution';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState("quiz1"); 
  const [showSolutions, setShowSolutions] = useState(false); 
  const handleQuizChange = (quizId) => {
    setSelectedQuiz(quizId);
  };

  const handleSolutionToggle = () => {
    setShowSolutions((prevState) => !prevState);
  };

  return (
    <div className="App">
      <h1>Backend Midterm Prep</h1>
      
      {/* Quiz Selection Buttons */}
      <div>
        <button onClick={() => handleQuizChange("quiz1")}>Quiz 1</button>
        <button onClick={() => handleQuizChange("quiz2")}>Quiz 2</button>
        <button onClick={() => handleQuizChange("quiz3")}>Quiz 3</button>
        <button onClick={() => handleQuizChange("quiz4")}>Quiz 4</button>
        <button onClick={() => handleQuizChange("quiz5")}>Quiz 5</button>
      </div>

      {/* Toggle Button for Solutions */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleSolutionToggle}>
          {showSolutions ? "Hide Solutions" : "Show Solutions"}
        </button>
      </div>

      {/* Render Quiz or Solutions based on the state */}
      <div>
        {showSolutions ? (
          <Solution /> // Show solutions when toggled
        ) : (
          <>
            {selectedQuiz === "quiz1" && <Quiz1 />}
            {selectedQuiz === "quiz2" && <Quiz2 />}
            {selectedQuiz === "quiz3" && <Quiz3 />}
            {selectedQuiz === "quiz4" && <Quiz4 />}
            {selectedQuiz === "quiz5" && <Quiz5 />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
