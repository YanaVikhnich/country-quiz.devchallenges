
import { QuizAnswer } from "./QuizAnswer";

import "./QuizAnswers.css";

export function QuizAnswers({ answersVal, correctVal }) {
  if (answersVal.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ul className='quiz__answers-list'>
        {answersVal.map((data) => {
          return (
            <QuizAnswer
              key={data.id}
              id={data.id}
              name='answer'
              label={data}
              correct={correctVal}
            />
          );
        })}
      </ul>
    </>
  );
}
