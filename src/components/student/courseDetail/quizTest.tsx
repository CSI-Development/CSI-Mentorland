// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";

function QuizTest({ activeLecture }: any) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [answers, setAnswers] = useState<any>([]);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const questions = [...activeLecture[2]];

  // handleOptionChange(currentQuestion, true, "2")

  const handleOptionChange = (
    questionId: number,
    optionIndex?: number | React.SetStateAction<null>,
    questionType?: string,
    isChecked?: boolean,
  ) => {
    if (questionType === "1") {
      const updatedAnswers = selectedAnswer ? [...selectedAnswer] : [];
      if (isChecked) {
        updatedAnswers.push(optionIndex);
      } else {
        const index = updatedAnswers.indexOf(optionIndex);
        if (index > -1) {
          updatedAnswers.splice(index, 1);
        }
      }
      setSelectedAnswer(updatedAnswers);
    } else {
      setSelectedAnswer(optionIndex);
    }
    setCheckAnswer(false);
    setIsCorrect(null);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null); // Reset selected answer
    setCheckAnswer(false);
    setIsCorrect(null);
  };

  const compareArray = (arr1: any[], arr2: any[]): boolean => {
    // If the lengths are not equal, the arrays are not equal
    if (arr1?.length !== arr2?.length) {
      return false;
    }

    return arr1 === arr2;


  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      let correct;
      const currentQ = questions[currentQuestion - 1];
      if (currentQ?.questionType === "3") {
        correct = selectedAnswer === currentQ.answer[0];
      } else if (currentQ?.questionType === "1") {

        console.log(currentQ.answer, " Api response")

        const arr = currentQ.answer.map((str: string) => +str);
        console.log(arr, "arr1")

        // if (compareArray(arr, selectedAnswer)) {
        // }

        // console.log(compareArray(correct, selectedAnswer),"erfdgb")
        console.log(JSON.stringify(correct), " A");
        console.log(JSON.stringify(selectedAnswer), " b");

      } else if (currentQ?.questionType === "2") {
        correct = selectedAnswer === (currentQ.answer[0] === "TRUE");
      }
      setAnswers([...answers, { questionId: currentQuestion, correct }]);
      setIsCorrect(true);
      setCheckAnswer(true);
      console.log(correct, "correct answer");
    }
  };

  return (
    <div>
      {currentQuestion <= questions.length && (
        <div className="border-b border-primary pb-4">
          <div className="mb-5">
            {checkAnswer &&
              (isCorrect ? (
                <p className="rounded bg-green-300 px-4 py-3 font-bold">
                  Good job!
                </p>
              ) : (
                <p className="rounded bg-red-300 px-4 py-3 font-bold">
                  Please choose the correct Answer!
                </p>
              ))}
          </div>
          <h1>Question: {currentQuestion}</h1>
          <h2 className="mt-2">{questions[currentQuestion - 1]?.question}</h2>
          <div className="mt-3">
            {questions[currentQuestion - 1]?.questionType === "3" && (
              <ul className="grid grid-cols-1 gap-4 bg-white">
                {questions[currentQuestion - 1]?.options?.map(
                  (option: any, index: number) => (
                    <li
                      key={index}
                      className={`flex w-full items-center rounded border border-black px-2 py-3`}
                    >
                      <input
                        type="radio"
                        id={`ans${index + 1}`}
                        name="answer"
                        className="h-4 w-4"
                        checked={selectedAnswer === index}
                        onChange={() =>
                          handleOptionChange(currentQuestion, index, "3")
                        }
                      />
                      <label htmlFor={`ans${index + 1}`} className="ml-3">
                        {option}
                      </label>
                    </li>
                  ),
                )}
              </ul>
            )}
            {questions[currentQuestion - 1]?.questionType === "1" && (
              <ul className="grid grid-cols-1 gap-4 bg-white">
                {questions[currentQuestion - 1]?.options?.map(
                  (option: any, index: number) => (
                    <li
                      key={index}
                      className={`flex w-full items-center rounded border border-black px-2 py-3`}
                    >
                      <input
                        type="checkbox"
                        id={`ans${index + 1}`}
                        name="answer"
                        className="h-4 w-4"
                        checked={
                          selectedAnswer
                            ? selectedAnswer.includes(index)
                            : false
                        }
                        onChange={(e) =>
                          handleOptionChange(
                            currentQuestion,
                            index,
                            "1",
                            e.target.checked,
                          )
                        }
                      />
                      <label htmlFor={`ans${index + 1}`} className="ml-3">
                        {option}
                      </label>
                    </li>
                  ),
                )}
              </ul>
            )}
            {questions[currentQuestion - 1]?.questionType === "2" && (
              <ul className="grid grid-cols-1 gap-4 bg-white">
                <li
                  className={`flex w-full items-center rounded border border-black px-2 py-3`}
                >
                  <input
                    type="radio"
                    id={`true`}
                    name="answer"
                    className="h-4 w-4"
                    checked={selectedAnswer === true}
                    onChange={() =>
                      handleOptionChange(currentQuestion, 0, "2", true)
                    }
                  />
                  <label htmlFor={`true`} className="ml-3">
                    True
                  </label>
                </li>
                <li
                  className={`flex w-full items-center rounded border border-black px-2 py-3`}
                >
                  <input
                    type="radio"
                    id={`false`}
                    name="answer"
                    className="h-4 w-4"
                    checked={selectedAnswer === false}
                    onChange={() =>
                      handleOptionChange(currentQuestion, 0, "2", false)
                    }
                  />
                  <label htmlFor={`false`} className="ml-3">
                    False
                  </label>
                </li>
              </ul>
            )}
          </div>
          <div className="mt-10 flex w-full items-center justify-between">
            <h2>
              Questions {currentQuestion} of {questions.length}
            </h2>
            <div className="flex items-center gap-5">
              {isCorrect ? (
                <button
                  type="button"
                  className={`rounded border-2 border-black px-4 py-2 font-bold ${!checkAnswer ? "hidden" : "block cursor-pointer"}`}
                  onClick={handleNextQuestion}
                  disabled={!checkAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  type="button"
                  className={`rounded border bg-primary px-4 py-2 font-bold text-white ${selectedAnswer === null || checkAnswer ? "cursor-not-allowed opacity-20" : "cursor-pointer opacity-100"}`}
                  onClick={handleCheckAnswer}
                  disabled={selectedAnswer === null || checkAnswer}
                >
                  Check Answer
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {currentQuestion > questions.length && (
        <div>
          <h2>Quiz Completed!</h2>
          {/* Display score or any other summary */}
        </div>
      )}
    </div>
  );
}

export default QuizTest;
