import { QuizAnswer } from "./QuizAnswer";

import "./QuizAnswers.css";

export function QuizAnswers() {
  return (
    <>
      <ul className='quiz__answers-list'>
        <QuizAnswer id='top-left' name='answer' label='Answer 1' />
        <QuizAnswer id='top-right' name='answer' label='Answer 2' />
        <QuizAnswer id='bottom-left' name='answer' label='Answer 3' />
        <QuizAnswer id='bottom-right' name='answer' label='Answer 4' />
      </ul>
    </>
  );
}
