import { ShareButton } from "@/components/ShareButton";
import type { Poem } from "@/types/diagnosis";

type ResultScreenProps = {
  nickname: string;
  poem: Poem;
  onRestart: () => void;
};

export function ResultScreen({ nickname, poem, onRestart }: ResultScreenProps) {
  const displayName = nickname ? `${nickname}さん` : "あなた";

  return (
    <main className="min-h-dvh px-4 py-7 sm:px-8 sm:py-12">
      <article className="result-enter mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-card backdrop-blur-sm">
        <header className="relative overflow-hidden border-b border-kin/20 bg-[#f0e7d7] px-6 py-9 text-center sm:px-12 sm:py-12">
          <div className="absolute -left-10 -top-14 size-40 rounded-full border border-kin/25" aria-hidden="true" />
          <div className="absolute -bottom-16 -right-8 size-44 rounded-full border border-shu/15" aria-hidden="true" />
          <p className="relative text-xs tracking-[0.3em] text-enji/70">診断結果</p>
          <h1 className="relative mt-3 font-serif text-xl tracking-[0.08em] text-sumi sm:text-2xl">{displayName}に合う一首</h1>
          <span className="relative mx-auto mt-5 block h-px w-16 bg-kin" />
        </header>

        <div className="px-5 py-8 sm:px-12 sm:py-11">
          <section aria-label="選ばれた百人一首" className="rounded-2xl border border-kin/25 bg-[#fffdfa] px-5 py-8 text-center shadow-sm sm:px-9 sm:py-10">
            <p className="font-serif text-[1.35rem] leading-[2.15] tracking-[0.12em] text-sumi sm:text-[1.65rem]">
              {poem.kamiNoKu}<br />
              {poem.shimoNoKu}
            </p>
            <div className="mx-auto my-5 h-px w-10 bg-shu/50" />
            <p className="text-sm tracking-[0.12em] text-sumi/60">{poem.poet}</p>
          </section>

          <section className="mt-8">
            <p className="section-label">現代語訳</p>
            <p className="mt-3 text-[15px] leading-8 text-sumi/75">{poem.translation}</p>
          </section>

          <section className="mt-7 rounded-2xl bg-washi/80 p-5 sm:p-6">
            <p className="section-label">この歌が映すあなた</p>
            <p className="mt-3 text-[15px] leading-8 text-sumi/80">{poem.comment}</p>
          </section>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <section className="rounded-2xl border border-shu/15 bg-shu/[0.035] p-5">
              <p className="section-label">今のあなたへ</p>
              <p className="mt-3 text-sm leading-7 text-sumi/75">{poem.message}</p>
            </section>
            <section className="rounded-2xl border border-kin/25 bg-kin/[0.045] p-5">
              <p className="section-label">おすすめの一歩</p>
              <p className="mt-3 text-sm leading-7 text-sumi/75">{poem.action}</p>
            </section>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ShareButton displayName={displayName} poem={poem} />
            <button type="button" onClick={onRestart} className="min-h-14 flex-1 rounded-xl border border-enji/30 bg-white px-5 font-medium text-enji transition hover:bg-enji/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-enji">
              もう一度診断する
            </button>
          </div>
          <p className="mt-6 text-center text-xs text-sumi/40">百人一首 第{Number(poem.id)}番</p>
        </div>
      </article>
    </main>
  );
}
