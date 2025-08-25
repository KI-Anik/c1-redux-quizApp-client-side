import AddQuiz from './home/AddQuiz'
import AllQuiz from './home/AllQuiz'
import Question from './home/Question'
import QuizSummary from './home/QuizSummary'
import { useAppSelector } from './redux/hook'

export default function App() {
  const {quizComplete} = useAppSelector((state)=> state.quiz)
  
  return (
    <div className='mt-10'>
      <AddQuiz></AddQuiz>
      <AllQuiz></AllQuiz>
      {quizComplete ? <QuizSummary/>: <Question></Question>  }
    </div>
  )
}
