"use client";

import { useState } from "react";
import { QuestionScreen } from "@/components/QuestionScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { StartScreen } from "@/components/StartScreen";
import { poems, defaultPoem } from "@/data/poems";
import { questions } from "@/data/questions";
import { aggregateScores, findBestPoem } from "@/lib/diagnosis";
import type { Poem, QuestionOption } from "@/types/diagnosis";

type Step = "start" | "questions" | "result";

export default function Home() {
  const [step, setStep] = useState<Step>("start");
  const [nickname, setNickname] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuestionOption[]>([]);
  const [result, setResult] = useState<Poem | undefined>();
  const [error, setError] = useState<string>();

  function startDiagnosis(name: string) {
    if (questions.length === 0) {
      setError("診断データを読み込めませんでした。時間をおいてもう一度お試しください。");
      return;
    }
    setNickname(name);
    setAnswers([]);
    setCurrentIndex(0);
    setResult(undefined);
    setError(undefined);
    setStep("questions");
  }

  function answerQuestion(option: QuestionOption) {
    const nextAnswers = [...answers.slice(0, currentIndex), option];

    if (currentIndex < questions.length - 1) {
      setAnswers(nextAnswers);
      setCurrentIndex((index) => index + 1);
      return;
    }

    if (nextAnswers.length !== questions.length) {
      setAnswers(nextAnswers);
      setCurrentIndex(Math.min(nextAnswers.length, questions.length - 1));
      return;
    }

    const selectedPoem = findBestPoem(aggregateScores(nextAnswers), poems) ?? defaultPoem;
    if (!selectedPoem) {
      setError("診断結果を読み込めませんでした。もう一度お試しください。");
      setStep("start");
      return;
    }

    setAnswers(nextAnswers);
    setResult(selectedPoem);
    setStep("result");
  }

  function goBack() {
    if (currentIndex === 0) return;
    setCurrentIndex((index) => index - 1);
  }

  function restart() {
    setStep("start");
    setNickname("");
    setAnswers([]);
    setCurrentIndex(0);
    setResult(undefined);
    setError(undefined);
  }

  if (step === "questions") {
    const currentQuestion = questions[currentIndex];
    if (!currentQuestion) return <StartScreen onStart={startDiagnosis} error="診断データを読み込めませんでした。" />;
    return <QuestionScreen question={currentQuestion} currentIndex={currentIndex} total={questions.length} onAnswer={answerQuestion} onBack={currentIndex > 0 ? goBack : undefined} />;
  }

  if (step === "result" && result) {
    return <ResultScreen nickname={nickname} poem={result} onRestart={restart} />;
  }

  return <StartScreen onStart={startDiagnosis} error={error} />;
}
