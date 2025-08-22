import { Button } from "@/components/ui/button";
import { nextQues, prevQues } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function QuizControls() {
  const dispatch = useAppDispatch();
  const { currentQuizIndex, userAnswer } = useAppSelector(
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

  return (
    <div className="flex justify-between mt-4">
      <Button onClick={handlePrev}>Previous</Button>
      <p>Question No : {currentQuizIndex}</p>
      <Button onClick={handleNext}>Next</Button>
    </div>
  );
}
