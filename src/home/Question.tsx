import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControls from "./QuizControls";
import { setAnswer } from "@/redux/features/quizSlice";

export default function Question() {
  const dispatch = useAppDispatch();
  const { quizes, currentQuizIndex, userAnswer } = useAppSelector(
    (state) => state.quiz
  );

  const currentQuiz = quizes[currentQuizIndex];
  const currentAnswer = userAnswer[currentQuizIndex];

  const handleOption = (ans: string) => {
    dispatch(
      setAnswer({
        questionIndex: currentQuizIndex,
        answer: ans,
      })
    );
    console.log(ans);
  };

  return (
    <div className="flex justify-center">
      <Card className="w-[450px]">
        <CardTitle>{currentQuiz.question}</CardTitle>

        <CardContent>
          <div>
            {currentQuiz.options.map((opt, idx) => (
              <Button
              variant={opt === currentAnswer ? "default" : "outline"}
                onClick={() => handleOption(opt)}
                key={idx}
                className="w-full mt-3 "
                size={"lg"}
              >
                {opt}
              </Button>
            ))}
          </div>

          <QuizControls></QuizControls>
        </CardContent>
        
      </Card>
    </div>
  );
}
