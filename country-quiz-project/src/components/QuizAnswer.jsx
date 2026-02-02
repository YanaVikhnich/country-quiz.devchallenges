import { useState } from "react";
import "./QuizAnswer.css";

export function QuizAnswer({ id, name, label, correct }) {
  const [selected, setSelected] = useState(null);
  function handleSelect(e) {
    setSelected(e.target.value);
  }

  return (
    <>
      <li className='quiz__answers-items'>
        <input
          type='radio'
          className='quiz__answer-input-control'
          id={id}
          name={name}
          value={label}
          onChange={handleSelect}
        />
        <label htmlFor={id} className='quiz__answer'>
          {label.startsWith("https://") ? (
            <img
              src={label}
              className='flag-image'
              alt='Flags of the countries'
            />
          ) : (
             label 
          )}

          {selected &&
            (selected === correct ? (
              <svg className='svg-image'>
                {" "}
                <use href={"/symbol-defs.svg#icon-Check_round_fill"} />
              </svg>
            ) : (
              <svg className='svg-image'>
                {" "}
                <use href={"/symbol-defs.svg#icon-Close_round_fill"} />
              </svg>
            ))}
        </label>
      </li>
    </>
  );
}
