import { ProgressBar } from "@/components/ProgressBar";
import type { Question, QuestionOption } from "@/types/diagnosis";

type QuestionScreenProps = {
  question: Question;
  currentIndex: number;
  total: number;
  onAnswer: (option: QuestionOption) => void;
  onBack?: () => void;
};

const markers = ["一", "二", "三", "四"];

export function QuestionScreen({ question, currentIndex, total, onAnswer, onBack }: QuestionScreenProps) {
  return (
    <main className="flex min-h-dvh items-center justify-center px-5 py-8 sm:px-8">
      <section className="w-full max-w-xl rounded-[2rem] border border-white/70 bg-white/70 px-5 py-7 shadow-card backdrop-blur-sm sm:px-10 sm:py-10">
        <ProgressBar current={currentIndex + 1} total={total} />

        <div key={question.id} className="question-enter mt-9">
          <p className="mb-3 text-xs tracking-[0.22em] text-shu">心のままに選んでください</p>
          <h2 className="min-h-[4.5rem] font-serif text-2xl font-medium leading-relaxed tracking-[0.04em] text-sumi sm:text-[1.75rem]">
            {question.text}
          </h2>

          <div className="mt-7 grid gap-3" role="group" aria-label={question.text}>
            {question.options.map((option, index) => (
              <button
                key={option.id}
                type="button"
                onClick={() => onAnswer(option)}
                className="group flex min-h-[4.25rem] w-full items-center gap-4 rounded-2xl border border-sumi/10 bg-[#fffdfa] px-4 py-3 text-left text-[15px] leading-6 text-sumi shadow-sm transition hover:-translate-y-0.5 hover:border-shu/50 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shu active:translate-y-0 sm:px-5 sm:text-base"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-kin/40 bg-washi font-serif text-sm text-enji transition group-hover:border-shu/50 group-hover:bg-shu group-hover:text-white" aria-hidden="true">
                  {markers[index]}
                </span>
                <span>{option.text}</span>
                <span className="ml-auto text-shu/0 transition group-hover:text-shu/70" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7 min-h-6">
          {onBack && (
            <button type="button" onClick={onBack} className="text-sm text-sumi/50 underline decoration-sumi/20 underline-offset-4 transition hover:text-enji focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-enji">
              ← 前の質問へ戻る
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
