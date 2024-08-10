import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from '../img/category.svg';
import './PickCategory.css'


const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const chooseCategoryAndReorderQuestions = (category) => {
        dispatch({type: "START_GAME", payload: category})

        dispatch({type: "REORDER_QUESTIONS"})
    }

  return (
    <div id="category">
        <h2> Escolha um tema: </h2>
        <div>
        {quizState.questions.map((question) => (
            <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>
        ))}
        </div>
        <img src={Category} alt="Temas do quiz" />
    </div>
  )
}

export default PickCategory