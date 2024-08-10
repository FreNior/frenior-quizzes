/* eslint-disable react/prop-types */
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './Option.css'

const Option = ({ option, selectOption, answer, hide }) => {
    const [ quizState ] = useContext(QuizContext)

  return (
    <div className={` option 
      ${quizState.answerSelected && option === answer ? 'correct' : ''} 
      ${quizState.answerSelected && option !== answer ? 'incorrect' : ''}
      ${hide ? "hide" : ""}
    `} onClick={() => selectOption()}> {option} </div>
  )
}

export default Option