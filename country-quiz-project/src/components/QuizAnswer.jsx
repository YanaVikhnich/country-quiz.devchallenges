import "./QuizAnswer.css";

export function QuizAnswer({ id, name, label }) {
  return (
    <>
      <li className='quiz__answers-items'>
        <input
          type='radio'
          className='input-control quiz__answer-input-control'
          id={id}
          name={name}
        />
        <label htmlFor={id} className='quiz__answer'>
          {label}
        </label>
      </li>
    </>
  );
}
