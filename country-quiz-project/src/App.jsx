// import { useState, useRef, useEffect } from "react";
import "./App.css";
import { QuizSteps } from "./components/QuizSteps";
import { Quiz } from "./components/Quiz";
// import { Result } from "./components/Result";

function App() {
  return (
    <>
     <header className="header">
      <h1 className="header__title">Country Quiz</h1>
      <span className="header__score"><span className="score">0</span>/10 Points</span>
    </header>
    <main className='main'>
      <section className='quiz-section'>
        <div className='quiz-container'>
          <QuizSteps></QuizSteps>
          <Quiz></Quiz>
        </div>
      </section>
      {/* <section className='congrats-section'>
        <div className='congrats-section__container'>
          
          <img src='./congrats.png' width='100%' alt="Your congrats image couldn't download"  />

          <h1 className='congrats-section__title'>
            Congrats! You completed the quiz.
          </h1>
          <div className='congrats-section__results'>
            <Result></Result>
          </div>
          <button
            className='button congrats-section__restart-button'
            type='reset'
          >
            Play again
          </button>
        </div>
      </section> */}
      </main>
    </>
      );
      
}

export default App;
