import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useAppSelector } from "@/redux/hook";

const getPerformance = (percentage: number) => {
  if (percentage >= 90) {
    return {
      rating: "Excellent",
      color: "bg-green-800",
      commment: "Well done",
    };
  } else if (percentage >= 50) {
    return {
      rating: "Good",
      color: "bg-yellow-500",
      commment: "Great job",
    };
  } else if (percentage >= 30) {
    return {
      rating: "Need Improvement",
      color: "bg-orange-500",
      commment: "keep practicing",
    };
  } else {
    return {
      rating: "poor",
      color: "bg-red-500",
      comment: "Study more and more",
    };
  }
};

const QuizSummary = () => {
  const { quizes, userAnswer } = useAppSelector((state) => state.quiz);

  // calculate correct answer
  const correctAnswerCount = quizes.reduce((count, quizes, idx) => {
    return quizes.correctAnswer === userAnswer[idx] ? count + 1 : count;
  }, 0);

  const incorrectAnswerCount = quizes.length - correctAnswerCount;

  const correctAnsPercentage = parseFloat(
    ((correctAnswerCount / quizes.length) * 100).toFixed(2)
  );

  const { rating, color, comment } = getPerformance(correctAnsPercentage);

  return (
    <div>
      <Card className="max-w-lg mx-auto p-6 shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <p className="text-xl font-semibold">
            you got {correctAnswerCount} out of {quizes.length}
          </p>

          {/* // prograss bar */}
          <div>
            <Progress
              value={correctAnsPercentage}
              className={`h-4 rounded-full ${color}`}
            ></Progress>
          </div>
          <div className="flex justify-between text-sm">
            <span>{correctAnsPercentage}%</span>
            <span>Performance : {rating}</span>
          </div>
          <div>
            <strong>InCorrect Answer: {incorrectAnswerCount}</strong>
          </div>
          <div>
            <p>{comment}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSummary;
