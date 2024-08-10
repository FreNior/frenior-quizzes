import { useContext } from 'react';
import Welcome from './components/Welcome'
import Question from './components/Question';
import { QuizContext } from './context/quiz';
import GameOver from './components/GameOver';

import './App.css'
import PickCategory from './components/PickCategory';
import TitleLogo from './img/fontbolt.png'

function App() {
  const [quizState] = useContext(QuizContext);

  return (
    <div className='App'>
      <img src={TitleLogo} alt="Title logo"/>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Category" && <PickCategory />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App
