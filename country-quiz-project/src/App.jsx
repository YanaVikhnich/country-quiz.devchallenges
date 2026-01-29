import { useState, useRef, useEffect } from "react";
import "./App.css";
import { QuizSteps } from "./components/QuizSteps";
import { Quiz } from "./components/Quiz";
import { Result } from "./components/Result";

function App() {
  return (
    <main className='main'>
      <section className='quiz-section'>
        <div className='quiz-container'>
          <QuizSteps></QuizSteps>
          <Quiz></Quiz>
        </div>
      </section>
      {/* <section className='congrats-section'>
        <div className='congrats-section__container'>
          <svg height='100' className='congrats-section__congrats-image'>
            <image width='300' xlinkHref='./images/congrats.png' />
          </svg>
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
  );
}

export default App;
