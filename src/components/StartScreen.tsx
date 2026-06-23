import { useState, type FormEvent } from "react";

type StartScreenProps = {
  onStart: (nickname: string) => void;
  error?: string;
};

export function StartScreen({ onStart, error }: StartScreenProps) {
  const [nickname, setNickname] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onStart(nickname.trim());
  }

  return (
    <main className="flex min-h-dvh items-center justify-center px-5 py-10 sm:px-8">
      <section className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 px-6 py-10 shadow-card backdrop-blur-sm sm:px-12 sm:py-14">
        <div className="absolute -right-16 -top-16 size-48 rounded-full border border-kin/20" aria-hidden="true" />
        <div className="absolute -right-9 -top-9 size-32 rounded-full border border-kin/25" aria-hidden="true" />

        <div className="relative text-center">
          <p className="mb-6 inline-flex items-center gap-3 text-xs tracking-[0.28em] text-enji/75">
            <span className="h-px w-8 bg-kin/70" />
            ことばで心を映す
            <span className="h-px w-8 bg-kin/70" />
          </p>

          <div className="mx-auto mb-7 grid size-16 place-items-center rounded-full border border-shu/30 bg-washi text-2xl text-shu shadow-sm" aria-hidden="true">
            百
          </div>

          <h1 className="font-serif text-[2rem] font-medium leading-[1.45] tracking-[0.08em] text-sumi sm:text-[2.5rem]">
            あなたを百人一首に<br />たとえるなら？
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-8 text-sumi/65 sm:text-base">
            10の問いから、小倉百人一首の全100首の中で今のあなたに寄り添う一首を見つけます。古典を知らなくても、気軽にお楽しみください。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative mt-9 space-y-4">
          <div>
            <label htmlFor="nickname" className="mb-2 block text-sm font-medium text-sumi/75">
              お名前 <span className="ml-1 text-xs font-normal text-sumi/45">任意</span>
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(event) => setNickname(event.target.value)}
              maxLength={30}
              autoComplete="nickname"
              placeholder="ニックネームを入力"
              className="min-h-14 w-full rounded-xl border border-sumi/15 bg-white/75 px-4 text-base text-sumi outline-none transition placeholder:text-sumi/30 focus:border-shu focus:ring-4 focus:ring-shu/10"
            />
          </div>

          {error && <p role="alert" className="rounded-xl bg-shu/10 px-4 py-3 text-sm text-enji">{error}</p>}

          <button type="submit" className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-enji px-6 font-medium tracking-[0.08em] text-white shadow-lg shadow-enji/15 transition hover:bg-[#5e2725] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-enji active:translate-y-px">
            診断をはじめる
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </button>
        </form>

        <p className="relative mt-5 text-center text-xs leading-5 text-sumi/45">入力内容や回答は保存されません</p>
      </section>
    </main>
  );
}
