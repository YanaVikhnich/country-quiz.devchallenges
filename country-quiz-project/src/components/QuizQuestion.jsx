import "./QuizQuestion.css";

export function QuizQuestion({ currentQuestionVal }) {
  return <div className='quiz__question'>{currentQuestionVal}</div>;
}
