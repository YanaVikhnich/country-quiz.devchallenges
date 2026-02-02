import { useState, useEffect } from "react";
import { QuizAnswers } from "./QuizAnswers";
import { QuizQuestion } from "./QuizQuestion";
import Axios from "axios";
import "./Quiz.css";

export function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [correct, setCorrect] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  //   const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    Axios.get("https://restcountries.com/v3.1/all?fields=name,flags").then(
      (res) => {
        // setQuestions(res.data);
        let question, correctAnswer, answerOptions;
        const country = res.data[Math.floor(Math.random() * res.data.length)];
        const type = Math.floor(Math.random() * 4);

        switch (type) {
          case 0:
            question = (
              <div>What is the capital of {country.name.official}?</div>
            );
            correctAnswer = country.name.common;
            answerOptions = res.data
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((c) => c.name.common)
              .concat(correctAnswer);
            setCorrect(correctAnswer);
            break;
          case 1:
            question = (
              <div>{country.name.common} is a capital of which country?</div>
            );
            correctAnswer = country.name.official;
            answerOptions = res.data
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((c) => c.name.official)
              .concat(correctAnswer);
            setCorrect(correctAnswer);
            break;
          case 2:
            question = (
              <div>
                This flag{" "}
                <img
                  className='flag-image'
                  src={country.flags.png}
                  alt='This flag belongs to which country?'
                />{" "}
                belongs to which country?
              </div>
            );
            correctAnswer = country.name.official;
            answerOptions = res.data
              .sort(() => 0.5 - Math.random())
              .slice(0, 3)
              .map((c) => c.name.official)
              .concat(correctAnswer);
            setCorrect(correctAnswer);
            break;
          case 3:
            question = <div>Which flag has {country.name.common} ? </div>;
            correctAnswer = country.flags.png;

            answerOptions = res.data
              .sort(() => 0.5 - Math.random)
              .slice(0, 3)
              .map((c) => c.flags.png)
              .concat(correctAnswer);
            
            setCorrect(correctAnswer);
            break;
        }

        setCurrentQuestion(question);

        setAnswers(answerOptions.sort(() => 0.5 - Math.random()));

        console.log(res.data);
      },
    );
  }, []);

  //   const handleAnswer = (questionIndex, answerIndex) => {};

  //   const handleNextQuestion = () => {};

  //   const handlePrevQuestion = () => {};

  //   const handleFinishQuiz = () => {};

  return (
    <div className='quiz'>
      <QuizQuestion currentQuestionVal={currentQuestion} />
      <QuizAnswers answersVal={answers} correctVal={correct} />
    </div>
  );
}
