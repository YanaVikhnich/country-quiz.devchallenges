import { QuizAnswers } from "./QuizAnswers";
import { QuizQuestion } from "./QuizQuestion";
import "./Quiz.css";

export function Quiz() {
  return (
    <div className='quiz'>
      <QuizQuestion />
      <QuizAnswers />
    </div>
  );
}
