import { Button } from "@/components/ui/button";
import { completeQuiz, nextQues, prevQues } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControls() {
  const dispatch = useAppDispatch();
  const { quizes, currentQuizIndex, userAnswer, quizComplete } = useAppSelector(
    (state) => state.quiz
  );
  const isAnswerSelected = userAnswer[currentQuizIndex] !== null;

  const handleNext = () => {
    if (isAnswerSelected) {
      dispatch(nextQues());
    }
  };

  const handlePrev = () => {
    dispatch(prevQues());
  };

  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };
  console.log(currentQuizIndex, quizes.length - 1);

  return (
    <div className="flex justify-between mt-4">
      {/* previous button */}
      <Button
        onClick={handlePrev}
        disabled={currentQuizIndex === 0 || quizComplete}
      >
        Previous
      </Button>

      <p>Question No : {currentQuizIndex + 1}</p>

      {/* next button */}
      {currentQuizIndex < quizes.length - 1 && !quizComplete ? (
        <Button onClick={handleNext} disabled={!isAnswerSelected}>
          Next
        </Button>
      ) : (
        <Button onClick={handleCompleteQuiz}>Complete Quiz</Button>
      )}
    </div>
  );
}
