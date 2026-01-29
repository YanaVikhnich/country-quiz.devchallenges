import "./QuizStep.css";

export function QuizStep({ stepNumber }) {
  return (
    <>
      <button className='button quiz-steps__count'>
        <span className='quiz-steps__number'>{stepNumber}</span>
      </button>
    </>
  );
}
