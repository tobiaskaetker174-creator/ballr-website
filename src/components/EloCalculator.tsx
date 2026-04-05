"use client";

import { useState } from "react";

type Question = {
  id: string;
  question: string;
  options: { label: string; value: number }[];
};

const questions: Question[] = [
  {
    id: "experience",
    question: "How long have you been playing football regularly?",
    options: [
      { label: "Just started / Beginner", value: -100 },
      { label: "1-3 years casually", value: 0 },
      { label: "5+ years regularly", value: 100 },
      { label: "Played semi-pro or competitively", value: 200 },
    ],
  },
  {
    id: "fitness",
    question: "How's your fitness level?",
    options: [
      { label: "I get tired quickly", value: -50 },
      { label: "Average - can play a full game", value: 0 },
      { label: "Above average - rarely get tired", value: 50 },
      { label: "Elite - I outlast everyone", value: 100 },
    ],
  },
  {
    id: "skills",
    question: "Rate your technical skills (passing, dribbling, shooting)",
    options: [
      { label: "Still learning the basics", value: -100 },
      { label: "Can hold my own", value: 0 },
      { label: "Solid technique, creative plays", value: 100 },
      { label: "I'm the playmaker", value: 150 },
    ],
  },
  {
    id: "position",
    question: "What position do you usually play?",
    options: [
      { label: "Goalkeeper", value: 50 },
      { label: "Defender", value: 0 },
      { label: "Midfielder", value: 25 },
      { label: "Forward / Striker", value: 50 },
    ],
  },
];

export function EloCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateElo = () => {
    const baseElo = 1000;
    const bonus = answers.reduce((sum, val) => sum + val, 0);
    return Math.max(800, Math.min(1600, baseElo + bonus));
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getEloLabel = (elo: number) => {
    if (elo < 950) return { label: "Beginner", emoji: "🌱", desc: "Everyone starts somewhere!" };
    if (elo < 1100) return { label: "Developing", emoji: "📈", desc: "You're improving fast" };
    if (elo < 1250) return { label: "Intermediate", emoji: "⚽", desc: "Solid player" };
    if (elo < 1400) return { label: "Advanced", emoji: "⭐", desc: "Teams want you" };
    return { label: "Elite", emoji: "👑", desc: "Top tier player" };
  };

  if (showResult) {
    const elo = calculateElo();
    const { label, emoji, desc } = getEloLabel(elo);

    return (
      <div className="bg-surface border border-accent/30 rounded-2xl p-8 text-center max-w-md mx-auto">
        <div className="text-6xl mb-4">{emoji}</div>
        <h3 className="text-2xl font-black mb-2">Your Estimated ELO</h3>
        <div className="text-5xl font-black text-accent mb-3">{elo}</div>
        <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
          <span className="text-sm font-bold text-accent">{label}</span>
        </div>
        <p className="text-text-secondary mb-6">{desc}</p>
        <div className="space-y-3">
          <button
            onClick={reset}
            className="w-full border border-border/50 hover:border-accent/50 text-text-secondary hover:text-text font-semibold px-6 py-3 rounded-xl transition-all"
            aria-label="Retake the ELO quiz"
          >
            Try Again
          </button>
          <a
            href="/create"
            className="block w-full bg-accent hover:bg-accent/90 text-background font-bold px-6 py-3 rounded-xl transition-all"
            aria-label="Create your league to get your real ELO rating"
          >
            Get Your Real ELO →
          </a>
        </div>
        <p className="text-xs text-text-muted mt-4">
          This is just an estimate. Your real ELO is calculated from actual game results.
        </p>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-surface border border-border/20 rounded-2xl p-8 max-w-md mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-text-muted mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-surface-dark rounded-full h-2">
          <div
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-xl font-bold mb-6">{question.question}</h3>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(option.value)}
            className="w-full text-left bg-surface-dark hover:bg-accent/10 hover:border-accent/30 border border-border/20 rounded-xl p-4 transition-all hover:scale-[1.02] font-medium"
            aria-label={option.label}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Reset */}
      {currentQuestion > 0 && (
        <button
          onClick={reset}
          className="mt-6 text-sm text-text-muted hover:text-text transition-colors"
          aria-label="Start over"
        >
          ← Start Over
        </button>
      )}
    </div>
  );
}
