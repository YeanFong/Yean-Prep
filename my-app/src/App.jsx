import React, { useState } from "react";
import Quiz1 from "./quizzes/quiz1";
import Quiz2 from "./quizzes/quiz2";
import Quiz3 from "./quizzes/quiz3";
import Quiz4 from "./quizzes/quiz4";
import Quiz5 from "./quizzes/quiz5";
import Quiz6 from "./quizzes/quiz6";
import Quiz7 from "./quizzes/quiz7";
import Quiz8 from "./quizzes/quiz8";
import Quiz9 from "./quizzes/quiz9";
import Quiz10 from "./quizzes/quiz10";
import Quiz11 from "./quizzes/quiz11";
import Quiz12 from "./quizzes/quiz12";
import Quiz13 from "./quizzes/quiz13";
import Quiz14 from "./quizzes/quiz14";
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
        <button onClick={() => handleQuizChange("quiz6")}>Quiz 6</button>
        <button onClick={() => handleQuizChange("quiz7")}>Quiz 7</button>
        <button onClick={() => handleQuizChange("quiz8")}>Quiz 8</button>
        <button onClick={() => handleQuizChange("quiz9")}>Quiz 9</button>
        <button onClick={() => handleQuizChange("quiz10")}>Quiz 10</button>
        <button onClick={() => handleQuizChange("quiz11")}>Quiz 11</button>
        <button onClick={() => handleQuizChange("quiz12")}>Quiz 12</button>
        <button onClick={() => handleQuizChange("quiz13")}>Quiz 13</button>
        <button onClick={() => handleQuizChange("quiz14")}>Quiz 14</button>
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
            {selectedQuiz === "quiz6" && <Quiz6 />}
            {selectedQuiz === "quiz7" && <Quiz7 />}
            {selectedQuiz === "quiz8" && <Quiz8 />}
            {selectedQuiz === "quiz9" && <Quiz9 />}
            {selectedQuiz === "quiz10" && <Quiz10 />}
            {selectedQuiz === "quiz11" && <Quiz11 />}
            {selectedQuiz === "quiz12" && <Quiz12 />}
            {selectedQuiz === "quiz13" && <Quiz13 />}
            {selectedQuiz === "quiz14" && <Quiz14 />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;